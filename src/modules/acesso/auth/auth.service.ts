import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { RoleRepository } from "../role/role.repository";
import { User } from "../user/entities/user.entity";
import { ListGroupJwtDto } from "../group/dto/list-group-jwt.dto";
import { UserRepository } from "../user/user.repository";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private roleRepository: RoleRepository,
    private userRepository: UserRepository
  ) {}

  async createToken(user: User) {
    const groups = user.groups?.map((g) => new ListGroupJwtDto(g.id, g.name, g.role, g.admin));

    let roles = [];
    if (groups.some((e) => e.admin)) {
      const listRoles = await this.roleRepository.findAll();
      roles = listRoles.map((r) => r.name);
    } else {
      roles = groups.flatMap((g) => g.role.map((r) => r.name));
    }

    return {
      accessToken: this.jwtService.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
          roles: [...new Set(roles)],
        },
        {
          expiresIn: "7 days",
          subject: String(user.id),
          issuer: "login",
          audience: "access",
        }
      ),
    };
  }

  verifyToken(token: string) {
    try {
      return this.jwtService.verify(token, {
        audience: "access",
        issuer: "login",
      });
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  isValidToken(token: string) {
    try {
      this.verifyToken(token);
      return true;
    } catch (e) {
      return false;
    }
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.getUserAuth(email);

    if (!user) {
      throw new UnauthorizedException("Email e/ou senha incorretos.");
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException("Email e/ou senha incorretos.");
    }

    return this.createToken(user);
  }

  // async forget(email: string) {
  //   const user = await this.userService.getUserAuthByEmail(email);
  //   if (!user) {
  //     throw new UnauthorizedException("Email não encontrado");
  //   }

  //   this.jwtService.sign(
  //     {
  //       id: user.id,
  //     },
  //     {
  //       expiresIn: "30 minutes",
  //       subject: String(user.id),
  //       issuer: "forget",
  //       audience: "users",
  //     }
  //   );

  //   return true;
  // }

  // async reset(password: string, token: string) {
  //   try {
  //     const data: any = this.jwtService.verify(token, {
  //       issuer: "forget",
  //       audience: "users",
  //     });

  //     if (isNaN(Number(data.id))) {
  //       throw new BadRequestException("Token é inválido");
  //     }
  //     const salt = await bcrypt.genSalt();
  //     password = await bcrypt.hash(password, salt);
  //     await this.userService.updateAuth(data, password);

  //     const user = await this.userService.show(String(data.id));

  //     return this.createToken(user);
  //   } catch (e) {
  //     throw new BadRequestException(e);
  //   }
  // }

  // async register(data: AuthRegisterDto) {
  //   const user = await this.userService.create(data);

  //   return this.createToken(user);
}

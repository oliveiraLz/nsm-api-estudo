import { CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { AuthService } from "../modules/acesso/auth/auth.service";
import { UserRepository } from "../modules/acesso/user/user.repository";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserRepository
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    try {
      const data = this.authService.verifyToken((authorization ?? "").split(" ")[1]);
      request.tokenPayLoad = data;

      const user = await this.userRepository.findOne(data.id);
      if (!user) {
        throw new NotFoundException("Usuário não encontrado");
      }
      request.user;
      return true;
    } catch (e) {
      return false;
    }
  }
}

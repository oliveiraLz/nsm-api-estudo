import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { RolesEnum } from "../enums/roles.enum";
import { ROLES_KEY } from "../decorators/role.decorator";
import { Groups } from "../modules/acesso/group/entities/group.entity";
import { Role } from "../modules/acesso/role/entities/role.entity";
import { UserRepository } from "../modules/acesso/user/user.repository";
import { GroupsRepository } from "../modules/acesso/group/group.repository";
import { RoleRepository } from "../modules/acesso/role/role.repository";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly groupsRepository: GroupsRepository,
    private readonly userRepository: UserRepository,
    private readonly roleRepository: RoleRepository
  ) {}

  async canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<RolesEnum[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const userGroup: Groups[] = await this.getGroupsByUser(request.user.id);

    const groupRoles = await this.getRolesForGroup(userGroup);

    const rolesFilted = requiredRoles.filter((reqRoles) => {
      return groupRoles.map((gp) => gp.name).includes(reqRoles);
    });
    return rolesFilted.length > 0;
  }

  async getRolesForGroup(groups: Groups[]): Promise<Role[]> {
    if (groups.some((e) => e.admin)) {
      return await this.roleRepository.findAll();
    } else {
      const findGroups = await this.groupsRepository.findGroupsAndRelations(groups);
      const roles: Role[] = [];
      for (const group of findGroups) {
        roles.push(...group.role);
      }
      return roles;
    }
  }

  async getGroupsByUser(id: string): Promise<Groups[]> {
    return await this.userRepository.findGroupsByUserUuid(id);
  }
}

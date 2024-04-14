import { Injectable } from "@nestjs/common";
import { GroupsRepository } from "./group.repository";

@Injectable()
export class GroupService {
  constructor(private groupsRepository: GroupsRepository) {}

  // async findAll(token: string) {
  //   const tenant = this.authService.getTenant(token);

  //   const retorno = await this.groupsRepository.find({
  //     select: ["id", "name"],
  //     where: { tenant: { id: tenant } },
  //     relations: { role: true },
  //   });

  //   return retorno.map((r) => new ListGroupDto(r.id, r.name, r.role?.map((g) => new ListRoleGroupDto(g.id, g.name))));
  // }

  // async findByName(name: string) {
  //   return await this.groupsRepository.findOne({ where: { name } });
  // }

  // async create(data: CreateGroupDto, token: string) {
  //   let role;

  //   if (data.role) {
  //     role = await Promise.all(data.role.map((name) => this.preloadRolessEntityByName(name)));
  //   }

  //   const tenant = this.authService.getTenant(token);

  //   const group = this.groupsRepository.create({
  //     ...data,
  //     role,
  //     tenant,
  //   });

  //   const buscaGroup = await this.findByGroup(group.name);
  //   if (buscaGroup) {
  //     throw new ConflictException("Grupo já cadastrado");
  //   }
  //   return await this.groupsRepository.save(group);
  // }

  // async update(id: string, data: UpdateGroupDto) {
  //   const role = data.role && (await Promise.all(data.role.map((id) => this.preloadRolessEntityByName(id))));
  //   const group = await this.groupsRepository.preload({
  //     id,
  //     ...data,
  //     role,
  //   });
  //   return await this.groupsRepository.save(group);
  // }

  // async delete(id: string) {
  //   const group = await this.groupsRepository.findOne({
  //     where: { id: id },
  //   });
  //   if (!group) {
  //     throw new NotAcceptableException("Grupo não existe");
  //   }
  //   return this.groupsRepository.remove(group);
  // }

  // private async preloadRolessEntityByName(id: string): Promise<RoleEntity> {
  //   const roleEntity = await this.rolesRepository.findOne({
  //     where: { id },
  //   });
  //   if (roleEntity) {
  //     return roleEntity;
  //   }
  //   return this.rolesRepository.create({ id });
  // }

  // async exists(id: string) {
  //   if (
  //     !(await this.groupsRepository.findOne({
  //       where: {
  //         id,
  //       },
  //     }))
  //   ) {
  //     throw new NotFoundException(`Grupo ${id} não existe`);
  //   }
  // }
}

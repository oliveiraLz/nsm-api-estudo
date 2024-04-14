import { Inject, Injectable } from "@nestjs/common";
import { Role } from "./entities/role.entity";
import { Repository } from "typeorm";

@Injectable()
export class RoleRepository {
  constructor(
    @Inject("ROLE_REPOSITORY")
    private repository: Repository<Role>
  ) {}

  async findAll() {
    return await this.repository.find();
  }
}

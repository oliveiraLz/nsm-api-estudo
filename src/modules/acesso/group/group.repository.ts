import { Inject, Injectable } from "@nestjs/common";
import { Groups } from "./entities/group.entity";
import { In, Repository } from "typeorm";

@Injectable()
export class GroupsRepository {
  constructor(
    @Inject("GROUP_REPOSITORY")
    private repository: Repository<Groups>
  ) {}

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async findGroupsAndRelations(groups: Groups[]): Promise<Groups[]> {
    const groupNames = groups.map((group) => group.name);

    return await this.repository.find({
      where: {
        name: In(groupNames),
      },
      relations: {
        role: true,
      },
    });
  }
}

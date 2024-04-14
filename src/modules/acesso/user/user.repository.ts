import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { GroupsRepository } from "../group/group.repository";
import { UpdateUserDto } from "./dto/update-user-dto";

@Injectable()
export class UserRepository {
  constructor(
    @Inject("USER_REPOSITORY")
    private repository: Repository<User>,
    private groupRepository: GroupsRepository
  ) {}

  async create(data: CreateUserDto) {
    const user = await this.repository.create();
    const groups = [];
    for (const groupId of data.groups) {
      const group = await this.groupRepository.findOne(groupId);
      if (group) {
        groups.push(group);
      }
    }
    user.name = data.name;
    user.email = data.email;
    user.password = data.password;
    user.groups = groups;

    return await this.save(user);
  }

  async findGroupsByUserUuid(id: string) {
    const user = await this.repository.findOne({
      where: {
        id,
      },
      relations: {
        groups: true,
      },
    });
    return user.groups;
  }

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }
  async findAll() {
    return await this.repository.find();
  }
  async update(user: User, update: UpdateUserDto) {
    const groups = [];
    for (const groupId of update.groups) {
      const group = await this.groupRepository.findOne(groupId);
      if (group) {
        groups.push(group);
      }
    }
    if (update.name) {
      user.name = update.name;
    }
    if (update.email) {
      user.email = update.email;
    }
    if (update.password) {
      user.password = update.password;
    }
    user.groups = groups;
    return this.repository.save({ ...user, update });
  }

  async save(user: User) {
    return await this.repository.save(user);
  }

  async remove(user: User) {
    return await this.repository.remove(user);
  }

  async getUserAuth(email: string) {
    return await this.repository.findOne({
      where: { email },
      relations: {
        groups: {
          role: true,
        },
      },
    });
  }
}

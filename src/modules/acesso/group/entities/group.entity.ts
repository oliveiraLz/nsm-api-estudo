import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Role } from "../../role/entities/role.entity";
import { Base } from "../../../../decorators/base.entity";

@Entity({ name: "group", schema: "acesso" })
export class Groups extends Base {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  admin: boolean;

  @ManyToMany(() => User, (usersEntity: User) => usersEntity.groups)
  users: User[];

  @JoinTable({
    name: "roles_groups",
    schema: "acesso",
    joinColumn: {
      name: "group_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "role_id",
      referencedColumnName: "id",
    },
  })
  @ManyToMany(() => Role, (rolesEntity: Role) => rolesEntity.groups, {
    cascade: true,
    nullable: true,
  })
  role: Role[];
}

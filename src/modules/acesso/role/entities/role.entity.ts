import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Groups } from "../../group/entities/group.entity";
import { Base } from "../../../../decorators/base.entity";

@Entity({ name: "role", schema: "acesso" })
export class Role extends Base {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Groups, (groupEntity: Groups) => groupEntity.role)
  groups: Groups[];
}

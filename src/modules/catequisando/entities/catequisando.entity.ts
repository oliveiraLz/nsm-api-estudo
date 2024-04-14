import { Turma } from "../../../modules/turma/entities/turma.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity({ schema: "catequese" })
export class Catequisando {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  nome: string;

  @Column({ type: "int", nullable: true })
  idade: number;

  @ManyToOne(() => Turma, (turma) => turma.catequisandos)
  turma: Turma;

  @Column({ type: "varchar", length: 255, nullable: true })
  cpf: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  cpf_responsavel: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  nome_pai: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  nome_mae: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  cel_pai: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  cel_mae: string;

  @Column({ type: "boolean", default: false })
  batizado: boolean;

  @Column({ type: "varchar", length: 255, nullable: true })
  endereco: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  cert_nascimento: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  cert_batismo: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  foto: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  comp_resid: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  doc_resp: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  termo_resp: string;
}

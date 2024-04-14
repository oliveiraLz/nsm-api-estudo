import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTurmaTable1712632967965 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE catequese.turma (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            nome VARCHAR NOT NULL
        );
       
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE IF EXISTS catequese.turma;
        `);
  }
}

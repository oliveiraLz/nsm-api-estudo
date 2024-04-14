import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEncontroTable1712633091997 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE catequese.encontro (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        turma_id UUID,
        tema VARCHAR NOT NULL,
        data DATE,
        FOREIGN KEY (turma_id) REFERENCES catequese.turma(id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS catequese.encontro;
    `);
  }
}

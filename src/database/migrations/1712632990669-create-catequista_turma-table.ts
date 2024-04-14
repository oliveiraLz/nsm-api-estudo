import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCatequistaTurmaTable1712632990669 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE catequese.catequista_turma (
        catequista_id UUID,
        turma_id UUID,
        PRIMARY KEY (catequista_id, turma_id),
        FOREIGN KEY (catequista_id) REFERENCES catequese.catequista(id) ON DELETE CASCADE,
        FOREIGN KEY (turma_id) REFERENCES catequese.turma(id) ON DELETE CASCADE
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS catequese.catequista_turma;
    `);
  }
}

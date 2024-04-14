import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFrequenciaTable1712633121385 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE catequese.frequencia (
        encontro_id UUID,
        catequisando_id UUID,
        status VARCHAR,
        PRIMARY KEY (encontro_id, catequisando_id),
        FOREIGN KEY (encontro_id) REFERENCES catequese.encontro(id) ON DELETE CASCADE,
        FOREIGN KEY (catequisando_id) REFERENCES catequese.catequisando(id) ON DELETE CASCADE
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS catequese.frequencia;
    `);
  }
}

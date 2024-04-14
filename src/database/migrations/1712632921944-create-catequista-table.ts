import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCatequistaTable1712632921944 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`

        CREATE SCHEMA IF NOT EXISTS catequese;

        CREATE TABLE catequese.catequista (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            nome VARCHAR NOT NULL
        );
           
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE IF EXISTS catequese.catequista;
        `);
  }
}

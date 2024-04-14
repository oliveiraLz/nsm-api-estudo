import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCatequisandoTable1712633110614 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`

      CREATE TABLE catequese.catequisando (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        nome VARCHAR NOT NULL,
        idade INTEGER,
        turma_id UUID,
        cpf VARCHAR,
        cpf_responsavel VARCHAR,
        nome_pai VARCHAR,
        nome_mae VARCHAR,
        cel_pai VARCHAR,
        cel_mae VARCHAR,
        batizado BOOLEAN,
        endereco VARCHAR,
        cert_nascimento VARCHAR,
        cert_batismo VARCHAR,
        foto VARCHAR,
        comp_resid VARCHAR,
        doc_resp VARCHAR,
        termo_resp VARCHAR,
        FOREIGN KEY (turma_id) REFERENCES catequese.turma(id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS catequese.catequisando;
    `);
  }
}

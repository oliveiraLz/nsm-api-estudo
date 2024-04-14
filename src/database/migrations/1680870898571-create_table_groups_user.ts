import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableGroupsUser1680870898571 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(` 
            CREATE TABLE acesso.groups_user (
                user_id uuid NOT NULL,
                group_id uuid NOT NULL,
                PRIMARY KEY ("user_id", "group_id"),
                FOREIGN KEY ("user_id") REFERENCES acesso."user"(id) ON DELETE CASCADE ON UPDATE CASCADE,
                FOREIGN KEY ("group_id") REFERENCES acesso."group"(id)
                          );
                        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                          DROP TABLE IF EXISTS acesso.groups_user;
                        `);
  }
}

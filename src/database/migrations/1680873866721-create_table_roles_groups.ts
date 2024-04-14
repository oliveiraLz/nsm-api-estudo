import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableRolesGroups1680873866721 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(` 
                CREATE TABLE acesso.roles_groups (
                    "role_id" uuid NOT NULL,
                    "group_id" uuid NOT NULL,
                    PRIMARY KEY ("role_id", "group_id"),
                    FOREIGN KEY ("role_id") REFERENCES acesso."role"(id),
                    FOREIGN KEY ("group_id") REFERENCES acesso."group"(id) ON DELETE CASCADE ON UPDATE CASCADE
                );
                            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                              DROP TABLE IF EXISTS acesso.roles_groups;
                            `);
  }
}

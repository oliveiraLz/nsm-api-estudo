import { MigrationInterface, QueryRunner } from "typeorm";

export class insertAdmin1681132465371 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        INSERT INTO acesso."user" (id,"name",email,"password",create_at,update_at,deleted_at) VALUES
         ('396d9a96-1b7c-429c-b9d2-a453b733df90','admin','admin@gmail.com','$2a$06$CRMRsc.E2NQw3WHQpSuG/.royk7n6W0WOyz2UkvlIBwYcbGv/hkLW','2024-04-01 08:09:22.990622','2024-04-01 08:09:22.990622',NULL);
    
        INSERT INTO acesso."group" (id,"name",create_at,update_at,deleted_at) VALUES
         ('0bbca75e-3dd6-4d36-932f-03dfed7bfd42','Administrador','2023-04-10 08:09:27.827741','2023-04-10 08:09:27.827741',NULL);
    
        INSERT INTO acesso.groups_user ("user_id","group_id") VALUES
         ('396d9a96-1b7c-429c-b9d2-a453b733df90','0bbca75e-3dd6-4d36-932f-03dfed7bfd42');
    
       INSERT INTO acesso."role" (id,"name",create_at,update_at,deleted_at) VALUES
         ('a05aa353-fc15-4405-906e-cc957a447125','ADMINISTRADOR','2023-04-10 08:09:35.014529','2023-04-10 08:09:35.014529',NULL);

        INSERT INTO acesso.roles_groups ("group_id","role_id") VALUES
         ('0bbca75e-3dd6-4d36-932f-03dfed7bfd42','a05aa353-fc15-4405-906e-cc957a447125');
                `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM acesso.roles_groups WHERE "group_id" = '0bbca75e-3dd6-4d36-932f-03dfed7bfd42';
        DELETE FROM acesso."role" WHERE id = 'a05aa353-fc15-4405-906e-cc957a447125';
        DELETE FROM acesso.groups_user WHERE "user_id" = '396d9a96-1b7c-429c-b9d2-a453b733df90' AND "group_id" = '0bbca75e-3dd6-4d36-932f-03dfed7bfd42';
        DELETE FROM acesso."group" WHERE id = '0bbca75e-3dd6-4d36-932f-03dfed7bfd42';
        DELETE FROM acesso."user" WHERE id = '396d9a96-1b7c-429c-b9d2-a453b733df90';
    `);
  }
}

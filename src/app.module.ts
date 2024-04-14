import { Module } from "@nestjs/common";
import { AuthModule } from "./modules/acesso/auth/auth.module";
import { GroupModule } from "./modules/acesso/group/group.module";
import { RoleModule } from "./modules/acesso/role/role.module";
import { UserModule } from "./modules/acesso/user/user.module";
import { CatequisandoModule } from "./modules/catequisando/catequisando.module";
import { CatequistaModule } from "./modules/catequista/catequista.module";
import { EncontroModule } from "./modules/encontro/encontro.module";
import { FrequenciaModule } from "./modules/frequencia/frequencia.module";
import { TurmaModule } from "./modules/turma/turma.module";

@Module({
  imports: [
    AuthModule,
    GroupModule,
    RoleModule,
    UserModule,
    CatequisandoModule,
    TurmaModule,
    CatequistaModule,
    EncontroModule,
    FrequenciaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

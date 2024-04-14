import { Module } from "@nestjs/common";
import { CatequisandoService } from "./catequisando.service";
import { CatequisandoController } from "./catequisando.controller";
import { DatabaseModule } from "../../database/database.module";
import { AuthModule } from "../acesso/auth/auth.module";
import { CatequisandoRepository } from "./catequisando.repository";
import { CatequisandoProviders } from "./catequisando.providers";

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [CatequisandoController],
  providers: [...CatequisandoProviders, CatequisandoService, CatequisandoRepository],
  exports: [CatequisandoRepository],
})
export class CatequisandoModule {}

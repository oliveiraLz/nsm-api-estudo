import { forwardRef, Module } from "@nestjs/common";
import { RoleController } from "./role.controller";
import { RoleService } from "./role.service";
import { RolesProviders } from "./role.providers";
import { AuthModule } from "../auth/auth.module";
import { DatabaseModule } from "../../../database/database.module";
import { RoleRepository } from "./role.repository";
import { UserModule } from "../user/user.module";

@Module({
  imports: [forwardRef(() => AuthModule), DatabaseModule, forwardRef(() => UserModule)],
  controllers: [RoleController],
  providers: [...RolesProviders, RoleService, RoleRepository],
  exports: [RoleRepository],
})
export class RoleModule {}

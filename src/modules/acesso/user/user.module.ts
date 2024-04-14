import { forwardRef, Module } from "@nestjs/common";
import { UsersService } from "./user.service";
import { UserController } from "./user.controller";
import { UsersProviders } from "./user.providers";
import { AuthModule } from "../auth/auth.module";
import { GroupService } from "../group/group.service";
import { DatabaseModule } from "../../../database/database.module";
import { GroupModule } from "../group/group.module";
import { RoleModule } from "../role/role.module";
import { UserRepository } from "./user.repository";

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule), GroupModule, RoleModule],
  controllers: [UserController],
  providers: [...UsersProviders, UsersService, GroupService, UserRepository],
  exports: [UserRepository],
})
export class UserModule {}

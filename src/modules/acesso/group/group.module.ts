import { forwardRef, Module } from "@nestjs/common";
import { GroupController } from "./group.controller";
import { GroupService } from "./group.service";
import { GroupProviders } from "./group.providers";
import { AuthModule } from "../auth/auth.module";
import { DatabaseModule } from "../../../database/database.module";
import { GroupsRepository } from "./group.repository";

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [GroupController],
  providers: [...GroupProviders, GroupService, GroupsRepository],
  exports: [GroupsRepository],
})
export class GroupModule {}

import { Module } from "@nestjs/common";
import { StaffModuleBase } from "./base/staff.module.base";
import { StaffService } from "./staff.service";
import { StaffController } from "./staff.controller";
import { StaffResolver } from "./staff.resolver";

@Module({
  imports: [StaffModuleBase],
  controllers: [StaffController],
  providers: [StaffService, StaffResolver],
  exports: [StaffService],
})
export class StaffModule {}

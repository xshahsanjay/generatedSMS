import { Module } from "@nestjs/common";
import { HrmService } from "./hrm.service";
import { HrmController } from "./hrm.controller";
import { HrmResolver } from "./hrm.resolver";

@Module({
  controllers: [HrmController],
  providers: [HrmService, HrmResolver],
  exports: [HrmService],
})
export class HrmModule {}

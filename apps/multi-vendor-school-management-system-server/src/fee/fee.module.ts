import { Module } from "@nestjs/common";
import { FeeModuleBase } from "./base/fee.module.base";
import { FeeService } from "./fee.service";
import { FeeController } from "./fee.controller";
import { FeeResolver } from "./fee.resolver";

@Module({
  imports: [FeeModuleBase],
  controllers: [FeeController],
  providers: [FeeService, FeeResolver],
  exports: [FeeService],
})
export class FeeModule {}

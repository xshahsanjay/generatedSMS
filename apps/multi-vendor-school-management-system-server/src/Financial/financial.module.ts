import { Module } from "@nestjs/common";
import { FinancialService } from "./financial.service";
import { FinancialController } from "./financial.controller";
import { FinancialResolver } from "./financial.resolver";

@Module({
  controllers: [FinancialController],
  providers: [FinancialService, FinancialResolver],
  exports: [FinancialService],
})
export class FinancialModule {}

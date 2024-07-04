import { Module } from "@nestjs/common";
import { SisService } from "./sis.service";
import { SisController } from "./sis.controller";
import { SisResolver } from "./sis.resolver";

@Module({
  controllers: [SisController],
  providers: [SisService, SisResolver],
  exports: [SisService],
})
export class SisModule {}

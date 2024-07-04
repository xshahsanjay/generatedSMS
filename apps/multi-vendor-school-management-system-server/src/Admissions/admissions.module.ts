import { Module } from "@nestjs/common";
import { AdmissionsService } from "./admissions.service";
import { AdmissionsController } from "./admissions.controller";
import { AdmissionsResolver } from "./admissions.resolver";

@Module({
  controllers: [AdmissionsController],
  providers: [AdmissionsService, AdmissionsResolver],
  exports: [AdmissionsService],
})
export class AdmissionsModule {}

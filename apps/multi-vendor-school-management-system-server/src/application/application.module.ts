import { Module } from "@nestjs/common";
import { ApplicationModuleBase } from "./base/application.module.base";
import { ApplicationService } from "./application.service";
import { ApplicationController } from "./application.controller";
import { ApplicationResolver } from "./application.resolver";

@Module({
  imports: [ApplicationModuleBase],
  controllers: [ApplicationController],
  providers: [ApplicationService, ApplicationResolver],
  exports: [ApplicationService],
})
export class ApplicationModule {}

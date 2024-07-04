import { Module } from "@nestjs/common";
import { LmsService } from "./lms.service";
import { LmsController } from "./lms.controller";
import { LmsResolver } from "./lms.resolver";

@Module({
  controllers: [LmsController],
  providers: [LmsService, LmsResolver],
  exports: [LmsService],
})
export class LmsModule {}

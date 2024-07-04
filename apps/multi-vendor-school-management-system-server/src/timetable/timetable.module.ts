import { Module } from "@nestjs/common";
import { TimetableModuleBase } from "./base/timetable.module.base";
import { TimetableService } from "./timetable.service";
import { TimetableController } from "./timetable.controller";
import { TimetableResolver } from "./timetable.resolver";

@Module({
  imports: [TimetableModuleBase],
  controllers: [TimetableController],
  providers: [TimetableService, TimetableResolver],
  exports: [TimetableService],
})
export class TimetableModule {}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimetableService } from "./timetable.service";
import { TimetableControllerBase } from "./base/timetable.controller.base";

@swagger.ApiTags("timetables")
@common.Controller("timetables")
export class TimetableController extends TimetableControllerBase {
  constructor(protected readonly service: TimetableService) {
    super(service);
  }
}

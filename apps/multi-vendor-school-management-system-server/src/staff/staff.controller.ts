import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StaffService } from "./staff.service";
import { StaffControllerBase } from "./base/staff.controller.base";

@swagger.ApiTags("staff")
@common.Controller("staff")
export class StaffController extends StaffControllerBase {
  constructor(protected readonly service: StaffService) {
    super(service);
  }
}

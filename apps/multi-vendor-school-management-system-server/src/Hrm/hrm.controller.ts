import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { HrmService } from "./hrm.service";

@swagger.ApiTags("hrms")
@common.Controller("hrms")
export class HrmController {
  constructor(protected readonly service: HrmService) {}
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdmissionsService } from "./admissions.service";

@swagger.ApiTags("admissions")
@common.Controller("admissions")
export class AdmissionsController {
  constructor(protected readonly service: AdmissionsService) {}
}

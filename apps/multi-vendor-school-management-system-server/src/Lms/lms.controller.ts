import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LmsService } from "./lms.service";

@swagger.ApiTags("lms")
@common.Controller("lms")
export class LmsController {
  constructor(protected readonly service: LmsService) {}
}

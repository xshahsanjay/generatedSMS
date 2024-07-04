import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplicationService } from "./application.service";
import { ApplicationControllerBase } from "./base/application.controller.base";

@swagger.ApiTags("applications")
@common.Controller("applications")
export class ApplicationController extends ApplicationControllerBase {
  constructor(protected readonly service: ApplicationService) {
    super(service);
  }
}

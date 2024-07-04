import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FeeService } from "./fee.service";
import { FeeControllerBase } from "./base/fee.controller.base";

@swagger.ApiTags("fees")
@common.Controller("fees")
export class FeeController extends FeeControllerBase {
  constructor(protected readonly service: FeeService) {
    super(service);
  }
}

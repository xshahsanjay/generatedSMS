import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SisService } from "./sis.service";

@swagger.ApiTags("ses")
@common.Controller("ses")
export class SisController {
  constructor(protected readonly service: SisService) {}
}

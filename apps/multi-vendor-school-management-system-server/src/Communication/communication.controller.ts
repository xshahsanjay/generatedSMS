import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CommunicationService } from "./communication.service";

@swagger.ApiTags("communications")
@common.Controller("communications")
export class CommunicationController {
  constructor(protected readonly service: CommunicationService) {}
}

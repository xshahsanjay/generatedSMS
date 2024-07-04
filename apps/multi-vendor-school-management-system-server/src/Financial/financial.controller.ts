import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FinancialService } from "./financial.service";

@swagger.ApiTags("financials")
@common.Controller("financials")
export class FinancialController {
  constructor(protected readonly service: FinancialService) {}
}

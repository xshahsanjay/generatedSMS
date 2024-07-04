import * as graphql from "@nestjs/graphql";
import { FinancialService } from "./financial.service";

export class FinancialResolver {
  constructor(protected readonly service: FinancialService) {}
}

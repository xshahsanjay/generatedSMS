import * as graphql from "@nestjs/graphql";
import { HrmService } from "./hrm.service";

export class HrmResolver {
  constructor(protected readonly service: HrmService) {}
}

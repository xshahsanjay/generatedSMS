import * as graphql from "@nestjs/graphql";
import { AdmissionsService } from "./admissions.service";

export class AdmissionsResolver {
  constructor(protected readonly service: AdmissionsService) {}
}

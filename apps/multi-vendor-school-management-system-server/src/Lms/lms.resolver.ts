import * as graphql from "@nestjs/graphql";
import { LmsService } from "./lms.service";

export class LmsResolver {
  constructor(protected readonly service: LmsService) {}
}

import * as graphql from "@nestjs/graphql";
import { SisService } from "./sis.service";

export class SisResolver {
  constructor(protected readonly service: SisService) {}
}

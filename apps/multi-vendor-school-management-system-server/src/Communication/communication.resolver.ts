import * as graphql from "@nestjs/graphql";
import { CommunicationService } from "./communication.service";

export class CommunicationResolver {
  constructor(protected readonly service: CommunicationService) {}
}

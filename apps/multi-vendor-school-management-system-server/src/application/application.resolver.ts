import * as graphql from "@nestjs/graphql";
import { ApplicationResolverBase } from "./base/application.resolver.base";
import { Application } from "./base/Application";
import { ApplicationService } from "./application.service";

@graphql.Resolver(() => Application)
export class ApplicationResolver extends ApplicationResolverBase {
  constructor(protected readonly service: ApplicationService) {
    super(service);
  }
}

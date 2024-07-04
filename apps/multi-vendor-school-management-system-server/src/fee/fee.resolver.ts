import * as graphql from "@nestjs/graphql";
import { FeeResolverBase } from "./base/fee.resolver.base";
import { Fee } from "./base/Fee";
import { FeeService } from "./fee.service";

@graphql.Resolver(() => Fee)
export class FeeResolver extends FeeResolverBase {
  constructor(protected readonly service: FeeService) {
    super(service);
  }
}

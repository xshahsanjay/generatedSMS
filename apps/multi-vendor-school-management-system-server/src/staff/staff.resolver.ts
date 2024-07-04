import * as graphql from "@nestjs/graphql";
import { StaffResolverBase } from "./base/staff.resolver.base";
import { Staff } from "./base/Staff";
import { StaffService } from "./staff.service";

@graphql.Resolver(() => Staff)
export class StaffResolver extends StaffResolverBase {
  constructor(protected readonly service: StaffService) {
    super(service);
  }
}

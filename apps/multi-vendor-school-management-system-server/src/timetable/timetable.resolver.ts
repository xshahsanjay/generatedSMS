import * as graphql from "@nestjs/graphql";
import { TimetableResolverBase } from "./base/timetable.resolver.base";
import { Timetable } from "./base/Timetable";
import { TimetableService } from "./timetable.service";

@graphql.Resolver(() => Timetable)
export class TimetableResolver extends TimetableResolverBase {
  constructor(protected readonly service: TimetableService) {
    super(service);
  }
}

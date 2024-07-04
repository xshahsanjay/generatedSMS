import * as graphql from "@nestjs/graphql";
import { CourseResolverBase } from "./base/course.resolver.base";
import { Course } from "./base/Course";
import { CourseService } from "./course.service";

@graphql.Resolver(() => Course)
export class CourseResolver extends CourseResolverBase {
  constructor(protected readonly service: CourseService) {
    super(service);
  }
}

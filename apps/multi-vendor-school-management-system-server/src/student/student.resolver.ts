import * as graphql from "@nestjs/graphql";
import { StudentResolverBase } from "./base/student.resolver.base";
import { Student } from "./base/Student";
import { StudentService } from "./student.service";

@graphql.Resolver(() => Student)
export class StudentResolver extends StudentResolverBase {
  constructor(protected readonly service: StudentService) {
    super(service);
  }
}

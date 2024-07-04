import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CourseService } from "./course.service";
import { CourseControllerBase } from "./base/course.controller.base";

@swagger.ApiTags("courses")
@common.Controller("courses")
export class CourseController extends CourseControllerBase {
  constructor(protected readonly service: CourseService) {
    super(service);
  }
}

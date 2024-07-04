import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentService } from "./student.service";
import { StudentControllerBase } from "./base/student.controller.base";

@swagger.ApiTags("students")
@common.Controller("students")
export class StudentController extends StudentControllerBase {
  constructor(protected readonly service: StudentService) {
    super(service);
  }
}

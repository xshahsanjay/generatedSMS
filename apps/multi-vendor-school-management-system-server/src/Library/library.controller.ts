import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LibraryService } from "./library.service";

@swagger.ApiTags("libraries")
@common.Controller("libraries")
export class LibraryController {
  constructor(protected readonly service: LibraryService) {}
}

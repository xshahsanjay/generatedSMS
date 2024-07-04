import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LibraryItemService } from "./libraryItem.service";
import { LibraryItemControllerBase } from "./base/libraryItem.controller.base";

@swagger.ApiTags("libraryItems")
@common.Controller("libraryItems")
export class LibraryItemController extends LibraryItemControllerBase {
  constructor(protected readonly service: LibraryItemService) {
    super(service);
  }
}

import { Module } from "@nestjs/common";
import { LibraryItemModuleBase } from "./base/libraryItem.module.base";
import { LibraryItemService } from "./libraryItem.service";
import { LibraryItemController } from "./libraryItem.controller";
import { LibraryItemResolver } from "./libraryItem.resolver";

@Module({
  imports: [LibraryItemModuleBase],
  controllers: [LibraryItemController],
  providers: [LibraryItemService, LibraryItemResolver],
  exports: [LibraryItemService],
})
export class LibraryItemModule {}

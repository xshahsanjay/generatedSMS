import * as graphql from "@nestjs/graphql";
import { LibraryItemResolverBase } from "./base/libraryItem.resolver.base";
import { LibraryItem } from "./base/LibraryItem";
import { LibraryItemService } from "./libraryItem.service";

@graphql.Resolver(() => LibraryItem)
export class LibraryItemResolver extends LibraryItemResolverBase {
  constructor(protected readonly service: LibraryItemService) {
    super(service);
  }
}

import { LibraryItemWhereInput } from "./LibraryItemWhereInput";
import { LibraryItemOrderByInput } from "./LibraryItemOrderByInput";

export type LibraryItemFindManyArgs = {
  where?: LibraryItemWhereInput;
  orderBy?: Array<LibraryItemOrderByInput>;
  skip?: number;
  take?: number;
};

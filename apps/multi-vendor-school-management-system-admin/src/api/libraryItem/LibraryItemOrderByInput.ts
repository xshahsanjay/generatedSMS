import { SortOrder } from "../../util/SortOrder";

export type LibraryItemOrderByInput = {
  author?: SortOrder;
  availabilityStatus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  publishDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

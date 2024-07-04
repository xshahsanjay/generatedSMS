import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  messageContent?: SortOrder;
  receiver?: SortOrder;
  sender?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};

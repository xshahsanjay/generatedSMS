import { SortOrder } from "../../util/SortOrder";

export type TimetableOrderByInput = {
  classRoom?: SortOrder;
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};

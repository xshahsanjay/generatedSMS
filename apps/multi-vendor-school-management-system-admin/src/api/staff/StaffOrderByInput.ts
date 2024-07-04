import { SortOrder } from "../../util/SortOrder";

export type StaffOrderByInput = {
  createdAt?: SortOrder;
  dateHired?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  position?: SortOrder;
  salary?: SortOrder;
  updatedAt?: SortOrder;
};

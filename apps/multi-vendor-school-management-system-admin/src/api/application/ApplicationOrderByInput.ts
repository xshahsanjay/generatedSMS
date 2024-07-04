import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  applicantName?: SortOrder;
  applicationDate?: SortOrder;
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};

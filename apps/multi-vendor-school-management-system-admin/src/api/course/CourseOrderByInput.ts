import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  courseName?: SortOrder;
  createdAt?: SortOrder;
  credits?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  schedule?: SortOrder;
  teacher?: SortOrder;
  updatedAt?: SortOrder;
};

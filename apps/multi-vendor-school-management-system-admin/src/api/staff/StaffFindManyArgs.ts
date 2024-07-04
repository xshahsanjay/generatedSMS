import { StaffWhereInput } from "./StaffWhereInput";
import { StaffOrderByInput } from "./StaffOrderByInput";

export type StaffFindManyArgs = {
  where?: StaffWhereInput;
  orderBy?: Array<StaffOrderByInput>;
  skip?: number;
  take?: number;
};

import { TimetableWhereInput } from "./TimetableWhereInput";
import { TimetableOrderByInput } from "./TimetableOrderByInput";

export type TimetableFindManyArgs = {
  where?: TimetableWhereInput;
  orderBy?: Array<TimetableOrderByInput>;
  skip?: number;
  take?: number;
};

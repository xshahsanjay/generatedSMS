import { FeeWhereInput } from "./FeeWhereInput";
import { FeeOrderByInput } from "./FeeOrderByInput";

export type FeeFindManyArgs = {
  where?: FeeWhereInput;
  orderBy?: Array<FeeOrderByInput>;
  skip?: number;
  take?: number;
};

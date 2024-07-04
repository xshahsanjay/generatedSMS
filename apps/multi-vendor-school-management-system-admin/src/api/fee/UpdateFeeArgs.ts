import { FeeWhereUniqueInput } from "./FeeWhereUniqueInput";
import { FeeUpdateInput } from "./FeeUpdateInput";

export type UpdateFeeArgs = {
  where: FeeWhereUniqueInput;
  data: FeeUpdateInput;
};

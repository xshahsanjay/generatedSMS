import { ApplicationWhereUniqueInput } from "./ApplicationWhereUniqueInput";
import { ApplicationUpdateInput } from "./ApplicationUpdateInput";

export type UpdateApplicationArgs = {
  where: ApplicationWhereUniqueInput;
  data: ApplicationUpdateInput;
};

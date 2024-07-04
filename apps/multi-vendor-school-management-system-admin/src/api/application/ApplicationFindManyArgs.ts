import { ApplicationWhereInput } from "./ApplicationWhereInput";
import { ApplicationOrderByInput } from "./ApplicationOrderByInput";

export type ApplicationFindManyArgs = {
  where?: ApplicationWhereInput;
  orderBy?: Array<ApplicationOrderByInput>;
  skip?: number;
  take?: number;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ApplicationWhereInput = {
  applicantName?: StringNullableFilter;
  applicationDate?: DateTimeNullableFilter;
  comments?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
};

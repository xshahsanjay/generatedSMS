import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LibraryItemWhereInput = {
  author?: StringNullableFilter;
  availabilityStatus?: "Option1";
  id?: StringFilter;
  publishDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};

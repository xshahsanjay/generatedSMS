import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CourseWhereInput = {
  courseName?: StringNullableFilter;
  credits?: IntNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  schedule?: JsonFilter;
  teacher?: StringNullableFilter;
};

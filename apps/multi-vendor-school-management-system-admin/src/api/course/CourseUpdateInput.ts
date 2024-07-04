import { InputJsonValue } from "../../types";

export type CourseUpdateInput = {
  courseName?: string | null;
  credits?: number | null;
  description?: string | null;
  schedule?: InputJsonValue;
  teacher?: string | null;
};

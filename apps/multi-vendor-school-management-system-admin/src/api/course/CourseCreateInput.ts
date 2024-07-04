import { InputJsonValue } from "../../types";

export type CourseCreateInput = {
  courseName?: string | null;
  credits?: number | null;
  description?: string | null;
  schedule?: InputJsonValue;
  teacher?: string | null;
};

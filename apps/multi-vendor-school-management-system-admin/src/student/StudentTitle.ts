import { Student as TStudent } from "../api/student/Student";

export const STUDENT_TITLE_FIELD = "firstName";

export const StudentTitle = (record: TStudent): string => {
  return record.firstName?.toString() || String(record.id);
};

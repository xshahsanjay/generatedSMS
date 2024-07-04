import { Course as TCourse } from "../api/course/Course";

export const COURSE_TITLE_FIELD = "courseName";

export const CourseTitle = (record: TCourse): string => {
  return record.courseName?.toString() || String(record.id);
};

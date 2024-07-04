import { Timetable as TTimetable } from "../api/timetable/Timetable";

export const TIMETABLE_TITLE_FIELD = "classRoom";

export const TimetableTitle = (record: TTimetable): string => {
  return record.classRoom?.toString() || String(record.id);
};

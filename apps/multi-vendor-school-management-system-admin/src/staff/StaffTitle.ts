import { Staff as TStaff } from "../api/staff/Staff";

export const STAFF_TITLE_FIELD = "name";

export const StaffTitle = (record: TStaff): string => {
  return record.name?.toString() || String(record.id);
};

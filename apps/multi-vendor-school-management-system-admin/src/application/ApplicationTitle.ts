import { Application as TApplication } from "../api/application/Application";

export const APPLICATION_TITLE_FIELD = "applicantName";

export const ApplicationTitle = (record: TApplication): string => {
  return record.applicantName?.toString() || String(record.id);
};

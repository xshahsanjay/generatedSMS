import { JsonValue } from "type-fest";

export type Course = {
  courseName: string | null;
  createdAt: Date;
  credits: number | null;
  description: string | null;
  id: string;
  schedule: JsonValue;
  teacher: string | null;
  updatedAt: Date;
};

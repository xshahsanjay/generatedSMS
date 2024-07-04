import { registerEnumType } from "@nestjs/graphql";

export enum FeeStatusEnum {
    Pending = "Pending",
    Paid = "Paid",
    Overdue = "Overdue",
    Cancelled = "Cancelled"
}

registerEnumType(FeeStatusEnum, {
    name: "FeeStatusEnum",
  });
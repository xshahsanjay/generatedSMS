import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StaffServiceBase } from "./base/staff.service.base";

@Injectable()
export class StaffService extends StaffServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

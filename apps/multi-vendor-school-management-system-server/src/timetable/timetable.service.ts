import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimetableServiceBase } from "./base/timetable.service.base";

@Injectable()
export class TimetableService extends TimetableServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

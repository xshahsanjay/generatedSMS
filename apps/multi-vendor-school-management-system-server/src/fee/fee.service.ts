import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeeServiceBase } from "./base/fee.service.base";

@Injectable()
export class FeeService extends FeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LibraryItemServiceBase } from "./base/libraryItem.service.base";

@Injectable()
export class LibraryItemService extends LibraryItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

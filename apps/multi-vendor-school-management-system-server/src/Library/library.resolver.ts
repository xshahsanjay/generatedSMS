import * as graphql from "@nestjs/graphql";
import { LibraryService } from "./library.service";

export class LibraryResolver {
  constructor(protected readonly service: LibraryService) {}
}

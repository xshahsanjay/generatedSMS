import { LibraryItem as TLibraryItem } from "../api/libraryItem/LibraryItem";

export const LIBRARYITEM_TITLE_FIELD = "title";

export const LibraryItemTitle = (record: TLibraryItem): string => {
  return record.title?.toString() || String(record.id);
};

import { Fee as TFee } from "../api/fee/Fee";

export const FEE_TITLE_FIELD = "id";

export const FeeTitle = (record: TFee): string => {
  return record.id?.toString() || String(record.id);
};

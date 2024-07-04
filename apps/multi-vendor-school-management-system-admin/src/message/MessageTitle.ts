import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "receiver";

export const MessageTitle = (record: TMessage): string => {
  return record.receiver?.toString() || String(record.id);
};

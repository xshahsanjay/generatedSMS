export type Message = {
  createdAt: Date;
  id: string;
  messageContent: string | null;
  receiver: string | null;
  sender: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};

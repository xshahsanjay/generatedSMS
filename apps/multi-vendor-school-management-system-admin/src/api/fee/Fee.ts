export type Fee = {
  amount: number | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};

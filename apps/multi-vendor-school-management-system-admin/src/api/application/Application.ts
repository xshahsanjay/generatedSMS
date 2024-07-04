export type Application = {
  applicantName: string | null;
  applicationDate: Date | null;
  comments: string | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};

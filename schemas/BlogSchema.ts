type BlogSchema = {
  id: number;
  title: string;
  content: string;
  authorId: number;
  approved: boolean;
};

export type { BlogSchema };

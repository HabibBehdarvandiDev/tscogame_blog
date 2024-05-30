type BlogsSchema = {
  id: number;
  title: string;
  content: string;
  authorId: number;
  approved: boolean;
};

export type { BlogsSchema };

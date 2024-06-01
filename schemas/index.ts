interface User {
  id: number;
  fisrtName: string;
  lastname: string;
  username: string;
  password: string;
  role: "writer" | "admin";
  profileUrl: string;
}

interface Blog {
  id: number;
  title: string;
  content: string;
  authorId: number | null;
  approved: boolean | null;
  authors: Authors | null;
  blogtags: BlogTags[];
}

interface Authors {
  authorId: number;
  user: User;
  blog: Blog[];
}

interface Tags {
  Id: number;
  tagName: string;
  blogtags: BlogTags[];
}

interface BlogTags {
  blogId: number;
  tagId: number;
  blog: Blog;
  tags: Tags;
}

interface AuthorsQueryResult {
  authorId: number;
  user: User;
}

interface BlogTagsQueryResult {
  blogId: number;
  tagId: number;
  tags: Tags;
}

interface BlogQueryResult {
  id: number;
  title: string;
  content: string;
  authorId: number | null;
  approved: boolean | null;
  authors: AuthorsQueryResult | null;
  blogtags: BlogTagsQueryResult[];
}

export type {
  User,
  Blog,
  Authors,
  Tags,
  BlogTags,
  AuthorsQueryResult,
  BlogQueryResult,
  BlogTagsQueryResult,
};

export interface User {
  id: number;
  name: string;
  email: string;
}

export type UserRole = "admin" | "user" | "guest";

export type BookType = {
  title: string;
  author: string;
  published: null | number;
};

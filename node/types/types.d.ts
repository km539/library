export type User = {
  id: string;
  name: string;
  email: string;
  phone_number: number;
  password: string;
  created_at: Date;
  updated_at: Date;
  is_admin: boolean;
};

export type NewUser = {
  name: User["name"];
  password: User["password"];
}
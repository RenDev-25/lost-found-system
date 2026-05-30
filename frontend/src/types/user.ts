export type UserRole = 'student' | 'staff' | 'admin';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  created_at: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

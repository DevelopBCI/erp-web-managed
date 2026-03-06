export interface LoginFormModel {
  username: string;
  password: string;
}

export interface User {
  id: number | string;
  username: string;
  email: string;
  contact_name: string;
  company_name: string;
}

export interface AuthResponse {
  status: string;
  message: string;
  data?: {
    user?: User;
  };
}

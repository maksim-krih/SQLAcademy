export interface User {
  firstName: string;
  lastName: string;
  avatarUrl: string;
  id: string;
}

export interface IAccount {
  user: User;
  token: string;
}

export interface IError {
  code: string;
  desription: string;
}

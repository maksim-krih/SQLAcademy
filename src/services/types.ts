export interface User {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
}

export interface IAccount {
  user: User;
}

export interface IError {
  code: string;
  desription: string;
}

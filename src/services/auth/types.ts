import { User } from "../types";

export interface VerifyMobileCodeResponse {
  isCodeVerified: Boolean;
  user: User;
  token: string;
  id: string;
}

export interface VerifyMobileCodeInput {
  phoneNumber: string;
  code: string;
}
import { BaseApi } from "..";
import { IAccount, IError } from "../types";
import { Login, LoginResponse } from "./types";
import { login as loginUrl } from "./urls";

class AuthApi {
  public login = (model: Login): IAccount => {
    // return BaseApi.post(loginUrl, model)
    //   .then((response: any) => response)
    //   .catch((e: IError) => console.log("", e));
    return {
      token: "1",
      user: {
        firstName: "Maksym",
        lastName: "Krykhobetskyi",
        id: "1",
        avatarUrl: ""
      }
    }
  };
}

export default AuthApi;

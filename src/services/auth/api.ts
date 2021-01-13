import { BaseApi } from "..";
import { IError, User } from "../types";
import { Login } from "./types";
import { login as loginUrl } from "./urls";

class AuthApi {
  public login = async (model: Login): Promise<User> => {
    return BaseApi.post(loginUrl, model)
      .then((response: any) => response.data)
      .catch((e: IError) => console.log("", e));
  };
}

export default AuthApi;

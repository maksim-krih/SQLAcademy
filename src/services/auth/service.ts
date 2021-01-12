import { IAccount, User } from "../types";

const userLocalStorageKey = "user";
const tokenLocalStorageKey = "token";

class AuthService {
  public get Token() {
    const token = this.getToken();
    return token ? token : "";
  }

  public get TokenWithoutBearer() {
    return this.getToken();
  }

  public get User() {
    return this.getUser() as User;
  }

  public get IsAuthenticated() {
    return !!this.Token;
  }

  public SignOut = () => {
    localStorage.clear();

    window.location.reload();
  };

  public SetAccount = (data: IAccount) => {
    localStorage.setItem(
      userLocalStorageKey,
      JSON.stringify(data.user as User)
    );
    localStorage.setItem(tokenLocalStorageKey, data.token);
  };

  private getUser() {
    const user = JSON.parse(
      localStorage.getItem(userLocalStorageKey) || ""
    ) as User;

    if (!user) {
      return {
        firstName: "",
        lastName: "",
        avatarURL: ""
      };
    }

    return user;
  }

  private getToken() {
    return localStorage.getItem(tokenLocalStorageKey);
  }
}

const service = new AuthService();
export default service as AuthService;

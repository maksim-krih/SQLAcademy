import { IAccount, User } from "../types";

const userLocalStorageKey = "user";
const tokenLocalStorageKey = "token";

class AuthService {
  public get User() {
    return this.getUser() as User;
  }

  public get IsAuthenticated() {
    return !!this.User.id;
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
  };

  private getUser() {
    const user = JSON.parse(
      localStorage.getItem(userLocalStorageKey) || ""
    ) as User;

    if (!user) {
      return {
        firstName: "",
        lastName: "",
        email: "",
        id: "",
      };
    }

    return user;
  }
}

const service = new AuthService();
export default service as AuthService;

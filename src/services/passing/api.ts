import { BaseApi } from "../Api";
import { IError } from "../types";
import { submitResult } from "./urls";

class PassingApi {
  public submitResults = async (model: any): Promise<any> => {
    return BaseApi.post(submitResult, model)
      .then((response: any) => response)
      .catch((e: IError) => console.log("", e));;
  };

}

export default PassingApi;

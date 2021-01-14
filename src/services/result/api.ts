import {IError} from "../types";
import {BaseApi} from "../Api";
import {Summary} from "./types";

class ResultApi {
  public getUserResults = async (userId: string): Promise<Summary> => {
    return BaseApi.get(`/results/user/${userId}`)
      .then((response: any) => response.data)
      .catch((e: IError) => console.log("", e));
  };
}

export default ResultApi;

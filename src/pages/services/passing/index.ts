import { service } from "../Api";
import { submitResult } from "./urls";

class PassingApi {
  public submitResults = async (model: any): any => {
    service.post(submitResult, model);
  };

}

export default PassingApi;

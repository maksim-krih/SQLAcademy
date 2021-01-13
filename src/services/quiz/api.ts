import { BaseApi } from "../Api";
import { IError } from "../types";
import { QuizDto } from "./types";
import { save, getAll } from "./urls";

class QuizApi {
  public save = async (model: QuizDto): Promise<QuizDto> => {
    return BaseApi.post(save, model)
      .then((response: any) => response.data)
      .catch((e: IError) => console.log("", e));
  };

  public getAll = async (): Promise<Array<QuizDto>> => {
    return BaseApi.get(getAll)
      .then((response: any) => response.data)
      .catch((e: IError) => console.log("", e));
  };

}

export default QuizApi;

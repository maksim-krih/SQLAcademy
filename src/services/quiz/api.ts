import { BaseApi } from "../Api";
import { IError } from "../types";
import { QuizDto, QueryResultDto, QuizResultDto, QuizResultResponse } from "./types";
import { save, getAll, getById, runQuery, completeQuiz, getResults } from "./urls";

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

  public getById = async (id: string): Promise<QuizDto> => {
    return BaseApi.get(getById(id))
      .then((response: any) => response.data)
      .catch((e: IError) => console.log("", e));
  };

  public runQuery = async (query: string): Promise<Array<QueryResultDto>> => {
    return BaseApi.post(runQuery, { query })
      .then((response: any) => response.data)
      .catch((e: IError) => console.log("", e));
  };

  public completeQuiz = async (model: QuizResultDto): Promise<QuizResultResponse> => {
    return BaseApi.post(completeQuiz, model)
      .then((response: any) => response.data)
      .catch((e: IError) => console.log("", e));
  };

  public getResults = async (quizId: string, userId: string): Promise<QuizResultResponse> => {
    return BaseApi.get(getResults(quizId, userId))
      .then((response: any) => response.data)
      .catch((e: IError) => console.log("", e));
  };
}

export default QuizApi;

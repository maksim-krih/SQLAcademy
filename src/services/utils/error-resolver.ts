import { IError } from "../types";

import { Service } from "../auth";

export const handelUnauthorizedResponse = async (
  response: Response
): Promise<Response> => {
  if (!response.ok && response.status === 401) {
    Service.SignOut();
  }
  return response;
};

export const handelBadResponse = async (response: Response) => {

  if (!response.ok && response.status !== 401) {
    const error = await response.json();
    return Promise.reject<IError>(error);
  }

  return Promise.resolve<any>(response);
};

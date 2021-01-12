export const toJson = (response: Response) => {
  return response.status !== 204 ? response.json() : undefined;
};

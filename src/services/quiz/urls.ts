export const save = "/quizzes";
export const getAll = "/quizzes";
export const getById = (id: string) => `/quizzes/${id}`;
export const runQuery = "/queries";
export const completeQuiz = "/results";
export const getResults = (quizId: string, userId: string) => `/results/quiz/${quizId}/user/${userId}`;

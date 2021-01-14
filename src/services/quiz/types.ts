export interface QuizDto {
  id?: number;
  name: string;
  description: string;
  tasks: TaskDto[];
  userId: number;
}

export interface TaskDto {
  title: string;
  description: string;
  query: string;
  mark: number;
  id?: number;
}

export interface QueryResultDto {
  id?: string;
  name?: string;
  description?: string;
  price?: string;
}

export interface QuizResultDto {
  quizId: number;
  userId: number;
  answers: AnswerDto[];
}

export interface AnswerDto {
  taskId?: number;
  answer: string; // Query
}

export interface QuizResultResponse {
  userId: number;
  results: AnswerResponse[];
}

export interface AnswerResponse {
  taskId: number;
  answer: string;
  isCorrect: boolean;
  userId: number;
  quizId: number;
  id: number;
}

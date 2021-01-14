export interface QuizDto {
  id?: number;
  name: string;
  description: string;
  tasks: TaskDto[];
  userId: number;
}

export interface TaskDto {
  description: string;
  expectedResult?: QueryResultDto[];
  id?: number;
  mark: number;
  query: string;
  quizId?: number;
  title: string;
  userId?: number;
  isCorrect?: boolean;
}

export interface ResultTaskDto {
  answer: string;
  id?: number;
  isCorrect?: boolean;
  quizId?: number;
  task: TaskDto;
  taskId?: number;
  userId?: number;
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
  results: ResultTaskDto[];
}


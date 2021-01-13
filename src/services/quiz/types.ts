export interface QuizDto {
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
}
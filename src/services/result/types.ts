import {TaskDto} from "../quiz/types";

export interface Summary {
  userId: string
  quizzes: Record<string, TaskSummary[]>
}

export interface TaskSummary {
  id: string
  answer: string
  isCorrect: string
  quizId: string
  task: TaskDto & {
    id: string
  }
}
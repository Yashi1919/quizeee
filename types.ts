
export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export type Quiz = Question[];

export type UserAnswer = number | null;

export enum AppState {
  INPUT = 'INPUT',
  LOADING = 'LOADING',
  QUIZ = 'QUIZ',
  RESULTS = 'RESULTS',
}


export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface QuizSection {
  paragraph?: string;
  questions: Question[];
}

export type Quiz = QuizSection[];

export type UserAnswer = number | null;

export enum AppState {
  INPUT = 'INPUT',
  LOADING = 'LOADING',
  QUIZ = 'QUIZ',
  RESULTS = 'RESULTS',
}

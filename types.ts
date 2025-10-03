
export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface QuizSection {
  paragraph?: string;
  questions: Question[];
}

export type Quiz = QuizSection[];

export type UserAnswer = number | null;

export interface SavedQuiz {
    id: string;
    name: string;
    quizData: Quiz;
    userAnswers: UserAnswer[];
    timeLimitInSeconds: number | null;
    timeLeftInSeconds: number | null;
    createdAt: string;
}

export enum AppState {
  HOME = 'HOME',
  INPUT = 'INPUT',
  LOADING = 'LOADING',
  QUIZ = 'QUIZ',
  RESULTS = 'RESULTS',
  SAVED_QUIZZES = 'SAVED_QUIZZES',
}
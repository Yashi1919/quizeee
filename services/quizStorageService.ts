
import { SavedQuiz } from '../types';

const STORAGE_KEY = 'aiQuizAppQuizzes';

export function getSavedQuizzes(): SavedQuiz[] {
  try {
    const savedQuizzesJson = localStorage.getItem(STORAGE_KEY);
    if (savedQuizzesJson) {
      // Basic validation can be added here if needed
      return JSON.parse(savedQuizzesJson) as SavedQuiz[];
    }
  } catch (error) {
    console.error("Failed to load quizzes from local storage:", error);
    return [];
  }
  return [];
}

export function saveQuizzes(quizzes: SavedQuiz[]): void {
  try {
    const quizzesJson = JSON.stringify(quizzes);
    localStorage.setItem(STORAGE_KEY, quizzesJson);
  } catch (error) {
    console.error("Failed to save quizzes to local storage:", error);
  }
}

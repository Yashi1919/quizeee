
import React from 'react';

interface HomeScreenProps {
  onCreateNew: () => void;
  onShowSaved: () => void;
  hasSavedQuizzes: boolean;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onCreateNew, onShowSaved, hasSavedQuizzes }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
        Welcome to QuizGen AI
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-text_secondary">
        Instantly transform any question paper or text into an interactive, timed quiz. Save your progress, manage multiple quizzes, and enhance your learning experience with the power of AI.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-6">
        <button
          onClick={onCreateNew}
          className="px-10 py-4 bg-accent hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-lg"
        >
          + Create New Quiz
        </button>
        {hasSavedQuizzes && (
          <button
            onClick={onShowSaved}
            className="px-10 py-4 bg-secondary hover:bg-gray-600 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-lg"
          >
            View Saved Quizzes
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;

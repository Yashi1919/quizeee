
import React from 'react';

interface NavbarProps {
  onNavigate: (state: 'HOME' | 'SAVED_QUIZZES') => void;
  hasSavedQuizzes: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, hasSavedQuizzes }) => {
  return (
    <nav className="w-full max-w-4xl flex justify-between items-center mb-8">
      <div 
        className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 cursor-pointer"
        onClick={() => onNavigate('HOME')}
      >
        QuizGen AI
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => onNavigate('HOME')}
          className="text-text_secondary hover:text-text_primary transition-colors font-medium"
        >
          Home
        </button>
        {hasSavedQuizzes && (
          <button 
            onClick={() => onNavigate('SAVED_QUIZZES')}
            className="text-text_secondary hover:text-text_primary transition-colors font-medium"
          >
            Saved Quizzes
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

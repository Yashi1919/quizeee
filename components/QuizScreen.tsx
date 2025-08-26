
import React, { useState } from 'react';
import { Quiz, UserAnswer } from '../types';

interface QuizScreenProps {
  quiz: Quiz;
  userAnswers: UserAnswer[];
  setUserAnswers: React.Dispatch<React.SetStateAction<UserAnswer[]>>;
  onSubmitQuiz: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ quiz, userAnswers, setUserAnswers, onSubmitQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quiz[currentQuestionIndex];
  const totalQuestions = quiz.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <p className="text-sm text-text_secondary">Question {currentQuestionIndex + 1} of {totalQuestions}</p>
        <div className="w-full bg-secondary rounded-full h-2.5 mt-1">
          <div 
            className="bg-accent h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex-grow">
        <h2 className="text-2xl font-semibold my-4 leading-snug">{currentQuestion.questionText}</h2>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = userAnswers[currentQuestionIndex] === index;
            const selectedClass = isSelected ? 'ring-2 ring-accent bg-blue-900/50' : 'bg-secondary hover:bg-gray-600';
            return (
              <button
                key={index}
                onClick={() => handleSelectOption(index)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${selectedClass}`}
              >
                <span className="font-mono mr-3">{String.fromCharCode(65 + index)}.</span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          className="px-6 py-2 border-2 border-secondary hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed text-text_primary font-semibold rounded-lg transition-colors"
        >
          Previous
        </button>
        {isLastQuestion ? (
          <button
            onClick={onSubmitQuiz}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
          >
            Finish Quiz
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-accent hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;

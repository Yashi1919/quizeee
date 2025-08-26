import React, { useState, useMemo } from 'react';
import { Quiz, UserAnswer, Question } from '../types';

interface FlatQuestion {
  question: Question;
  paragraph?: string;
  globalIndex: number;
}

interface QuizScreenProps {
  quiz: Quiz;
  userAnswers: UserAnswer[];
  onUpdateAnswers: (answers: UserAnswer[]) => void;
  onSubmitQuiz: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ quiz, userAnswers, onUpdateAnswers, onSubmitQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const flatQuestions: FlatQuestion[] = useMemo(() => {
    const flattened: FlatQuestion[] = [];
    let globalIndex = 0;
    quiz.forEach(section => {
      section.questions.forEach(q => {
        flattened.push({
          question: q,
          paragraph: section.paragraph,
          globalIndex: globalIndex,
        });
        globalIndex++;
      });
    });
    return flattened;
  }, [quiz]);

  const totalQuestions = flatQuestions.length;
  const currentFlatQuestion = flatQuestions[currentQuestionIndex];
  const currentQuestion = currentFlatQuestion.question;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    onUpdateAnswers(newAnswers);
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

  const handleJumpToQuestion = (index: number) => {
    if (index >= 0 && index < totalQuestions) {
        setCurrentQuestionIndex(index);
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
      
      <details className="mb-4" open>
        <summary className="text-sm font-semibold text-text_secondary mb-2 cursor-pointer hover:text-text_primary transition-colors">
          Question Navigator
        </summary>
        <div className="flex flex-wrap gap-2 p-3 bg-background rounded-md mt-1 border border-secondary">
          {flatQuestions.map((_, index) => {
            const isCurrent = index === currentQuestionIndex;
            const isAnswered = userAnswers[index] !== null;
            let buttonClass = 'w-9 h-9 flex items-center justify-center rounded-md font-mono text-sm transition-all duration-200 transform hover:scale-110 ';
            
            if (isCurrent) {
              buttonClass += 'bg-accent text-white ring-2 ring-offset-2 ring-offset-card ring-accent shadow-lg';
            } else if (isAnswered) {
              buttonClass += 'bg-blue-900/60 text-text_primary hover:bg-blue-800/70 border border-accent';
            } else {
              buttonClass += 'bg-secondary text-text_secondary hover:bg-gray-600';
            }
            
            return (
              <button
                key={index}
                onClick={() => handleJumpToQuestion(index)}
                className={buttonClass}
                aria-label={`Go to question ${index + 1}`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </details>

      <div className="flex-grow overflow-y-auto pr-2 pt-4 border-t border-secondary">
        {currentFlatQuestion.paragraph && (
            <div className="mb-6 p-4 bg-gray-900 border border-secondary rounded-lg">
                <h3 className="text-sm font-semibold text-text_secondary mb-2">Reading Passage</h3>
                <p className="text-text_primary leading-relaxed whitespace-pre-wrap">{currentFlatQuestion.paragraph}</p>
            </div>
        )}
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
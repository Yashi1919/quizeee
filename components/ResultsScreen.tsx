
import React from 'react';
import { Quiz, UserAnswer } from '../types';

interface ResultsScreenProps {
  quiz: Quiz;
  userAnswers: UserAnswer[];
  onRestart: () => void;
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-correct" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-incorrect" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const ResultsScreen: React.FC<ResultsScreenProps> = ({ quiz, userAnswers, onRestart }) => {
  const totalQuestions = quiz.reduce((sum, section) => sum + section.questions.length, 0);
  
  const score = userAnswers.reduce((total, answer, index) => {
    let questionIndex = index;
    let correctSection;
    for(const section of quiz) {
        if(questionIndex < section.questions.length){
            correctSection = section;
            break;
        }
        questionIndex -= section.questions.length;
    }
    const question = correctSection?.questions[questionIndex];
    if (question && answer === question.correctAnswerIndex) {
        return total + 1;
    }
    return total;
  }, 0);
  
  const percentage = Math.round((score / totalQuestions) * 100);
  let globalQuestionIndex = 0;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Quiz Results</h2>
      
      <div className="my-6 text-center">
        <p className="text-xl text-text_secondary">You Scored</p>
        <p className="text-6xl font-bold my-2">{score} / {totalQuestions}</p>
        <div className="w-full bg-secondary rounded-full h-4 mt-4">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="w-full mt-8 space-y-4 max-h-[40vh] overflow-y-auto pr-2">
        {quiz.map((section, sectionIndex) => (
            <div key={sectionIndex}>
                {section.paragraph && (
                    <div className="mb-2 p-3 bg-gray-900 border border-secondary rounded-lg">
                        <p className="text-sm text-text_secondary italic whitespace-pre-wrap">Context: "{section.paragraph.substring(0, 100)}..."</p>
                    </div>
                )}
                {section.questions.map((question, questionIndex) => {
                    const userAnswer = userAnswers[globalQuestionIndex];
                    const correctAnswerIndex = question.correctAnswerIndex;
                    const isCorrect = userAnswer === correctAnswerIndex;
                    const currentIndex = globalQuestionIndex++;

                    return (
                        <div key={questionIndex} className="bg-secondary p-4 rounded-lg mb-4">
                        <div className="flex justify-between items-start">
                            <p className="font-semibold mb-2 flex-1">{currentIndex + 1}. {question.questionText}</p>
                            {isCorrect ? <CheckIcon/> : <XIcon />}
                        </div>
                        
                        <div className="text-sm space-y-2 mt-2">
                            {question.options.map((option, optIndex) => {
                            let classes = "text-text_secondary";
                            if (optIndex === correctAnswerIndex) {
                                classes = "text-correct font-bold";
                            } else if (optIndex === userAnswer) {
                                classes = "text-incorrect line-through";
                            }
                            
                            return <p key={optIndex} className={classes}>{String.fromCharCode(65 + optIndex)}. {option}</p>
                            })}
                        </div>
                        </div>
                    );
                })}
          </div>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="mt-8 px-8 py-3 bg-accent hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
      >
        Create Another Quiz
      </button>
    </div>
  );
};

export default ResultsScreen;

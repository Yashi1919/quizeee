
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
  const score = userAnswers.reduce((total, answer, index) => {
    return answer === quiz[index].correctAnswerIndex ? total + 1 : total;
  }, 0);
  const percentage = Math.round((score / quiz.length) * 100);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Quiz Results</h2>
      
      <div className="my-6 text-center">
        <p className="text-xl text-text_secondary">You Scored</p>
        <p className="text-6xl font-bold my-2">{score} / {quiz.length}</p>
        <div className="w-full bg-secondary rounded-full h-4 mt-4">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="w-full mt-8 space-y-4 max-h-[40vh] overflow-y-auto pr-2">
        {quiz.map((question, index) => {
          const userAnswer = userAnswers[index];
          const correctAnswerIndex = question.correctAnswerIndex;
          const isCorrect = userAnswer === correctAnswerIndex;

          return (
            <div key={index} className="bg-secondary p-4 rounded-lg">
              <div className="flex justify-between items-start">
                  <p className="font-semibold mb-2 flex-1">{index + 1}. {question.questionText}</p>
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

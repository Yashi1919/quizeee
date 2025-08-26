
import React, { useState } from 'react';

interface InputScreenProps {
  onCreateQuiz: (text: string, timeLimitMinutes: number) => void;
  error: string | null;
  onBack: () => void;
}

const SAMPLE_TEXT = `
Read the following passage and answer the questions.
The solar system is a gravitationally bound system of the Sun and the objects that orbit it. Of the objects that orbit the Sun directly, the largest are the eight planets, with the remainder being smaller objects, such as the five dwarf planets and small Solar System bodies.

1. What is at the center of the solar system?
A) A dwarf planet
B) The Sun
C) The Earth
D) A black hole

2. How many planets are mentioned in the passage?
A) Five
B) Six
C) Eight
D) Nine

---
Standalone Question:

3. What is the capital of Japan?
A) Seoul
B) Beijing
C) Tokyo
D) Bangkok

---
ANSWER KEY
1. B
2. C
3. C
`;

const InputScreen: React.FC<InputScreenProps> = ({ onCreateQuiz, error, onBack }) => {
  const [text, setText] = useState('');
  const [timeLimit, setTimeLimit] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onCreateQuiz(text, timeLimit);
    }
  };
  
  const handleUseSample = () => {
    setText(SAMPLE_TEXT.trim());
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-text_primary">Create a New Quiz</h2>
          <button onClick={onBack} className="px-4 py-2 border-2 border-secondary hover:bg-secondary text-text_primary font-semibold rounded-lg transition-colors">
              &larr; Home
          </button>
      </div>
      <p className="text-center text-text_secondary mb-6">
        Paste your text, set an optional time limit, and let the AI build your quiz.
      </p>
      {error && (
        <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-md relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your question paper content here..."
          className="w-full flex-grow bg-background border-2 border-secondary rounded-lg p-4 focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-text_primary text-sm leading-6 resize-none"
          rows={10}
        />
        <div className="mt-4">
            <label htmlFor="time-limit" className="block text-sm font-medium text-text_secondary mb-2">
                Time Limit (in minutes, 0 for no limit)
            </label>
            <input 
                id="time-limit"
                type="number"
                min="0"
                value={timeLimit}
                onChange={(e) => setTimeLimit(parseInt(e.target.value, 10) || 0)}
                className="w-full sm:w-1/3 bg-background border-2 border-secondary rounded-lg p-2 focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            />
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <button
              type="button"
              onClick={handleUseSample}
              className="w-full text-center px-6 py-3 border-2 border-secondary hover:bg-secondary text-text_primary font-semibold rounded-lg transition-colors duration-200"
            >
              Use Sample
            </button>
            <div className="hidden sm:block"></div>
            <button
              type="submit"
              disabled={!text.trim()}
              className="w-full text-center px-8 py-3 bg-accent hover:bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Create Quiz
            </button>
        </div>
      </form>
    </div>
  );
};

export default InputScreen;

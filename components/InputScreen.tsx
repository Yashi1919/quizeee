
import React, { useState } from 'react';

interface InputScreenProps {
  onCreateQuiz: (text: string) => void;
  error: string | null;
}

const SAMPLE_TEXT = `
Example Question Paper:

1. What is the capital of France?
A) Berlin
B) Madrid
C) Paris
D) Rome

2. Which planet is known as the Red Planet?
A) Earth
B) Mars
C) Jupiter
D) Venus

3. What is the largest ocean on Earth?
A) Atlantic
B) Indian
C) Arctic
D) Pacific

---
ANSWER KEY
1. C
2. B
3. D
`;

const InputScreen: React.FC<InputScreenProps> = ({ onCreateQuiz, error }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onCreateQuiz(text);
    }
  };
  
  const handleUseSample = () => {
    setText(SAMPLE_TEXT.trim());
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold mb-4 text-center text-text_primary">Paste Your Question Paper</h2>
      <p className="text-center text-text_secondary mb-6">
        Include the questions, options, and an answer key at the end of the text.
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
        />
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
            <button
              type="button"
              onClick={handleUseSample}
              className="w-full sm:w-auto text-center px-6 py-3 border-2 border-secondary hover:bg-secondary text-text_primary font-semibold rounded-lg transition-colors duration-200"
            >
              Use Sample
            </button>
            <button
              type="submit"
              disabled={!text.trim()}
              className="w-full sm:w-auto text-center px-8 py-3 bg-accent hover:bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Create Quiz
            </button>
        </div>
      </form>
    </div>
  );
};

export default InputScreen;


import React, { useState, useCallback } from 'react';
import { AppState, Quiz, UserAnswer } from './types';
import InputScreen from './components/InputScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import { parseQuizFromText } from './services/geminiService';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.INPUT);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleCreateQuiz = useCallback(async (text: string) => {
    setAppState(AppState.LOADING);
    setError(null);
    try {
      const parsedQuiz = await parseQuizFromText(text);
      if (parsedQuiz && parsedQuiz.length > 0) {
        setQuiz(parsedQuiz);
        setUserAnswers(new Array(parsedQuiz.length).fill(null));
        setAppState(AppState.QUIZ);
      } else {
        throw new Error("The AI couldn't generate a quiz from the provided text. Please check the format.");
      }
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      console.error(e);
      setError(`Failed to create quiz. ${errorMessage}`);
      setAppState(AppState.INPUT);
    }
  }, []);

  const handleSubmitQuiz = useCallback(() => {
    setAppState(AppState.RESULTS);
  }, []);

  const handleRestart = useCallback(() => {
    setQuiz(null);
    setUserAnswers([]);
    setError(null);
    setAppState(AppState.INPUT);
  }, []);

  const renderContent = () => {
    switch (appState) {
      case AppState.INPUT:
        return <InputScreen onCreateQuiz={handleCreateQuiz} error={error} />;
      case AppState.LOADING:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <LoadingSpinner />
            <p className="mt-4 text-text_secondary animate-pulse">AI is building your quiz...</p>
          </div>
        );
      case AppState.QUIZ:
        if (!quiz) return null;
        return (
          <QuizScreen
            quiz={quiz}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            onSubmitQuiz={handleSubmitQuiz}
          />
        );
      case AppState.RESULTS:
        if (!quiz) return null;
        return <ResultsScreen quiz={quiz} userAnswers={userAnswers} onRestart={handleRestart} />;
      default:
        return <InputScreen onCreateQuiz={handleCreateQuiz} error={error} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-text_primary font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-4xl mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
          Quiz Paper AI Converter
        </h1>
        <p className="mt-2 text-text_secondary">
          Paste your question paper text and let AI create an interactive quiz for you.
        </p>
      </header>
      <main className="w-full max-w-4xl bg-card rounded-xl shadow-2xl p-6 sm:p-8 flex-grow">
        {renderContent()}
      </main>
      <footer className="w-full max-w-4xl mt-8 text-center text-text_secondary text-sm">
        <p>Powered by Gemini AI</p>
      </footer>
    </div>
  );
};

export default App;

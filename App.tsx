
import React, { useState, useCallback, useEffect } from 'react';
import { AppState, SavedQuiz, UserAnswer } from './types';
import HomeScreen from './components/HomeScreen';
import InputScreen from './components/InputScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import SavedQuizzesScreen from './components/SavedQuizzesScreen';
import Navbar from './components/Navbar';
import { parseQuizFromText } from './services/geminiService';
import { getSavedQuizzes, saveQuizzes } from './services/quizStorageService';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.HOME);
  const [activeQuiz, setActiveQuiz] = useState<SavedQuiz | null>(null);
  const [savedQuizzes, setSavedQuizzes] = useState<SavedQuiz[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setSavedQuizzes(getSavedQuizzes());
  }, []);

  const handleCreateQuiz = useCallback(async (text: string, timeLimitMinutes: number) => {
    setAppState(AppState.LOADING);
    setError(null);
    try {
      const parsedQuiz = await parseQuizFromText(text);
      if (parsedQuiz && parsedQuiz.length > 0) {
        const totalQuestions = parsedQuiz.reduce((acc, section) => acc + section.questions.length, 0);
        const timeLimitInSeconds = timeLimitMinutes > 0 ? timeLimitMinutes * 60 : null;
        
        const newSavedQuiz: SavedQuiz = {
          id: Date.now().toString(),
          name: parsedQuiz[0].paragraph?.substring(0, 40) || parsedQuiz[0].questions[0].questionText.substring(0, 40),
          quizData: parsedQuiz,
          userAnswers: new Array(totalQuestions).fill(null),
          timeLimitInSeconds,
          timeLeftInSeconds: timeLimitInSeconds,
          createdAt: new Date().toISOString(),
        };

        const updatedQuizzes = [...savedQuizzes, newSavedQuiz];
        setSavedQuizzes(updatedQuizzes);
        saveQuizzes(updatedQuizzes);
        
        setActiveQuiz(newSavedQuiz);
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
  }, [savedQuizzes]);

  const handleUpdateQuizState = useCallback((answers: UserAnswer[], timeLeft: number | null) => {
      if (!activeQuiz) return;

      const updatedQuiz = { ...activeQuiz, userAnswers: answers, timeLeftInSeconds: timeLeft };
      setActiveQuiz(updatedQuiz);

      const updatedQuizzes = savedQuizzes.map(q => q.id === updatedQuiz.id ? updatedQuiz : q);
      setSavedQuizzes(updatedQuizzes);
      saveQuizzes(updatedQuizzes);
  }, [activeQuiz, savedQuizzes]);
  
  const handleStartQuiz = useCallback((quizId: string) => {
    const quizToStart = savedQuizzes.find(q => q.id === quizId);
    if (quizToStart) {
      setActiveQuiz(quizToStart);
      setAppState(AppState.QUIZ);
    }
  }, [savedQuizzes]);

  const handleDeleteQuiz = useCallback((quizId: string) => {
    const updatedQuizzes = savedQuizzes.filter(q => q.id !== quizId);
    setSavedQuizzes(updatedQuizzes);
    saveQuizzes(updatedQuizzes);
  }, [savedQuizzes]);
  
  const handleNavigate = useCallback((state: 'HOME' | 'SAVED_QUIZZES') => {
      setError(null);
      setActiveQuiz(null);
      if (state === 'HOME') {
        setAppState(AppState.HOME);
      } else {
        setAppState(AppState.SAVED_QUIZZES);
      }
  }, []);

  const handlePauseQuiz = useCallback((timeLeft: number | null) => {
    if (!activeQuiz) return;
    
    const updatedQuiz = { ...activeQuiz, timeLeftInSeconds: timeLeft };
    const updatedQuizzes = savedQuizzes.map(q => q.id === updatedQuiz.id ? updatedQuiz : q);
    setSavedQuizzes(updatedQuizzes);
    saveQuizzes(updatedQuizzes);

    setActiveQuiz(null);
    setAppState(AppState.SAVED_QUIZZES);
  }, [activeQuiz, savedQuizzes]);

  const handleBackToHome = () => {
    setError(null);
    setActiveQuiz(null);
    setAppState(AppState.HOME);
  };

  const handleSubmitQuiz = useCallback(() => {
    if (!activeQuiz) return;
    
    const finalQuizState = { ...activeQuiz, timeLeftInSeconds: 0 };
    const updatedQuizzes = savedQuizzes.map(q => q.id === finalQuizState.id ? finalQuizState : q);
    setSavedQuizzes(updatedQuizzes);
    saveQuizzes(updatedQuizzes);

    setActiveQuiz(finalQuizState);
    setAppState(AppState.RESULTS);
  }, [activeQuiz, savedQuizzes]);

  const renderContent = () => {
    switch (appState) {
      case AppState.HOME:
        return <HomeScreen 
                  onCreateNew={() => setAppState(AppState.INPUT)} 
                  onShowSaved={() => setAppState(AppState.SAVED_QUIZZES)}
                  hasSavedQuizzes={savedQuizzes.length > 0} 
                />;
      case AppState.INPUT:
        return <InputScreen onCreateQuiz={handleCreateQuiz} error={error} onBack={handleBackToHome} />;
      case AppState.LOADING:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <LoadingSpinner />
            <p className="mt-4 text-text_secondary animate-pulse">AI is building your quiz...</p>
          </div>
        );
      case AppState.SAVED_QUIZZES:
        return <SavedQuizzesScreen quizzes={savedQuizzes} onStartQuiz={handleStartQuiz} onDeleteQuiz={handleDeleteQuiz} onBack={handleBackToHome} />;
      case AppState.QUIZ:
        if (!activeQuiz) return null;
        return (
          <QuizScreen
            key={activeQuiz.id}
            activeQuiz={activeQuiz}
            onUpdateQuizState={handleUpdateQuizState}
            onSubmitQuiz={handleSubmitQuiz}
            onPauseQuiz={handlePauseQuiz}
          />
        );
      case AppState.RESULTS:
        if (!activeQuiz) return null;
        return <ResultsScreen activeQuiz={activeQuiz} onRestart={handleBackToHome} />;
      default:
        return <HomeScreen 
                  onCreateNew={() => setAppState(AppState.INPUT)} 
                  onShowSaved={() => setAppState(AppState.SAVED_QUIZZES)}
                  hasSavedQuizzes={savedQuizzes.length > 0} 
                />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-text_primary font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <Navbar onNavigate={handleNavigate} hasSavedQuizzes={savedQuizzes.length > 0} />
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

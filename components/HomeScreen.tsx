
import React from 'react';

interface HomeScreenProps {
  onCreateNew: () => void;
  onShowSaved: () => void;
  hasSavedQuizzes: boolean;
  onStartAncientHistoryQuiz: () => void;
  onStartEnvironmentQuiz: () => void;
  onStartModernHistoryQuiz: () => void;
  onStartGeographyQuiz: () => void;
  onStartArtCultureQuiz: () => void;
  onStartEconomyQuiz: () => void;
  onStartPolityQuiz: () => void;
  onStartScienceTechQuiz: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onCreateNew, onShowSaved, hasSavedQuizzes, onStartAncientHistoryQuiz, onStartEnvironmentQuiz, onStartModernHistoryQuiz, onStartGeographyQuiz, onStartArtCultureQuiz, onStartEconomyQuiz, onStartPolityQuiz, onStartScienceTechQuiz }) => {
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

      <div className="mt-16 w-full">
        <h2 className="text-2xl font-semibold text-text_primary mb-6 border-b border-secondary pb-2">Featured Quizzes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-secondary p-6 rounded-xl text-left shadow-lg transform transition-all hover:scale-[1.01] hover:border-accent flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Ancient & Medieval History</h3>
                        <p className="text-sm text-yellow-500 font-medium">12 Years PYQ</p>
                    </div>
                </div>
                <p className="text-text_secondary text-sm mb-6 flex-grow">
                    Comprehensive collection of previous year questions (2011-2024) from Ancient and Medieval Indian History.
                </p>
                <button
                    onClick={onStartAncientHistoryQuiz}
                    className="w-full py-2 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold rounded-lg transition-colors"
                >
                    Start Quiz &rarr;
                </button>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-secondary p-6 rounded-xl text-left shadow-lg transform transition-all hover:scale-[1.01] hover:border-green-500 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Environment & Ecology</h3>
                        <p className="text-sm text-green-500 font-medium">12 Years PYQ</p>
                    </div>
                </div>
                <p className="text-text_secondary text-sm mb-6 flex-grow">
                    Key questions from 2011-2024 covering biodiversity, climate change, pollution, and conservation laws.
                </p>
                <button
                    onClick={onStartEnvironmentQuiz}
                    className="w-full py-2 bg-transparent border-2 border-green-600 text-green-500 hover:bg-green-600 hover:text-white font-bold rounded-lg transition-colors"
                >
                    Start Quiz &rarr;
                </button>
            </div>

             <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-secondary p-6 rounded-xl text-left shadow-lg transform transition-all hover:scale-[1.01] hover:border-red-500 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Modern History</h3>
                        <p className="text-sm text-red-500 font-medium">12 Years PYQ</p>
                    </div>
                </div>
                <p className="text-text_secondary text-sm mb-6 flex-grow">
                    Crucial questions from the Indian Freedom Struggle, British colonial rule, and constitutional developments.
                </p>
                <button
                    onClick={onStartModernHistoryQuiz}
                    className="w-full py-2 bg-transparent border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-bold rounded-lg transition-colors"
                >
                    Start Quiz &rarr;
                </button>
            </div>

             <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-secondary p-6 rounded-xl text-left shadow-lg transform transition-all hover:scale-[1.01] hover:border-blue-400 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Geography</h3>
                        <p className="text-sm text-blue-400 font-medium">12 Years PYQ</p>
                    </div>
                </div>
                <p className="text-text_secondary text-sm mb-6 flex-grow">
                    Essential physical and Indian geography questions from 2011-2024.
                </p>
                <button
                    onClick={onStartGeographyQuiz}
                    className="w-full py-2 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold rounded-lg transition-colors"
                >
                    Start Quiz &rarr;
                </button>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-secondary p-6 rounded-xl text-left shadow-lg transform transition-all hover:scale-[1.01] hover:border-purple-500 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Art & Culture</h3>
                        <p className="text-sm text-purple-500 font-medium">12 Years PYQ</p>
                    </div>
                </div>
                <p className="text-text_secondary text-sm mb-6 flex-grow">
                    Questions on Indian architecture, sculpture, painting, music, dance, and literature.
                </p>
                <button
                    onClick={onStartArtCultureQuiz}
                    className="w-full py-2 bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-bold rounded-lg transition-colors"
                >
                    Start Quiz &rarr;
                </button>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-secondary p-6 rounded-xl text-left shadow-lg transform transition-all hover:scale-[1.01] hover:border-teal-500 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Economy</h3>
                        <p className="text-sm text-teal-500 font-medium">12 Years PYQ</p>
                    </div>
                </div>
                <p className="text-text_secondary text-sm mb-6 flex-grow">
                    Important questions on Indian economy, banking, budget, and government schemes.
                </p>
                <button
                    onClick={onStartEconomyQuiz}
                    className="w-full py-2 bg-transparent border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-bold rounded-lg transition-colors"
                >
                    Start Quiz &rarr;
                </button>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-secondary p-6 rounded-xl text-left shadow-lg transform transition-all hover:scale-[1.01] hover:border-orange-500 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Indian Polity</h3>
                        <p className="text-sm text-orange-500 font-medium">12 Years PYQ</p>
                    </div>
                </div>
                <p className="text-text_secondary text-sm mb-6 flex-grow">
                    Fundamental questions on the Constitution, Governance, Rights, and Parliament.
                </p>
                <button
                    onClick={onStartPolityQuiz}
                    className="w-full py-2 bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold rounded-lg transition-colors"
                >
                    Start Quiz &rarr;
                </button>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-secondary p-6 rounded-xl text-left shadow-lg transform transition-all hover:scale-[1.01] hover:border-indigo-500 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Science & Tech</h3>
                        <p className="text-sm text-indigo-500 font-medium">12 Years PYQ</p>
                    </div>
                </div>
                <p className="text-text_secondary text-sm mb-6 flex-grow">
                    Key questions on emerging technologies, space, defence, biotech, and general science.
                </p>
                <button
                    onClick={onStartScienceTechQuiz}
                    className="w-full py-2 bg-transparent border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-bold rounded-lg transition-colors"
                >
                    Start Quiz &rarr;
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

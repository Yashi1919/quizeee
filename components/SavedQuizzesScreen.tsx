
import React from 'react';
import { SavedQuiz } from '../types';

interface SavedQuizzesScreenProps {
  quizzes: SavedQuiz[];
  onStartQuiz: (id: string) => void;
  onDeleteQuiz: (id: string) => void;
  onBack: () => void;
}

const SavedQuizzesScreen: React.FC<SavedQuizzesScreenProps> = ({ quizzes, onStartQuiz, onDeleteQuiz, onBack }) => {
    
    const handleDelete = (id: string, name: string) => {
        if (window.confirm(`Are you sure you want to delete the quiz "${name}"? This action cannot be undone.`)) {
            onDeleteQuiz(id);
        }
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-text_primary">Your Saved Quizzes</h2>
                <button
                    onClick={onBack}
                    className="px-4 py-2 border-2 border-secondary hover:bg-secondary text-text_primary font-semibold rounded-lg transition-colors"
                >
                    &larr; Home
                </button>
            </div>
            
            {quizzes.length === 0 ? (
                <div className="flex-grow flex items-center justify-center">
                    <p className="text-text_secondary">You have no saved quizzes yet.</p>
                </div>
            ) : (
                <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">
                    {quizzes.map(quiz => {
                        const totalQuestions = quiz.quizData.reduce((sum, section) => sum + section.questions.length, 0);
                        const answeredQuestions = quiz.userAnswers.filter(a => a !== null).length;
                        const progress = totalQuestions > 0 ? (answeredQuestions / totalQuestions) * 100 : 0;
                        const isCompleted = answeredQuestions === totalQuestions;
                        
                        return (
                            <div key={quiz.id} className="bg-secondary p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="flex-grow">
                                    <p className="font-bold text-text_primary truncate">{quiz.name}...</p>
                                    <p className="text-sm text-text_secondary">
                                        Created: {new Date(quiz.createdAt).toLocaleDateString()}
                                    </p>
                                    <div className="mt-2">
                                        <div className="w-full bg-background rounded-full h-2">
                                            <div className="bg-accent h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                                        </div>
                                        <p className="text-xs text-text_secondary mt-1">{answeredQuestions} / {totalQuestions} answered</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 flex-shrink-0 self-end sm:self-center">
                                    <button
                                        onClick={() => onStartQuiz(quiz.id)}
                                        className="px-4 py-2 bg-accent hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                                    >
                                        {progress > 0 && !isCompleted ? 'Resume' : 'Start'}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(quiz.id, quiz.name)}
                                        className="px-4 py-2 bg-incorrect hover:bg-red-600 text-white font-semibold rounded-lg transition-colors"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SavedQuizzesScreen;

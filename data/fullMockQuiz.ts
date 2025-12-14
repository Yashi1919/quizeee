
import { Quiz, Question } from '../types';
import { ANCIENT_HISTORY_QUIZ } from './ancientHistoryQuiz';
import { MODERN_HISTORY_QUIZ } from './modernHistoryQuiz';
import { POLITY_QUIZ } from './polityQuiz';
import { ECONOMY_QUIZ } from './economyQuiz';
import { GEOGRAPHY_QUIZ } from './geographyQuiz';
import { ENVIRONMENT_ECOLOGY_QUIZ } from './environmentEcologyQuiz';
import { SCIENCE_TECH_QUIZ } from './scienceTechQuiz';

// Helper to extract all questions from a Quiz (ignoring year/section boundaries)
const flattenQuestions = (quiz: Quiz): Question[] => {
    return quiz.flatMap(section => section.questions);
};

// Helper to shuffle array (Fisher-Yates)
const shuffleArray = <T>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

// Target: 100 Questions
// Weightage adjusted to absorb "Miscellaneous/Current Affairs" into related static subjects
// Geography: 20
// Polity: 17
// Economy: 16
// Environment: 18
// History: 12 (6 Ancient/Medieval + 6 Modern)
// Science & Tech: 17

export const generateMockQuiz = (): Quiz => {
    const geogPool = flattenQuestions(GEOGRAPHY_QUIZ);
    const polityPool = flattenQuestions(POLITY_QUIZ);
    const econPool = flattenQuestions(ECONOMY_QUIZ);
    const envPool = flattenQuestions(ENVIRONMENT_ECOLOGY_QUIZ);
    const ancientPool = flattenQuestions(ANCIENT_HISTORY_QUIZ);
    const modernPool = flattenQuestions(MODERN_HISTORY_QUIZ);
    const sciPool = flattenQuestions(SCIENCE_TECH_QUIZ);

    const geogQs = shuffleArray(geogPool).slice(0, 20);
    const polityQs = shuffleArray(polityPool).slice(0, 17);
    const econQs = shuffleArray(econPool).slice(0, 16);
    const envQs = shuffleArray(envPool).slice(0, 18);
    
    // Mix History
    const historyQs = shuffleArray([
        ...shuffleArray(ancientPool).slice(0, 6),
        ...shuffleArray(modernPool).slice(0, 6)
    ]);

    const sciQs = shuffleArray(sciPool).slice(0, 17);

    return [
        {
            paragraph: "Section 1: Geography (20 Questions)",
            questions: geogQs
        },
        {
            paragraph: "Section 2: Indian Polity (17 Questions)",
            questions: polityQs
        },
        {
            paragraph: "Section 3: Economy (16 Questions)",
            questions: econQs
        },
        {
            paragraph: "Section 4: Environment & Ecology (18 Questions)",
            questions: envQs
        },
        {
            paragraph: "Section 5: History (12 Questions)",
            questions: historyQs
        },
        {
            paragraph: "Section 6: Science & Technology (17 Questions)",
            questions: sciQs
        }
    ];
};

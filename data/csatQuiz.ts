
import { Quiz } from '../types';

export const CSAT_QUIZ: Quiz = [
  {
    paragraph: "Passage-1\nClimate change poses a dual threat to agriculture. On the one hand, rising temperatures and changing precipitation patterns are expected to reduce yields of staple crops. On the other hand, agriculture itself is a major contributor to greenhouse gas emissions. To address this, we need 'climate-smart agriculture'—practices that sustainably increase productivity, enhance resilience (adaptation), and reduce/remove greenhouse gases (mitigation) where possible. However, the adoption of such practices is often hindered by a lack of financial incentives and knowledge among smallholder farmers.",
    questions: [
      {
        questionText: "Which one of the following is the most logical and critical inference that can be made from the above passage?",
        options: [
          "Climate-smart agriculture is the only solution to global warming.",
          "Smallholder farmers are responsible for the majority of agricultural emissions.",
          "Financial support and education are crucial for the success of sustainable agriculture.",
          "Crop yields will inevitably decline regardless of the measures taken."
        ],
        correctAnswerIndex: 2,
        explanation: "The passage explicitly states that the adoption of climate-smart practices is hindered by a lack of financial incentives and knowledge, implying these are critical gaps to address."
      },
      {
        questionText: "According to the passage, what distinguishes 'climate-smart agriculture'?",
        options: [
          "It focuses solely on reducing greenhouse gas emissions.",
          "It prioritizes large-scale industrial farming over smallholders.",
          "It integrates productivity, adaptation, and mitigation.",
          "It bans the use of fertilizers to protect the environment."
        ],
        correctAnswerIndex: 2,
        explanation: "The passage defines it as practices that increase productivity, enhance resilience (adaptation), and reduce/remove greenhouse gases (mitigation)."
      }
    ]
  },
  {
    paragraph: "Passage-2\nDemocracy is not just about holding elections; it is about the functioning of institutions. When institutions weaken, democracy becomes hollow. The judiciary, the press, and the bureaucracy act as checks and balances. If the executive power becomes unbridled, these institutions are the first line of defence. However, if they are co-opted or intimidated, the form of democracy may remain, but its substance vanishes.",
    questions: [
      {
        questionText: "The author's main argument is that:",
        options: [
          "Elections are unnecessary for a true democracy.",
          "A strong executive is essential for institutional efficiency.",
          "Institutional integrity is vital for the substance of democracy.",
          "The press is the most important institution in a democracy."
        ],
        correctAnswerIndex: 2,
        explanation: "The passage argues that without strong, functioning institutions acting as checks and balances, democracy becomes hollow."
      },
      {
        questionText: "What happens when institutions are co-opted?",
        options: [
          "Democracy flourishes due to better coordination.",
          "The executive loses all its power.",
          "The substance of democracy vanishes.",
          "The judiciary takes over the role of the executive."
        ],
        correctAnswerIndex: 2,
        explanation: "The last sentence clearly states that if institutions are co-opted, the substance of democracy vanishes."
      }
    ]
  },
  {
    paragraph: "Passage-3\nUrbanization in developing countries is often viewed as a sign of progress. However, rapid unplanned urbanization leads to the proliferation of slums, inadequate sanitation, and traffic congestion. While cities are engines of economic growth, they can also become traps of inequality and environmental degradation if not managed with foresight.",
    questions: [
      {
        questionText: "Which of the following statements best reflects the central idea of the passage?",
        options: [
          "Urbanization should be stopped in developing countries.",
          "Cities are inherently harmful to the environment.",
          "Planned management is essential to harvest the benefits of urbanization.",
          "Slums are an unavoidable consequence of economic growth."
        ],
        correctAnswerIndex: 2,
        explanation: "The passage highlights the dichotomy of cities being engines of growth vs traps of inequality, emphasizing that foresight/management is needed to avoid the negatives."
      }
    ]
  },
  {
    paragraph: "Logical Reasoning & Basic Numeracy",
    questions: [
      {
        questionText: "If 'DELHI' is coded as 'CCIDD', how would you code 'BOMBAY'?",
        options: [
          "AJMTVT",
          "AMJXVS",
          "MJXVSU",
          "WXYZAX"
        ],
        correctAnswerIndex: 1,
        explanation: "The pattern is -1, -2, -3, -4, -5. D-1=C, E-2=C, L-3=I, H-4=D, I-5=D. Applying to BOMBAY: B-1=A, O-2=M, M-3=J, B-4=X, A-5=V, Y-6=S."
      },
      {
        questionText: "A person walks 10 km North, turns Right walks 5 km, turns Right walks 10 km. How far is he from the starting point?",
        options: [
          "5 km",
          "6 km",
          "12 km",
          "33 km"
        ],
        correctAnswerIndex: 0,
        explanation: "Walks 10N. Turn Right (East) 5km. Turn Right (South) 10km. He returns to the same latitude. The distance is the eastward displacement = 5 km."
      },
      {
        questionText: "In a class of 60 students, 40% are girls. The average weight of boys is 60 kg and that of girls is 50 kg. What is the average weight of the whole class?",
        options: [
          "54 kg",
          "55 kg",
          "56 kg",
          "57 kg"
        ],
        correctAnswerIndex: 2,
        explanation: "Girls = 40% of 60 = 24. Boys = 36. Total weight = (36 * 60) + (24 * 50) = 2160 + 1200 = 3360. Average = 3360 / 60 = 56 kg."
      },
      {
        questionText: "The average of 5 consecutive odd numbers is 15. What is the sum of the first and last numbers?",
        options: [
          "30",
          "32",
          "28",
          "26"
        ],
        correctAnswerIndex: 0,
        explanation: "Consecutive odd numbers: x, x+2, x+4, x+6, x+8. Average is the middle term (x+4) = 15. So x = 11. Numbers are 11, 13, 15, 17, 19. Sum of first (11) and last (19) = 30."
      },
      {
        questionText: "A, B and C can complete a work in 10, 12 and 15 days respectively. They started the work together. But A left the work before 5 days of its completion. B also left the work 2 days after A left. In how many days was the work completed?",
        options: [
          "4 days",
          "5 days",
          "7 days",
          "8 days"
        ],
        correctAnswerIndex: 2,
        explanation: "Let total days be x. A worked for (x-5) days. B worked for (x-5+2) = (x-3) days. C worked for x days. Work: (x-5)/10 + (x-3)/12 + x/15 = 1. Multiply by 60: 6(x-5) + 5(x-3) + 4x = 60. 6x-30 + 5x-15 + 4x = 60. 15x - 45 = 60. 15x = 105. x = 7 days."
      },
      {
        questionText: "Which number replaces the question mark in the series: 2, 6, 12, 20, 30, 42, ?",
        options: [
          "50",
          "52",
          "54",
          "56"
        ],
        correctAnswerIndex: 3,
        explanation: "The pattern is +4, +6, +8, +10, +12. Next is +14. 42 + 14 = 56. Alternatively 1*2, 2*3, 3*4, 4*5, 5*6, 6*7, 7*8 = 56."
      },
      {
        questionText: "Statement: All cats are dogs. All dogs are birds.\nConclusion I: All cats are birds.\nConclusion II: All birds are cats.",
        options: [
          "Only I follows",
          "Only II follows",
          "Both follow",
          "Neither follows"
        ],
        correctAnswerIndex: 0,
        explanation: "If A is subset of B, and B is subset of C, then A is subset of C (All cats are birds). However, C is not necessarily subset of A (All birds are not cats)."
      },
      {
        questionText: "The price of sugar rises by 20%. By how much percent should a family reduce its consumption so as not to increase the expenditure?",
        options: [
          "16.66%",
          "20%",
          "25%",
          "15%"
        ],
        correctAnswerIndex: 0,
        explanation: "Reduction % = (R / (100 + R)) * 100. (20/120)*100 = 1/6 * 100 = 16.66%."
      },
      {
        questionText: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        options: [
          "120 metres",
          "150 metres",
          "180 metres",
          "324 metres"
        ],
        correctAnswerIndex: 1,
        explanation: "Speed = 60 * (5/18) = 50/3 m/s. Distance = Speed * Time = (50/3) * 9 = 50 * 3 = 150 metres."
      },
      {
        questionText: "The ratio of ages of two students is 3:2. One is older to the other by 5 years. What is the age of the younger student?",
        options: [
          "2 years",
          "10 years",
          "15 years",
          "5 years"
        ],
        correctAnswerIndex: 1,
        explanation: "3x - 2x = 5 => x=5. Younger student is 2x = 2*5 = 10 years."
      },
      {
        questionText: "A is the brother of B. B is the brother of C. C is the husband of D. E is the father of A. How is D related to E?",
        options: [
          "Daughter",
          "Daughter-in-law",
          "Sister-in-law",
          "Mother"
        ],
        correctAnswerIndex: 1,
        explanation: "A, B, C are siblings (brothers). E is their father. C is husband of D. So D is the wife of E's son (C). Thus, D is E's Daughter-in-law."
      },
      {
        questionText: "Six friends A, B, C, D, E and F are sitting in a circle facing the centre. C is to the left of D. F is between A and E. E is between F and D. Who is to the left of F?",
        options: [
          "A",
          "C",
          "D",
          "E"
        ],
        correctAnswerIndex: 3,
        explanation: "Arrangement (Clockwise): A - F - E - D - C - B. Left of F is E."
      }
    ]
  }
];

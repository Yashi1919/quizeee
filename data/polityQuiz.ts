
import { Quiz } from '../types';

export const POLITY_QUIZ: Quiz = [
  {
    paragraph: "2024 - Indian Polity",
    questions: [
      {
        questionText: "How many Delimitation Commissions have been constituted by the Government of India till December 2023?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswerIndex: 3,
        explanation: "Delimitation Commissions have been constituted four times: in 1952, 1963, 1973, and 2002."
      },
      {
        questionText: "The Constitution (71st Amendment) Act, 1992, amends the Eighth Schedule to the Constitution to include which of the following languages?\n1. Konkani\n2. Manipuri\n3. Nepali\n4. Maithili",
        options: ["1, 2 and 3", "1, 2 and 4", "1, 3 and 4", "2, 3 and 4"],
        correctAnswerIndex: 0,
        explanation: "The 71st Amendment added Konkani, Manipuri, and Nepali. Maithili (along with Bodo, Dogri, Santhali) was added by the 92nd Amendment in 2003."
      },
      {
        questionText: "Which one of the following statements is correct as per the Constitution of India?",
        options: [
          "Inter-State trade and commerce is a State subject under the State List.",
          "Inter-State migration is a State subject under the State List.",
          "Inter-State quarantine is a Union subject under the Union List.",
          "Corporation tax is a State subject under the State List."
        ],
        correctAnswerIndex: 2,
        explanation: "Inter-State quarantine is a Union subject (Entry 81, List I). Corporation tax is Union List. Inter-state trade and migration are also Union subjects."
      },
      {
        questionText: "Under which of the following Articles of the Constitution of India has the Supreme Court of India placed the Right to Privacy?",
        options: ["Article 15", "Article 16", "Article 19", "Article 21"],
        correctAnswerIndex: 3,
        explanation: "In the K.S. Puttaswamy judgment (2017), the Supreme Court declared Right to Privacy as a fundamental right under Article 21 (Right to Life and Personal Liberty)."
      },
      {
        questionText: "Who was the Provisional President of the Constituent Assembly before Dr. Rajendra Prasad took over?",
        options: ["C. Rajagopalachari", "Dr. B.R. Ambedkar", "T.T. Krishnamachari", "Dr. Sachchidananda Sinha"],
        correctAnswerIndex: 3,
        explanation: "Dr. Sachchidananda Sinha, the oldest member, was elected as the temporary President of the Constituent Assembly, following the French practice."
      }
    ]
  },
  {
    paragraph: "2023 - Indian Polity",
    questions: [
      {
        questionText: "In essence, what does ‘Due Process of Law’ mean?",
        options: ["The principle of natural justice", "The procedure established by law", "Fair application of law", "Equality before law"],
        correctAnswerIndex: 2,
        explanation: "Due Process of Law implies that not only must the procedure be followed (Procedure Established by Law), but the law itself must be fair, just, and reasonable (Substantive Due Process/Fair application)."
      },
      {
        questionText: "Consider the following statements:\n1. If the election of the President of India is declared void by the Supreme Court of India, all acts done by him/her in the performance of duties of his/her office of President before the date of decision become invalid.\n2. Elections for the post of the President of India can be postponed on the ground that some Legislative Assemblies have been dissolved and elections are yet to take place.\n3. When a Bill is presented to the President of India, the Constitution prescribes time limits within which he/she has to declare his/her assent.\nHow many of the above statements are correct?",
        options: ["Only one", "Only two", "All three", "None"],
        correctAnswerIndex: 3,
        explanation: "1: Acts remain valid (Art 71). 2: Cannot be postponed (Art 62). 3: No time limit prescribed (Pocket Veto)."
      },
      {
        questionText: "Consider the following statements in respect of the National Flag of India according to the Flag Code of India, 2002:\nStatement-I: One of the standard sizes of the National Flag of India is 600 mm × 400 mm.\nStatement-II: The ratio of the length to the height (width) of the Flag shall be 3:2.\nWhich one of the following is correct?",
        options: [
          "Both Statement-I and Statement-II are correct and Statement-II is the correct explanation for Statement-I",
          "Both Statement-I and Statement-II are correct and Statement-II is not the correct explanation for Statement-I",
          "Statement-I is correct but Statement-II is incorrect",
          "Statement-I is incorrect but Statement-II is correct"
        ],
        correctAnswerIndex: 3,
        explanation: "The standard ratio is 3:2 (Length:Height). 600x400 mm corresponds to 3:2 ratio. Standard sizes include 6300x4200, 3600x2400... 900x600, 450x300. 600x400 is NOT a standard size listed in the Flag Code (closest is 450x300 or 900x600). Thus, Statement I is incorrect."
      },
      {
        questionText: "Consider the following statements in respect of the Constitution Day:\nStatement-I: Constitution Day is celebrated on 26th November every year to promote constitutional values among citizens.\nStatement-II: On 26th November 1949, the Constituent Assembly of India set up a Drafting Committee under the Chairmanship of Dr. B. R. Ambedkar to prepare a Draft Constitution of India.\nWhich one of the following is correct?",
        options: [
          "Both Statement-I and Statement-II are correct and Statement-II explains Statement-I",
          "Both Statement-I and Statement-II are correct but Statement-II does not explain Statement-I",
          "Statement-I is correct but Statement-II is incorrect",
          "Statement-I is incorrect but Statement-II is correct"
        ],
        correctAnswerIndex: 2,
        explanation: "Statement I is correct. Statement II is incorrect because the Drafting Committee was set up on August 29, 1947, not Nov 26, 1949 (which is the date of adoption)."
      }
    ]
  },
  {
    paragraph: "2022 - Indian Polity",
    questions: [
      {
        questionText: "Consider the following statements:\n1. A bill amending the Constitution requires a prior recommendation of the President of India.\n2. When a Constitution Amendment Bill is presented to the President of India, it is obligatory for the President of India to give his/her assent.\n3. A Constitution Amendment Bill must be passed by both the Lok Sabha and the Rajya Sabha by a special majority and there is no provision for joint sitting.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswerIndex: 1,
        explanation: "Prior recommendation is NOT required for Constitutional Amendment Bills (Statement 1 incorrect). The 24th Amendment Act made it obligatory for the President to give assent (Statement 2 correct). There is no joint sitting (Statement 3 correct)."
      },
      {
        questionText: "Which of the following is/are the exclusive power(s) of Lok Sabha?\n1. To ratify the declaration of Emergency\n2. To pass a motion of no-confidence against the Council of Ministers.\n3. To impeach the President of India\nSelect the correct answer:",
        options: ["1 and 2", "2 only", "1 and 3", "3 only"],
        correctAnswerIndex: 1,
        explanation: "Ratification of Emergency requires both houses. Impeachment can be initiated in either house. No-confidence motion can only be introduced in the Lok Sabha."
      },
      {
        questionText: "With reference to anti-defection law in India, consider the following statements:\n1. The law specifies that a nominated legislator cannot join any political party within six months of being appointed to the House.\n2. The law does not provide any timeframe within which the presiding officer has to decide a defection case.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswerIndex: 1,
        explanation: "A nominated member can join a party *within* six months without disqualification; disqualification applies if they join *after* six months (Statement 1 incorrect). The law specifies no timeframe for the Speaker's decision (Statement 2 correct)."
      }
    ]
  },
  {
    paragraph: "2021 - Indian Polity",
    questions: [
      {
        questionText: "Which one of the following best defines the term ‘State?",
        options: [
          "A community of persons permanently occupying a definite territory independent of external control and possessing an organised government",
          "A politically organized people of a definite territory and possessing an authority to govern them, maintain law and order...",
          "A number of persons who have been living in a definite territory for a very long time with their own culture...",
          "A society permanently living in a definite territory with a central authority, an executive responsible to the central authority..."
        ],
        correctAnswerIndex: 0,
        explanation: "The standard definition of State (Montevideo Convention/Political Science) includes four elements: Population, Territory, Government, and Sovereignty (independent of external control)."
      },
      {
        questionText: "Right to Privacy’ is protected under which Article of the Constitution of India?",
        options: ["Article 15", "Article 19", "Article 21", "Article 29"],
        correctAnswerIndex: 2,
        explanation: "Article 21 (Protection of Life and Personal Liberty) encompasses the Right to Privacy."
      },
      {
        questionText: "Constitutional government means:",
        options: [
          "a representative government of a nation with federal structure",
          "a government whose Head enjoys nominal powers",
          "a government whose Head enjoys real powers",
          "a government limited by the terms of the Constitution"
        ],
        correctAnswerIndex: 3,
        explanation: "Constitutionalism essentially means 'Limited Government', where the authority of government is derived from and limited by a body of fundamental law."
      }
    ]
  },
  {
    paragraph: "2020 - Indian Polity",
    questions: [
      {
        questionText: "A Parliamentary System of Government is one in which:",
        options: [
          "all political parties in the Parliament are represented in the Government",
          "the Government is responsible to the Parliament and can be removed by it",
          "the Government is elected by the people and can be removed by them",
          "the Government is chosen by the Parliament but cannot be removed by it before completion of a fixed term"
        ],
        correctAnswerIndex: 1,
        explanation: "The core feature of a Parliamentary system is the collective responsibility of the Executive (Government) to the Legislature (Parliament)."
      },
      {
        questionText: "In India, separation of judiciary from the executive is enjoined by",
        options: ["the Preamble of the Constitution", "a Directive Principle of State Policy", "the Seventh Schedule", "the conventional practice"],
        correctAnswerIndex: 1,
        explanation: "Article 50 (Directive Principles of State Policy) directs the State to separate the judiciary from the executive in the public services of the State."
      },
      {
        questionText: "Rajya Sabha has equal powers with Lok Sabha in",
        options: [
          "the matter of creating new All India Services",
          "amending the Constitution",
          "the removal of the government",
          "making cut motions"
        ],
        correctAnswerIndex: 1,
        explanation: "Constitutional Amendment Bills must be passed by both houses separately with special majority; RS has equal power. All India Services is RS special power. Removal of Govt (No-confidence) is LS exclusive."
      }
    ]
  },
  {
    paragraph: "2019 - Indian Polity",
    questions: [
      {
        questionText: "The Ninth Schedule was introduced in the Constitution of India during the prime minister ship of:",
        options: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Morarji Desai"],
        correctAnswerIndex: 0,
        explanation: "The Ninth Schedule was added by the 1st Constitutional Amendment Act in 1951, under Jawaharlal Nehru."
      },
      {
        questionText: "Which Article of the Constitution of India safeguards one’s right to marry the person of one’s choice?",
        options: ["Article 19", "Article 21", "Article 25", "Article 29"],
        correctAnswerIndex: 1,
        explanation: "In the Hadiya case (Shafin Jahan v. Ashokan K.M.), the Supreme Court held that the right to marry a person of one's choice is integral to Article 21 (Right to Life/Liberty)."
      },
      {
        questionText: "With reference to the Legislative Assembly of a State in India, consider the following statements:\n1. The Governor makes a customary address to Members of the House at the commencement of the first session of the year.\n2. When a State Legislature does not have a rule on a particular matter, it follows the Lok Sabha rule on that matter.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswerIndex: 0,
        explanation: "Statement 1 is correct (Art 176). Statement 2 is incorrect; if rules are absent, the Speaker/Chairman decides, they don't automatically follow LS rules."
      }
    ]
  },
  {
    paragraph: "2018 - Indian Polity",
    questions: [
      {
        questionText: "Which one of the following reflects the most appropriate relationship between law and liberty?",
        options: [
          "If there are more laws, there is less liberty.",
          "If there are no laws, there is no liberty.",
          "If there is liberty, laws have to be made by the people.",
          "If laws are changed too often, liberty is in danger."
        ],
        correctAnswerIndex: 1,
        explanation: "John Locke stated, 'Where there is no law, there is no freedom.' Laws create the conditions and protections necessary for liberty to exist."
      },
      {
        questionText: "Regarding Money Bill, which of the following statements is not correct?",
        options: [
          "A bill shall be deemed to be a Money Bill if it contains only provisions relating to imposition, abolition, remission, alteration or regulation of any tax.",
          "A Money Bill has provisions for the custody of the Consolidated Fund of India or the Contingency Fund of India.",
          "A Money Bill is concerned with the appropriation of money out of the Contingency Fund of India.",
          "A Money Bill deals with the regulation of borrowing of money or giving of any guarantee by the Government of India."
        ],
        correctAnswerIndex: 2,
        explanation: "Appropriation is out of the Consolidated Fund of India (Art 110(1)(d)). Appropriation out of the Contingency Fund is not a specific provision defining a Money Bill in Article 110."
      }
    ]
  },
  {
    paragraph: "2017 & Earlier - Indian Polity",
    questions: [
      {
        questionText: "The mind of the makers of the Constitution of India is reflected in which of the following?",
        options: ["The Preamble", "The Fundamental Rights", "The Directive Principles of State Policy", "The Fundamental Duties"],
        correctAnswerIndex: 0,
        explanation: "The Preamble embodies the basic philosophy and fundamental values—political, moral and religious—on which the Constitution is based. It reflects the mind of the constitution makers (Berubari Union case)."
      },
      {
        questionText: "Which of the following are not necessarily the consequences of the proclamation of the President’s rule in a State?\n1. Dissolution of the State Legislative Assembly\n2. Removal of the Council of Ministers in the State\n3. Dissolution of the local bodies\nSelect the correct answer:",
        options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswerIndex: 1,
        explanation: "Removal of the Council of Ministers is immediate. However, the Assembly may be suspended or dissolved (not necessarily dissolved immediately). Local bodies are not affected directly. So 1 and 3 are not necessary consequences."
      },
      {
        questionText: "In India, Judicial Review implies:",
        options: [
          "the power of the Judiciary to pronounce upon the constitutionality of laws and executive orders.",
          "the power of the Judiciary to question the wisdom of the laws enacted by the Legislatures.",
          "the power of the Judiciary to review all the legislative enactments before they are assented to by the President.",
          "the power of the Judiciary to review its own judgements given earlier in similar or different cases"
        ],
        correctAnswerIndex: 0,
        explanation: "Judicial Review is the power to examine the constitutionality of legislative enactments and executive orders."
      },
      {
        questionText: "There is a Parliamentary System of Government in India because the",
        options: [
          "Lok Sabha is elected directly by the people",
          "Parliament can amend the Constitution",
          "Rajya Sabha cannot be dissolved",
          "Council of Ministers is responsible to the Lok Sabha"
        ],
        correctAnswerIndex: 3,
        explanation: "Collective responsibility of the Executive to the Legislature (specifically Lok Sabha) is the defining feature."
      },
      {
        questionText: "The Prime Minister of India, at the time of his/her appointment:",
        options: [
          "Need not necessarily be a member of one of the Houses of the Parliament but must become a member of one of the Houses within six months",
          "Need not necessarily be a member of one of the Houses of the Parliament but must become a member of the Lok Sabha within six months",
          "Must be a member of one of the Houses of the Parliament",
          "Must be a member of the Lok Sabha"
        ],
        correctAnswerIndex: 0,
        explanation: "A person who is not a member of either House can be appointed as PM, provided they become a member of either House (LS or RS) within 6 months."
      }
    ]
  }
];

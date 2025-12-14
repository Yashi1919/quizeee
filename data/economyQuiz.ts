
import { Quiz } from '../types';

export const ECONOMY_QUIZ: Quiz = [
  {
    paragraph: "2024 - Economy",
    questions: [
      {
        questionText: "Consider the following statements:\nStatement-I: If the United States of America (USA) were to default on its debt, holders of US Treasury Bonds will not be able to exercise their claims to receive payment.\nStatement-II: The USA Government debt is not backed by any hard assets, but only by the faith of the Government.\nWhich one of the following is correct?",
        options: [
          "Both Statement-I and Statement-II are correct and Statement-II explains Statement-I",
          "Both Statement-I and Statement-II are correct, but Statement-II does not explain Statement-I",
          "Statement-I is correct, but Statement-II is incorrect",
          "Statement-I is incorrect, but Statement-II is correct"
        ],
        correctAnswerIndex: 0,
        explanation: "Statement I is correct; default implies non-payment. Statement II is correct; fiat money/govt debt is backed by 'full faith and credit', not gold or assets. This lack of hard assets explains why a default leaves bondholders with no recourse."
      },
      {
        questionText: "Consider the following statements:\nStatement-I: Syndicated lending spreads the risk of borrower default across multiple lenders.\nStatement-II: The syndicated loan can be a fixed amount/lump sum of funds, but cannot be a credit line.\nWhich one of the following is correct?",
        options: [
          "Both Statement-I and Statement-II are correct and Statement-II explains Statement-I",
          "Both Statement-I and Statement-II are correct, but Statement-II does not explain Statement-I",
          "Statement-I is correct, but Statement-II is incorrect",
          "Statement-I is incorrect, but Statement-II is correct"
        ],
        correctAnswerIndex: 2,
        explanation: "Statement I is correct. Statement II is incorrect because syndicated loans can be term loans, revolving credit lines, or a combination."
      },
      {
        questionText: "Consider the following statements in respect of the digital rupee:\n1. It is a sovereign currency issued by the Reserve Bank of India (RBI) in alignment with its monetary policy.\n2. It appears as a liability on the RBI’s balance sheet.\n3. It is insured against inflation by its very design.\n4. It is freely convertible against commercial bank money and cash.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "1 and 3 only", "2 and 4 only", "1, 2 and 4"],
        correctAnswerIndex: 3,
        explanation: "Digital Rupee (e₹) is sovereign currency (1), a liability of RBI (2), and convertible (4). It is NOT insured against inflation (3)."
      },
      {
        questionText: "With reference to the Digital India Land Records Modernisation Programme, consider the following statements:\n1. To implement the scheme, the Central Government provides 100% funding.\n2. Under the Scheme, Cadastral Maps are digitised.\n3. An initiative has been undertaken to transliterate the Records of Rights from local language to any of the languages recognized by the Constitution of India.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswerIndex: 3,
        explanation: "It is a Central Sector Scheme with 100% funding. Digitization of maps and transliteration of records are key components."
      },
      {
        questionText: "In India, which of the following can trade in Corporate Bonds and Government Securities?\n1. Insurance Companies\n2. Pension Funds\n3. Retail Investors",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswerIndex: 3,
        explanation: "All listed entities can trade. Retail investors can access G-Secs via the RBI Retail Direct scheme."
      }
    ]
  },
  {
    paragraph: "2023 - Economy",
    questions: [
      {
        questionText: "Consider the following statements:\nStatement-I: Interest income from the deposits in Infrastructure Investment Trusts (InvITs) distributed to their investors is exempted from tax, but the dividend is taxable.\nStatement-II: InvITs are recognized as borrowers under the ‘Securitization and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002”.\nWhich one of the following is correct?",
        options: [
          "Both Statement-I and Statement-II are correct and Statement-II explains Statement-I",
          "Both Statement-I and Statement-II are correct and Statement-II does not explain Statement-I",
          "Statement-I is correct but Statement-II is incorrect",
          "Statement-I is incorrect but Statement-II is correct"
        ],
        correctAnswerIndex: 3,
        explanation: "Statement I is incorrect because usually, interest is taxable and dividends are exempt (subject to conditions). Statement II is correct."
      },
      {
        questionText: "Which one of the following activities of the Reserve Bank of India is considered to be part of ‘sterilization’?",
        options: [
          "Conducting ‘Open Market Operations’",
          "Oversight of settlement and payment systems",
          "Debt and cash management for the Central and State Governments",
          "Regulating the functions of Non-banking Financial Institutions"
        ],
        correctAnswerIndex: 0,
        explanation: "Sterilization refers to OMOs conducted by the central bank to neutralize the effect of foreign exchange intervention on the domestic money supply."
      },
      {
        questionText: "Consider the following markets:\n1. Government Bond Market\n2. Call Money Market\n3. Treasury Bill Market\n4. Stock Market\nHow many of the above are included in capital markets?",
        options: ["Only one", "Only two", "Only three", "All four"],
        correctAnswerIndex: 1,
        explanation: "Government Bond Market (dated securities) and Stock Market are Capital Markets. Call Money and Treasury Bills are Money Markets (Short term)."
      },
      {
        questionText: "Consider the investments in the following assets:\n1. Brand recognition\n2. Inventory\n3. Intellectual property\n4. Mailing list of clients\nHow many of the above are considered intangible investments?",
        options: ["Only one", "Only two", "Only three", "All four"],
        correctAnswerIndex: 2,
        explanation: "Brand recognition, Intellectual property, and Mailing lists are intangible assets. Inventory is a physical/tangible asset."
      }
    ]
  },
  {
    paragraph: "2022 - Economy",
    questions: [
      {
        questionText: "With reference to the Indian economy, consider the following statements:\n1. If the inflation is too high, the Reserve Bank of India (RBI) is likely to buy government securities.\n2. If the rupee is rapidly depreciating, RBI is likely to sell dollars in the market.\n3. If interest rates in the USA or European Union were to fall, that is likely to induce RBI to buy dollars.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswerIndex: 1,
        explanation: "Statement 1 is incorrect: RBI sells securities to absorb liquidity to control inflation. 2 is correct (selling dollars supports rupee). 3 is correct (lower foreign rates increase inflows, RBI buys dollars to stabilize/build reserves)."
      },
      {
        questionText: "With reference to the Indian economy, what are the advantages of “Inflation-Indexed Bonds (IIBs)”?\n1. Government can reduce the coupon rates on its borrowing by way of IIBs.\n2. IIBs provide protection to the investors from uncertainty regarding inflation.\n3. The interest received as well as capital gains on IIBs are not taxable.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswerIndex: 0,
        explanation: "1 and 2 are correct. 3 is incorrect; interest on IIBs is taxable."
      },
      {
        questionText: "With reference to Convertible Bonds, consider the following statements:\n1. As there is an option to exchange the bond for equity, Convertible Bonds pay a lower rate of interest.\n2. The option to convert to equity affords the bondholder a degree of indexation to rising consumer prices.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswerIndex: 2,
        explanation: "Both statements are correct. The conversion option adds value, lowering the coupon rate. Equity generally correlates with inflation, offering indexation."
      }
    ]
  },
  {
    paragraph: "2021 - Economy",
    questions: [
      {
        questionText: "Which one of the following is likely to be the most inflationary in its effects?",
        options: [
          "Repayment of public debt",
          "Borrowing from the public to finance a budget deficit",
          "Borrowing from the banks to finance a budget deficit",
          "Creation of new money to finance a budget deficit"
        ],
        correctAnswerIndex: 3,
        explanation: "Creation of new money (monetization) increases the money supply directly without corresponding output, leading to the highest inflation."
      },
      {
        questionText: "The money multiplier in an economy increases with which one of the following?",
        options: [
          "Increase in the Cash Reserve Ratio in the banks",
          "Increase in the Statutory Liquidity Ratio in the banks",
          "Increase in the banking habit of the people",
          "Increase in the population of the country"
        ],
        correctAnswerIndex: 2,
        explanation: "Increased banking habits (deposits) increase the money multiplier as banks can lend more."
      },
      {
        questionText: "Indian Government Bond Yields are influenced by which of the following?\n1. Actions of the United States Federal Reserve\n2. Actions of the Reserve bank of India\n3. Inflation and short-term interest rates",
        options: ["1 and 2 only", "2 only", "3 only", "1, 2 and 3"],
        correctAnswerIndex: 3,
        explanation: "All three factors influence bond yields."
      }
    ]
  },
  {
    paragraph: "2020 - Economy",
    questions: [
      {
        questionText: "Which of the following factors/policies were affecting the price of rice in India in the recent past?\n1. Minimum Support Price\n2. Government’s trading\n3. Government’s stockpiling\n4. Consumer subsidies",
        options: ["1, 2 and 4 only", "1, 3 and 4 only", "2 and 3 only", "1, 2, 3 and 4"],
        correctAnswerIndex: 3,
        explanation: "All listed factors influence the price of rice."
      },
      {
        questionText: "If the RBI decides to adopt an expansionist monetary policy, which of the following would it not do?\n1. Cut and optimise the Statutory Liquidity Ratio\n2. Increase the Marginal Standing Facility Rate\n3. Cut the Bank Rate and Repo Rate",
        options: ["1 and 2 only", "2 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswerIndex: 1,
        explanation: "Increasing the MSF rate is a contractionary measure (tightening liquidity). Cutting SLR, Bank Rate, and Repo Rate are expansionary."
      },
      {
        questionText: "With reference to Foreign Direct Investment in India, which one of the following is considered its major characteristic?",
        options: [
          "It is the investment through capital instruments essentially in a listed company.",
          "It is a largely non-debt creating capital flow.",
          "It is an investment that involves debt-servicing.",
          "It is the investment made by foreign institutional investors in the Government Securities."
        ],
        correctAnswerIndex: 1,
        explanation: "FDI is an equity investment and is largely non-debt creating."
      }
    ]
  },
  {
    paragraph: "2019 - Economy",
    questions: [
      {
        questionText: "Which one of the following is not the most likely measure the Government/ RBI takes to stop the slide of the Indian rupee?",
        options: [
          "Curbing imports of nonessential goods-and promoting exports",
          "Encouraging Indian borrowers to issue rupee denominated Masala Bonds",
          "Easing conditions relating to external commercial borrowing",
          "Following an expansionary monetary policy"
        ],
        correctAnswerIndex: 3,
        explanation: "Expansionary monetary policy (lowering rates/increasing supply) typically weakens the currency further. To stop a slide, a tight policy is used."
      },
      {
        questionText: "In a given year in India, official poverty lines are higher in some States than in others because:",
        options: [
          "Poverty rates vary from State to State",
          "Price levels vary from State to State",
          "Gross State Product varies from State to State",
          "Quality of public distribution varies from State to State"
        ],
        correctAnswerIndex: 1,
        explanation: "Poverty lines are based on consumption expenditure, which depends on price levels (cost of living) that vary across states."
      }
    ]
  },
  {
    paragraph: "2018 - Economy",
    questions: [
      {
        questionText: "Which one of the following statements correctly describes the meaning of legal tender money?",
        options: [
          "The money which is tendered in courts of law to defray the fee of legal cases",
          "The money which a creditor is under compulsion to accept in settlement of his claims",
          "The bank money in the form of cheques, drafts, bills of exchange etc.",
          "The metallic money in circulation in a country"
        ],
        correctAnswerIndex: 1,
        explanation: "Legal tender is money that cannot be refused in settlement of a debt."
      },
      {
        questionText: "Human capital formation as a concept is better explained in terms of a process which enables:\n1. Individuals of a country to accumulate more capital.\n2. Increasing the knowledge, skill levels and capacities of the people of the country.\n3. Accumulation of tangible wealth.\n4. Accumulation of intangible wealth.",
        options: ["1 and 2", "2 only", "2 and 4", "1, 3 and 4"],
        correctAnswerIndex: 2,
        explanation: "Human capital refers to knowledge, skills, and capacities (intangible wealth) of the population."
      }
    ]
  },
  {
    paragraph: "2017 & Earlier - Economy",
    questions: [
      {
        questionText: "Which of the following has/have occurred in India after its liberalisation of economic policies in 1991?\n1. Share of agriculture in GDP increased enormously.\n2. Share of India’s exports in world trade increased\n3. FDI inflows increased.\n4. India’s foreign exchange reserves increased enormously.",
        options: ["1 and 4 only", "2, 3 and 4 only", "2 and 3 only", "1, 2, 3 and 4"],
        correctAnswerIndex: 1,
        explanation: "Share of agriculture in GDP decreased. Exports, FDI, and Forex reserves increased."
      },
      {
        questionText: "The term ‘Core Banking Solution’ is sometimes seen in the news. Which of the following statements best describes/describe this term?\n1. It is a network of a bank’s branches which enables customers to operate their accounts from any branch of the bank on its network regardless of where they open their accounts.\n2. It is an effort to increase RBI’s control over commercial banks through computerization.\n3. It is a detailed procedure by which a bank with huge non-performing assets is taken over by another bank.",
        options: ["1 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswerIndex: 0,
        explanation: "CBS allows anywhere banking for customers."
      },
      {
        questionText: "Both Foreign Direct Investment (FDI) and Foreign Institutional Investor (FII) are related to investment in a country. Which one of the following statements best represents an important difference between the two?",
        options: [
          "FII helps bring better management skills and technology, while FDI only brings in capital",
          "FII helps in increasing capital availability in general, while FDI only targets specific sectors",
          "FDI flows only into the secondary market, while FII targets primary market",
          "FII is considered to be more stable than FDI"
        ],
        correctAnswerIndex: 1,
        explanation: "FDI brings capital, tech, and management to specific sectors/companies. FII brings portfolio capital to the market in general. (Note: Option (b) is the UPSC answer, focusing on 'general availability' vs 'specific targets')."
      },
      {
        questionText: "A “closed economy” is an economy in which:",
        options: [
          "The money supply is fully controlled",
          "Deficit financing takes place",
          "Only exports take place",
          "Neither exports or imports take place"
        ],
        correctAnswerIndex: 3,
        explanation: "A closed economy has no external trade (no exports or imports)."
      }
    ]
  }
];

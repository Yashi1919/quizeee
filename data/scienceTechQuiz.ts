
import { Quiz } from '../types';

export const SCIENCE_TECH_QUIZ: Quiz = [
  {
    paragraph: "2024 - Science & Technology",
    questions: [
      {
        questionText: "Which one of the following words/phrases is most appropriately used to denote “an interoperable network of 3D virtual worlds that can be accessed simultaneously by millions of users, who can exert property rights over virtual items”?",
        options: ["Big data analytics", "Cryptography", "Metaverse", "Virtual matrix"],
        correctAnswerIndex: 2,
        explanation: "The Metaverse describes a shared virtual 3D world that is interactive, immersive, and collaborative."
      },
      {
        questionText: "With reference to radioisotope thermoelectric generators (RTGs), consider the following statements:\n1. RTGs are miniature fission reactors.\n2. RTGs are used for powering the onboard systems of spacecrafts.\n3. RTGs can use Plutonium-238, which is a by-product of weapons developments.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswerIndex: 1,
        explanation: "RTGs work on the Seebeck effect (thermoelectric effect) using heat from radioactive decay, not fission (Statement 1 incorrect). They power spacecraft like Voyager/Curiosity and use Pu-238."
      },
      {
        questionText: "Consider the following statements:\nStatement-I: Giant stars live much longer than dwarf stars.\nStatement-II: Compared to dwarf stars, giant stars have a greater rate of nuclear reactions.\nWhich one of the following is correct?",
        options: [
          "Both Statement-I and Statement-II are correct and Statement-II explains Statement-I",
          "Both Statement-I and Statement-II are correct, but Statement-II does not explain Statement-I",
          "Statement-I is correct, but Statement II is incorrect",
          "Statement-I is incorrect, but Statement-II is correct"
        ],
        correctAnswerIndex: 3,
        explanation: "Statement I is incorrect; Giant stars burn fuel much faster and die sooner than dwarf stars (like our Sun or Red Dwarfs). Statement II is correct; their rate of nuclear reaction is much higher to support their mass."
      },
      {
        questionText: "Which one of the following is synthesised in the human body that dilates blood vessels and increases blood flow?",
        options: ["Nitric oxide", "Nitrous oxide", "Nitrogen dioxide", "Nitrogen pentoxide"],
        correctAnswerIndex: 0,
        explanation: "Nitric Oxide (NO) is a vasodilator produced by the endothelium of blood vessels."
      }
    ]
  },
  {
    paragraph: "2023 - Science & Technology",
    questions: [
      {
        questionText: "‘Wolbachia method’ is sometimes talked about with reference to which one of the following?",
        options: [
          "Controlling the viral diseases spread by mosquitoes",
          "Converting crop residues into packing material",
          "Producing biodegradable plastics",
          "Producing biochar from thermochemical conversion of biomas"
        ],
        correctAnswerIndex: 0,
        explanation: "Wolbachia bacteria are introduced into mosquitoes to prevent them from transmitting viruses like Dengue, Chikungunya, and Zika."
      },
      {
        questionText: "Consider the following heavy industries:\n1. Fertilizer plants\n2. Oil refineries\n3. Steel plants\nGreen hydrogen is expected to play a significant role in decarbonizing how many of the above industries?",
        options: ["Only one", "Only two", "All three", "None"],
        correctAnswerIndex: 2,
        explanation: "Green Hydrogen is crucial for decarbonizing hard-to-abate sectors like Steel (reducing agent), Fertilizers (ammonia production), and Oil Refineries (desulphurization)."
      },
      {
        questionText: "‘Aerial metagenomics’ best refers to which one of the following situations?",
        options: [
          "Collecting DNA samples from air in a habitat at one go",
          "Understanding the genetic makeup of avian species of a habitat",
          "Using air-borne devices to collect samples from moving animals",
          "Sending drones to inaccessible areas to collect plant and animal samples from land surfaces and water bodies"
        ],
        correctAnswerIndex: 0,
        explanation: "Aerial metagenomics involves collecting environmental DNA (eDNA) directly from the air to monitor biodiversity."
      },
      {
        questionText: "Consider the following statements:\n1. Ballistic missiles are jet-propelled at subsonic speeds throughout their flights, while cruise missiles are rocket-powered only in the initial phase of flight.\n2. Agni-V is a medium-range supersonic cruise missile, while BrahMos is a solid – fuelled intercontinental ballistic missile.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswerIndex: 3,
        explanation: "Statement 1 is swapped: Cruise missiles are jet-propelled/subsonic (mostly), Ballistic missiles are rocket-powered initially. Statement 2 is swapped: Agni-V is an ICBM, BrahMos is a supersonic cruise missile."
      }
    ]
  },
  {
    paragraph: "2022 - Science & Technology",
    questions: [
      {
        questionText: "“Biorock technology” is talked about in which one of the following situations?",
        options: [
          "Restoration of damaged coral reefs",
          "Development of building materials using plant residues",
          "Identification of areas for exploration/extraction of shale gas",
          "Providing salt licks for wild animals in forests/protected areas"
        ],
        correctAnswerIndex: 0,
        explanation: "Biorock technology uses low-voltage electricity to stimulate the growth of limestone on metal structures, accelerating coral growth."
      },
      {
        questionText: "With reference to “Software as a Service (SaaS)”, consider the following statements:\n1. SaaS buyers can customise the user interface and can change data fields.\n2. SaaS users can access their data through their mobile devices.\n3. Outlook, Hotmail and Yahoo Mail are form of SaaS\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswerIndex: 3,
        explanation: "SaaS allows UI customization (1), mobile access (2), and webmail services like Outlook/Gmail are classic examples (3)."
      },
      {
        questionText: "With reference to Web 3.0, consider the following statements:\n1. Web 3.0 technology enables people to control their own data.\n2. In Web 3.0 world, there can be blockchain based social networks.\n3. Web 3.0 is operated by users collectively rather than a corporation.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswerIndex: 3,
        explanation: "Web 3.0 is the decentralized web based on blockchain, emphasizing user ownership of data and decentralized autonomous organizations (DAOs)."
      }
    ]
  },
  {
    paragraph: "2021 - Science & Technology",
    questions: [
      {
        questionText: "With reference to street – lighting, how do sodium lamps differ from LED lamps?\n1. Sodium lamps produce light in 360 degrees but it is not so in the case of LED lamps.\n2. As street -lights, sodium lamps have a longer lifespan than LED lamps.\n3. The spectrum of visible light from sodium lamps is almost monochromatic while LED lamps offer significant colour advantages in street lighting.\nSelect the correct answer:",
        options: ["3 only", "2 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswerIndex: 2,
        explanation: "Statement 1 is correct (Sodium lamps are omnidirectional). Statement 2 is incorrect; LEDs generally have a longer lifespan. Statement 3 is correct (Sodium is yellow-orange monochromatic, LEDs are broad spectrum)."
      },
      {
        questionText: "Bisphenol A (BPA), a cause of concern, is a structural/ key component in the manufacture of which of the following kinds of plastics?",
        options: ["Low-density polyethylene", "Polycarbonate", "Polyethylene terephthalate", "Polyvinyl chloride"],
        correctAnswerIndex: 1,
        explanation: "BPA is primarily used to make Polycarbonate plastics and epoxy resins."
      },
      {
        questionText: "‘Triclosan’, considered harmful when exposed to high levels for a long time, is most likely present in which of the following?",
        options: ["Food preservatives", "Fruit-ripening substances", "Reused plastic containers", "Toiletries"],
        correctAnswerIndex: 3,
        explanation: "Triclosan is an antibacterial agent found in many soaps, toothpastes, and cosmetics (toiletries)."
      }
    ]
  },
  {
    paragraph: "2020 - Science & Technology",
    questions: [
      {
        questionText: "With reference to “Blockchain Technology” consider the following statements:\n1. It is a public ledger that everyone we inspect, but which no single user controls\n2. The structure and design of blockchain is such that all the data in it is about crypto currency only.\n3. Applications that depend on basic features of blockchain can be developed without anybody’s permission.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "1 and 2 only", "2 only", "1 and 3 only"],
        correctAnswerIndex: 3,
        explanation: "Statement 2 is incorrect; Blockchain can store any data (smart contracts, supply chain, health records), not just cryptocurrency."
      },
      {
        questionText: "With reference to Visible Light Communication (VLC) technology, which of the following statements are correct?\n1. VLC uses electromagnetic spectrum wavelengths 375 to 780 nm\n2. VLC is known as long – range optical wireless\n3. VLC can transmit large amounts of data faster than Bluetooth\n4. VLC has no electromagnetic interference",
        options: ["1, 2 and 3 only", "1, 2 and 4 only", "1, 3 and 4 only", "2, 3 and 4 only"],
        correctAnswerIndex: 2,
        explanation: "VLC is short-range (like Li-Fi), not long-range (Statement 2 incorrect). It uses visible light (375-780nm), is fast, and has no EM interference."
      },
      {
        questionText: "In the context of recent advances in human reproductive technology. “Pronuclear Transfer” is used for",
        options: [
          "Fertilisation of egg in vitro by the donor sperm",
          "Genetic modification of sperm producing cells",
          "Development of stem cells into functional embryos",
          "Prevention of mitochondrial diseases in offspring"
        ],
        correctAnswerIndex: 3,
        explanation: "Pronuclear transfer is a 'Three-parent baby' technique used to prevent the transmission of mitochondrial diseases."
      }
    ]
  },
  {
    paragraph: "2019 - Science & Technology",
    questions: [
      {
        questionText: "With reference to communications technologies, what is/are the difference/differences between LTE (Long- Term Evolution) and VoLTE (Voice over Long-Term Evolution)?\n1. LTE is commonly marketed as 3G and VoLTE is commonly marketed as advanced 3G.\n2. LTE is data-only technology and VoLTE is voice- only technology.\nSelect the correct answer:",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswerIndex: 3,
        explanation: "Both are incorrect. LTE is 4G. LTE is primarily data, but VoLTE allows Voice over the LTE data network (packet switching), it's not 'voice-only'."
      },
      {
        questionText: "What is Cas9 protein that is often mentioned in the news?",
        options: [
          "A molecular scissors used in targeted gene editing",
          "A biosensor used in the accurate detection of pathogens in patients",
          "A gene that makes plants pest-resistant",
          "A herbicidal substance synthesized in genetically modified crops"
        ],
        correctAnswerIndex: 0,
        explanation: "CRISPR-Cas9 is a gene-editing tool where Cas9 acts as the molecular scissors."
      },
      {
        questionText: "Recently, scientists observed the merger of giant ‘blackholes’ billions of light years away from the Earth. What is the significance of this observation?",
        options: ["‘Higgs boson particles’ were detected.", "‘Gravitational waves’ were detected.", "Possibility of intergalactic space travel through ‘wormhole’ was confirmed.", "It enabled the scientists to understand ‘singularity’."],
        correctAnswerIndex: 1,
        explanation: "LIGO detected Gravitational Waves from the merger of two black holes."
      }
    ]
  },
  {
    paragraph: "2018 - Science & Technology",
    questions: [
      {
        questionText: "In which of the following areas can GPS technology be used?\n1. Mobile phone operations\n2. Banking operations\n3. Controlling the power grids\nSelect the correct answer:",
        options: ["1 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswerIndex: 3,
        explanation: "GPS provides precise timing signals essential for synchronizing mobile networks, banking transactions (ATM logs), and power grids."
      },
      {
        questionText: "“3D printing” has applications in which of the following?\n1. Preparation of confectionery items\n2. Manufacture of bionic ears\n3. Automotive industry\n4. Reconstructive surgeries\n5. Data processing technologies\nSelect the correct answer:",
        options: ["1, 3 and 4 only", "2, 3 and 5 only", "1 and 4 only", "1, 2, 3, 4 and 5"],
        correctAnswerIndex: 3,
        explanation: "3D printing is used in food (chocolate), bio-printing (ears/organs), automotive parts, medical implants, and even 3D printed circuits/sensors (data processing hardware)."
      }
    ]
  },
  {
    paragraph: "2017 & Earlier - Science & Technology",
    questions: [
      {
        questionText: "Organic Light Emitting Diodes (OLEDs) are used to create digital displays in many devices. What are the advantages of OLED displays over Liquid Crystal displays?\n1. OLED displays can be fabricated on flexible plastic\n2. Roll-up displays embedded in clothing can be made using OLEDs.\n3. Transparent displays are possible using OLEDs.\nSelect the correct answer:",
        options: ["1 and 3 only", "2 only", "1, 2 and 3", "None of the above statements is correct"],
        correctAnswerIndex: 2,
        explanation: "OLEDs are self-emissive and can be flexible, rollable, and transparent, unlike LCDs which require a backlight."
      },
      {
        questionText: "With reference to ‘LiFi’, recently in the news, which of the following statements is/are correct?\n1. It uses light as the medium for high-speed data transmission.\n2. It is a wireless technology and is several times faster than ‘WiFi’.\nSelect the correct answer:",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswerIndex: 2,
        explanation: "LiFi uses visible light communication (VLC) and is theoretically much faster than radio-frequency based WiFi."
      },
      {
        questionText: "With reference to ‘Near Field Communication (NFC) Technology’, which of the following statements is/ are correct?\n1. It is a contactless communication technology that uses electromagnetic radio fields.\n2. NFC is designed for use by devices which can be at a distance of even a metre from each other.\n3. NFC can use encryption when sending sensitive data.\nSelect the correct answer:",
        options: ["1 and 2 only", "3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswerIndex: 2,
        explanation: "NFC is a short-range technology (touch or a few cm), not a metre (Statement 2 incorrect). It uses radio fields and supports encryption."
      }
    ]
  }
];

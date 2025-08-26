
import { GoogleGenAI, Type } from "@google/genai";
import { Quiz } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const quizSchema = {
    type: Type.ARRAY,
    description: "An array of quiz sections. Each section can optionally have a paragraph.",
    items: {
      type: Type.OBJECT,
      properties: {
        paragraph: {
          type: Type.STRING,
          description: "An optional paragraph that the following questions are about. If there is no paragraph for a set of questions, omit this field."
        },
        questions: {
          type: Type.ARRAY,
          description: "A list of questions, either standalone or related to the paragraph.",
          items: {
            type: Type.OBJECT,
            properties: {
              questionText: {
                type: Type.STRING,
                description: "The full text of the question.",
              },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "An array of strings, where each string is a multiple-choice option.",
              },
              correctAnswerIndex: {
                type: Type.INTEGER,
                description: "The 0-based index of the correct answer in the 'options' array.",
              },
            },
            required: ["questionText", "options", "correctAnswerIndex"],
          }
        }
      },
      required: ["questions"]
    }
  };


export const parseQuizFromText = async (text: string): Promise<Quiz | null> => {
  const prompt = `
    You are an expert at parsing text and converting it into structured data.
    Analyze the following text, which contains a list of multiple-choice questions and an answer key at the end.
    
    If you encounter a reading comprehension passage or paragraph followed by multiple questions, group them. 
    The output for such a case should be a single JSON object in the main array. This object will have a 'paragraph' key with the passage text, and a 'questions' key with an array of the question objects related to it.
    For questions that are not related to a paragraph, create a section object that only contains the 'questions' array.

    Extract each question, its options, and identify the correct answer from the answer key.
    The options might be labeled with A), B), C), D) or 1., 2., 3., 4. etc. Please strip these labels from the option text.
    The answer key might be in various formats like "1. A, 2. C" or "Answers: 1-B, 2-D".
    Your task is to convert this into a JSON array of question section objects.
    
    Here is the text to parse:
    ---
    ${text}
    ---
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: quizSchema,
      },
    });

    const jsonString = response.text.trim();
    if (!jsonString) {
      throw new Error("AI returned an empty response.");
    }

    const parsedData = JSON.parse(jsonString);
    
    // Validation for the new QuizSection[] structure
    if (Array.isArray(parsedData) && parsedData.every(section => 
        (typeof section.paragraph === 'string' || typeof section.paragraph === 'undefined') &&
        Array.isArray(section.questions) &&
        section.questions.every((q: any) => 
            typeof q.questionText === 'string' &&
            Array.isArray(q.options) &&
            typeof q.correctAnswerIndex === 'number'
        )
    )) {
        return parsedData as Quiz;
    } else {
        throw new Error("The parsed JSON does not match the expected quiz format.");
    }

  } catch (error) {
    console.error("Error parsing quiz with Gemini:", error);
    let errorMessage = "An unknown error occurred while communicating with the AI.";
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    throw new Error(`AI processing failed: ${errorMessage}`);
  }
};


import { GoogleGenAI, Type } from "@google/genai";
import { Quiz } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const quizSchema = {
    type: Type.ARRAY,
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
    },
};


export const parseQuizFromText = async (text: string): Promise<Quiz | null> => {
  const prompt = `
    You are an expert at parsing text and converting it into structured data.
    Analyze the following text, which contains a list of multiple-choice questions and an answer key at the end.
    Extract each question, its options, and identify the correct answer from the answer key.
    The options might be labeled with A), B), C), D) or 1., 2., 3., 4. etc. Please strip these labels from the option text.
    The answer key might be in various formats like "1. A, 2. C" or "Answers: 1-B, 2-D".
    Your task is to convert this into a JSON array of question objects.
    
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
    
    // Basic validation of the parsed data structure
    if (Array.isArray(parsedData) && parsedData.every(q => 
        typeof q.questionText === 'string' &&
        Array.isArray(q.options) &&
        typeof q.correctAnswerIndex === 'number'
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

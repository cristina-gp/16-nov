import Groq from "groq-sdk";
import express from "expres";
import dotenv from 'dotenv';

dotenv.config();

import Router from './src/routes/user.route.js';

const app = express();
api.use(express.json());
const PORT = process.env.PORT || 3000;


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "openai/gpt-oss-20b",
  });
}

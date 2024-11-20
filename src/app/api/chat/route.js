import { streamText, convertToCoreMessages } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: process.env.API_KEY,
});

export const maxDuration = 30;

export async function POST(req) {
    const { messages } = await req.json();
    let result = await streamText({
      model: google("gemini-1.5-flash"), 
      messages: convertToCoreMessages(messages),
      system: "You are an AI assistant, you need to response how to make a good format for poem and its steps.if any other topic asked just say i do not have such information.",

    })
    return result.toDataStreamResponse();
  } 


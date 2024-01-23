import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
    temperature: 0.5,
    openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
    modelName: "gpt-3.5-turbo",
})

export const getAIResponse= async (message: string) => {
    try {
        const response = await model.invoke(message);
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error invoking model:', error);
        throw error; // re-throw the error if you want it to propagate
    }
}
import { config } from 'dotenv';
import Configuration, { OpenAI } from 'openai';

config();

const openai = new OpenAI({
  apiKey: process.env.KEY,
});

const variableInstruction =
  'give me a melody good for a neurofunk intro in A minor key with a very exotic rhythm pattern.';

const constantInstruction = `Create a JSON object with 3 a keys. "notes", "pattern", "description". For notes and pattern, add notes and rhythm based on the Scribbletune pattern language . The description should be a paragraph on why have you decided to compose it this way. Now here are the instructions: `;

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: `${constantInstruction} ${variableInstruction}` }],
    response_format: { type: 'json_object' },
    model: 'gpt-3.5-turbo',
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();

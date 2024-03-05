import { config } from 'dotenv';
import Configuration, { OpenAI } from 'openai';

config();

const openai = new OpenAI({
  apiKey: process.env.KEY,
});

const variableInstruction = 'create a music like The Prodigy, but with a more chill vibe.';

const constantInstruction = `Create a JSON object with 2 a keys. "midi" and "description". The midi should be a music based on instructions i will provide and it should follow this format, but not copy it. Provide your own values for pitch, start_time etc: {
	"notes" : [ 		{
			"pitch" : 53,
			"start_time" : 0,
			"duration" : 4,
			"velocity" : 100,
			"probability" : 1,
			"velocity_deviation" : 1,
			"release_velocity" : 64,
			"mute" : 0
		}
, 		{
			"pitch" : 57,
			"start_time" : 0,
			"duration" : 4,
			"velocity" : 100,
			"probability" : 1,
			"velocity_deviation" : 1,
			"release_velocity" : 64,
			"mute" : 0
		}
, 		{
			"pitch" : 60,
			"start_time" : 0,
			"duration" : 4,
			"velocity" : 100,
			"probability" : 1,
			"velocity_deviation" : 1,
			"release_velocity" : 64,
			"mute" : 0
		}
, 		{
			"pitch" : 55,
			"start_time" : 4,
			"duration" : 4,
			"velocity" : 100,
			"probability" : 1,
			"velocity_deviation" : 1,
			"release_velocity" : 64,
			"mute" : 0
		}
, 		{
			"pitch" : 59,
			"start_time" : 4,
			"duration" : 4,
			"velocity" : 100,
			"probability" : 1,
			"velocity_deviation" : 1,
			"release_velocity" : 64,
			"mute" : 0
		}
, 		{
			"pitch" : 62,
			"start_time" : 4,
			"duration" : 4,
			"velocity" : 100,
			"probability" : 1,
			"velocity_deviation" : 1,
			"release_velocity" : 64,
			"mute" : 0
		}
, 		{
			"pitch" : 52,
			"start_time" : 8,
			"duration" : 4,
			"velocity" : 100,
			"probability" : 1,
			"velocity_deviation" : 1,
			"release_velocity" : 64,
			"mute" : 0
		}
, 		{
			"pitch" : 55,
			"start_time" : 8,
			"duration" : 4,
			"velocity" : 100,
			"probability" : 1,
			"velocity_deviation" : 1,
			"release_velocity" : 64,
			"mute" : 0
		}
, 		{
			"pitch" : 59,
			"start_time" : 8,
			"duration" : 4,
			"velocity" : 100,
			"probability" : 1,
			"velocity_deviation" : 1,
			"release_velocity" : 64,
			"mute" : 0
		}
, 		{
			"pitch" : 48,
			"start_time" : 12,
			"duration" : 4,
			"velocity" : 100,
			"probability" : 1,
			"velocity_deviation" : 1,
			"release_velocity" : 64,
			"mute" : 0
		}
, 		{
			"pitch" : 52,
			"start_time" : 12,
			"duration" : 4,
			"velocity" : 100,
			"probability" : 1,
			"velocity_deviation" : 1,
			"release_velocity" : 64,
			"mute" : 0
		}
, 		{
			"pitch" : 55,
			"start_time" : 12,
			"duration" : 4,
			"velocity" : 100,
			"probability" : 1,
			"velocity_deviation" : 1,
			"release_velocity" : 64,
			"mute" : 0
		}
 ],
	"totalDuration" : 16
}
. The description should be a paragraph on why have you decided to compose it this way. Now here are the instructions: `;

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: `${constantInstruction} ${variableInstruction}` }],
    response_format: { type: 'json_object' },
    model: 'gpt-3.5-turbo',
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();

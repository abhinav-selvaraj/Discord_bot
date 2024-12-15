import dotenv from 'dotenv';
dotenv.config();
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

import OpenAI from "openai";

const openai = new OpenAI({
    organization: "org-vCXxvndF2OuaUEuZtSPZ94JE",
    project: "proj_TKuKmNGGhEDe3kBPUpsXUS1N",
    apiKey: process.env.OPENAI_API
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async(msg)=> {
  if(msg.author.bot) return
  if(!msg.mentions.has(client.user)) return
  msg.content = msg.content.replace(/<@\d+>/g, "")
  //let response = await msg.reply("Generating response...")

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    prompt: msg.content,
    max_tokens: 50,
    user: msg.author.id.toString(),
    stream: true,
});
for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || "");
}

//response.edit(completion.data.choices[0].text)


})

client.login(process.env.DISCORD_API);
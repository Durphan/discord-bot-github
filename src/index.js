import { Client, GatewayIntentBits } from 'discord.js';
import { config } from './config.js';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.login(config.discord_token);

client.on('ready', () => {
  console.log('el bot esta funcionando');
});

client.on('messageCreate', message => {
  console.log('el usuario ' + message.author + ' escribio ' + message.content);
});

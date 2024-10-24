import dotenv from 'dotenv';
dotenv.config({ path: ['./.env'] });

export const config = {
  discord_token: process.env.DISCORD_TOKEN,
  prefix: '!',
};

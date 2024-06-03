import { createClient } from 'redis';

export const client = createClient();

const connectRedis = async () => {
  client.on('error', err => console.log('Redis Client Error', err));
  await client.connect();
};

connectRedis();
import { MongoClient } from 'mongodb';

const mongodbURI = process.env.NEXT_PUBLIC_MONGODB_URI;

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(mongodbURI);
  return client;
};

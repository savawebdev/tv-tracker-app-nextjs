import { MongoClient } from 'mongodb';

const mongodbURI = process.env.MONGODB_URI;

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(mongodbURI);
  return client;
};

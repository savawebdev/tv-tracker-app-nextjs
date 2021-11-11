import { connectToDatabase } from '../../../lib/db';
import { getSession } from 'next-auth/client';

const handler = async (req, res) => {
  try {
    const session = await getSession({ req });

    if (!session) {
      res.status(401).json({ message: 'You need to be logged in!' });
      return;
    }

    if (req.method !== 'GET') {
      res.status(422).json({ message: 'Invalid request!' });
      return;
    }

    const client = await connectToDatabase();
    const collection = client.db('users').collection('users');
    const user = await collection.findOne({ email: session.user.email });

    client.close();
    res
      .status(200)
      .json({ shows: user.shows || [], message: 'Shows fetched!' });
  } catch (error) {
    console.log(error);
  }
};

export default handler;

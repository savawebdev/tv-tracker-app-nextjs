import { connectToDatabase } from '../../../lib/db';
import { getSession } from 'next-auth/react';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

const handler = async (req, res) => {
  try {
    const session = await getSession({ req });

    if (!session) {
      res.status(401).json({ message: 'You need to be logged in!' });
      return;
    }

    if (req.method !== 'PUT') {
      res.status(422).json({ message: 'Invalid request!' });
      return;
    }

    const { updatedShows } = req.body;

    const client = await connectToDatabase();
    const collection = client.db('users').collection('users');

    const result = await collection.updateOne(
      { email: session.user.email },
      { $set: { shows: updatedShows } }
    );

    client.close();
    res.status(200).json({ message: 'Show updated!' });
  } catch (error) {
    console.log(error);
  }
};

export default handler;

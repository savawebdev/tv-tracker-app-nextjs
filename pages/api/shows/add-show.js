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

    if (req.method !== 'POST') {
      res.status(422).json({ message: 'Invalid request!' });
      return;
    }

    const { show } = req.body;

    const client = await connectToDatabase();
    const collection = client.db('users').collection('users');
    const user = await collection.findOne({ email: session.user.email });

    if (!user.shows) {
      const result = await collection.updateMany(
        {
          email: session.user.email,
        },
        { $set: { shows: [show] } }
      );
      client.close();
      res.status(200).json({ message: 'Show added!' });
      return;
    }

    const existingShow = user.shows.find((s) => s.id === show.id);

    if (existingShow) {
      res.status(409).json({ message: 'Show already added' });
      return;
    }

    const result = await collection.updateMany(
      {
        email: session.user.email,
      },
      { $set: { shows: [...user.shows, show] } }
    );

    client.close();
    res.status(200).json({ message: 'Show added!' });
  } catch (error) {
    console.log(error);
  }
};

export default handler;

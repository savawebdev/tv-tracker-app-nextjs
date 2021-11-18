import { connectToDatabase } from '../../../lib/db';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  try {
    const session = await getSession({ req });

    if (!session) {
      res.status(401).json({ message: 'You need to be logged in!' });
      return;
    }

    if (req.method !== 'DELETE') {
      res.status(422).json({ message: 'Invalid request!' });
      return;
    }

    const { id } = req.body;
    const client = await connectToDatabase();
    const collection = client.db('users').collection('users');
    const user = await collection.findOne({ email: session.user.email });
    const userShows = user.shows;

    const result = await collection.updateMany(
      { email: session.user.email },
      { $set: { shows: userShows.filter((show) => show.id !== id) } }
    );

    client.close();
    res.status(200).json({ message: 'Show deleted!' });
  } catch (error) {
    console.log(error);
  }
};

export default handler;

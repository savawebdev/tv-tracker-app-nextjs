import { connectToDatabase } from '../../../lib/db';
import { hashPassword } from '../../../lib/auth';
import { v4 as uuidv4 } from 'uuid';

const handler = async (req, res) => {
  try {
    if (!req.method === 'POST') {
      res.status(422).json({ message: 'Invalid request!' });
      return;
    }

    const { email, password } = req.body;

    const hashedPassword = hashPassword(password);

    const client = await connectToDatabase();
    const usersCollection = client.db('users').collection('users');
    const result = await usersCollection.insertOne({
      id: uuidv4(),
      email,
      password: hashedPassword,
    });

    client.close();

    res.status(201).json({ message: 'User registered!' });
  } catch (error) {
    console.log(error);
  }
};

export default handler;

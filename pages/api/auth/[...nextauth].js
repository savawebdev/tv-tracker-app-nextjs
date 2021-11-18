import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase } from '../../../lib/db';
import { verifyPassword } from '../../../lib/auth';

export default NextAuth({
  session: {
    jwt: true,
  },
  jwt: {
    signingKey: { kty: 'oct', kid: '--', alg: 'HS256', k: '--' },
    verificationOptions: {
      algorithms: ['HS256'],
    },
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        const client = await connectToDatabase();
        const usersCollection = client.db('users').collection('users');
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Invalid credentials');
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
});

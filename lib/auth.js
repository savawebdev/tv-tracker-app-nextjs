import bcrypt from 'bcrypt';

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const verifyPassword = async (password, hashedPassword) => {
  const isValid = bcrypt.compare(password, hashedPassword);
  return isValid;
};

export const registerUser = async (email, password) => {
  const result = await fetch('/api/auth/register-user', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await result.json();
  console.log(data);
};

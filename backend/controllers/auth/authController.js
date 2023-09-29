import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import { prisma } from '../../config/db.js';
import { generateToken, verifyToken } from '../../utils/jwtUtils.js';
import { Prisma } from '@prisma/client';

const registerUser = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(500).json('Body fields cannot be empty.');
  }
  try {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const { name, email, password, isNGO } = req.body;

    const isRegisteredByNGO = isNGO ? true : false;
    // Hash the password before storing it in the database

    const hashedPassword = bcrypt.hashSync(password, 10);

    const createdUser = await prisma.user.create({
      data: {
        email: email,
        name: name,
        hashed_password: hashedPassword,
        is_NGO: isRegisteredByNGO,
      },
    });

    if (!createdUser)
      return res
        .status(500)
        .json({ message: 'Cannot sign up right now! Try later!' });

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (error.code === 'P2002') {
        return res.status(500).json('A user with this email already exists!');
      }
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

const loginUser = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(500).json('Body fields cannot be empty.');
  }
  try {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const { email, password } = req.body;

    let id,
      hash,
      role = null;

    try {
      let { id, hashed_password, role } = await prisma.user.findUnique({
        where: {
          email,
        },
        select: {
          id: true,
          hashed_password: true,
          role: true,
        },
      });
      id = id;
      hash = hashed_password;
      role = role;
    } catch (error) {
      console.log(error)
      return res
        .status(500)
        .send({ success: false, error: 'no such user exists' });
    }

    // compare the hashPassword agains newly entered password
    const verifyPassword = bcrypt.compareSync(password, hash);

    if (!verifyPassword) {
      return res
        .status(401)
        .send({ success: false, error: 'Invalid credentials!' });
    }

    const token = generateToken(id, role, email);

    return res.status(200).json({ success: true, token: token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export {
  registerUser,
  loginUser
}
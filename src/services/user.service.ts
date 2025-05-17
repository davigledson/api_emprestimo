import prisma from '../config/prisma';
import bcrypt from 'bcrypt';

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  role: 'STUDENT' | 'TECHNICIAN';
}

const createUser = async (data: CreateUserDTO) => {
  const existing = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (existing) throw new Error('Email já cadastrado');

  const hashedPassword = await bcrypt.hash(data.password, 10);

  return await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role,
    }
  });
};

export default {
  createUser,
};
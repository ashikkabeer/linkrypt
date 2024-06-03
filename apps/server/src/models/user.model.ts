import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface User {
  id: number;
  email: string;
  password: string;
  username: string;
}
export default {
  create: async (data: User) => {
    return prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        username: data.username,
      },
    });
  },

  get: async (email: string) => {
    return prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  },

  delete: async (id: number) => {
    return prisma.user.delete({
      where: {
        id: id,
      },
    });
  },

};
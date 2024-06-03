import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export interface Workspace {
  id?: number;
  name: string;
  userId: number;
  createdAt?: Date;
  updatedAt?: Date;
}
export default {
  create: async (data: Workspace) => {
    return prisma.workspace.create({
      data: {
        name: data.name,
        userId: data.userId,
      },
    });
  },
  get: async (id: number) => {
    return prisma.workspace.findUnique({
      where: {
        id: id,
      },
    });
  }, 

  getAll: async (userId: number) => {
    return prisma.workspace.findMany({
      where: {
        userId: userId,
      },
    });
  },

  update: async (id: number, data: Workspace) => {
    return prisma.workspace.update({
      where: {
        id: id,
      },
      data: {
        name: data.name,
      },
    });
  },

  delete: async (id: number) => {
    return prisma.workspace.delete({
      where: {
        id: id,
      },
    });
  },
};
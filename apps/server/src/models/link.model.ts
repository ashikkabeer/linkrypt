import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export interface Link {
  id?: number;
  title: string;
  url: string;
  workspaceId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default {
  create: async (data: Link) => {
    return prisma.link.create({
      data: {
        title: data.title,
        url: data.url,
        workspaceId: data.workspaceId,
      },
    });
  },
  get: async (id: number) => {
    return prisma.link.findUnique({
      where: {
        id: id,
      },
    });
  }, 

  getAll: async (workspaceId: number) => {
    return prisma.link.findMany({
      where: {
        workspaceId: workspaceId,
      },
    });
  },

  update: async (id: number, data: Link) => {
    return prisma.link.update({
      where: {
        id: id,
      },
      data: {
        title: data.title,
        url: data.url,
      },
    });
  },

  delete: async (id: number) => {
    return prisma.link.delete({
      where: {
        id: id,
      },
    });
  },
};
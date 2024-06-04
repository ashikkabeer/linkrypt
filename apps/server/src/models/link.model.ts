import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export interface Link {
  id: string;
  title: string;
  url: string;
  workspaceId: string;
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
  get: async (id: string) => {
    return prisma.link.findUnique({
      where: {
        id: id,
      },
    });
  }, 

  getAll: async (workspaceId: string) => {
    return prisma.link.findMany({
      where: {
        workspaceId: workspaceId,
      },
    });
  },

  update: async (id: string, data: Link) => {
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

  delete: async (id: string) => {
    return prisma.link.delete({
      where: {
        id: id,
      },
    });
  },
};
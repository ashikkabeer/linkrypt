import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { Link } from './link.model';


export interface Workspace {
  id?: string;
  name: string;
  userId: string;
  links: Link[];
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
  get: async (id: string) => {
    return prisma.workspace.findUnique({
      where: {
        id: id,
      },
    });
  }, 

  getAll: async (userId: string) => {
    return prisma.workspace.findMany({
      where: {
        userId: userId,
      },
    });
  },

  update: async (id: string, data: Workspace) => {
    return prisma.workspace.update({
      where: {
        id: id,
      },
      data: {
        name: data.name,
      },
    });
  },
  addUser: async (id: string, data: Workspace) => {
    // return prisma.workspace.update({
    //   where: {
    //     id: id,
    //   },
    //   data: {
    //     users: {
    //       connect: {
    //         id: data.userId,
    //       },
    //     },
    //   },
    // });
  },
  delete: async (id: string) => {
    return prisma.workspace.delete({
      where: {
        id: id,
      },
    });
  },
};
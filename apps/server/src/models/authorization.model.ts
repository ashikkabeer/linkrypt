import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export interface Authorization {
  id?: string;
  userId: string;
  workspaceId: string;
  email:string;
  createdAt?: Date;
  updatedAt?: Date;
}

export default {
  create: async (data: Authorization) => {
    return prisma.authorization.create({
      data: {
        userId: data.userId,
        workspaceId: data.workspaceId,
        email:data.email,
      },
    });
  },
  addUser: async (workspaceId: string, userId: string, email:string) => {
    return prisma.authorization.create({
      data: {
        userId: userId,
        workspaceId: workspaceId,
        email:email,
      },
    });
  },

  getAuthorizedUsers: async (id: string) => {
    return prisma.authorization.findMany({
      where: {
        workspaceId: id,
      },
    });
  },
};
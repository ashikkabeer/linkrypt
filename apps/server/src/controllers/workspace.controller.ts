import { Request, Response } from 'express';
import WorkspaceService from '../services/workspace.service';

export default {
  create: async (req:Request, res:Response) => {
    const userId = res.locals.payload.id;
    console.log(userId);
    const data = await WorkspaceService.create(userId, req.body);
    return res.status(200).send(data);
  },
  getAll: async (req:Request, res:Response) => {
    const userId = res.locals.payload.id;
    const data = await WorkspaceService.getAll(userId);
    return res.status(200).send(data);
  },
  getInfo: async (req:Request, res:Response) => {
    const workspaceId = req.params.id;
    const data = await WorkspaceService.get(workspaceId);
    return res.status(200).send(data);
  },

  update: async (req:Request, res:Response) => {
    const workspaceId = req.params.id;
    const data = req.body;
    const response = await WorkspaceService.update(workspaceId, data);
    return res.status(200).send(response);
  },
  addUser: async (req:Request, res:Response) => {
    const workspaceId = req.params.id;
    const data = req.body;
    const response = await WorkspaceService.addUser(workspaceId, data);
    return res.status(200).send(response);
  },

  delete: async (req:Request, res:Response) => {
    const workspaceId = req.params.id;
    const response = await WorkspaceService.delete(workspaceId);
    return res.status(200).send(response);
  },
};
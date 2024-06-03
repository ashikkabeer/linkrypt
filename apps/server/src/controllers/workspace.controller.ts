import { Request, Response } from 'express';
import WorkspaceService from '../services/workspace.service';

export default {
  create: async (req:Request, res:Response) => {
    // get userId from token
    // get user id
    // create workspace
    const data = await WorkspaceService.create(req.body);
    res.status(200).send(data);
  },

  read: async (req:Request, res:Response) => {
    const workspaceId = parseInt(req.params.id);
    const data = await WorkspaceService.get(workspaceId);
    res.status(200).send(data)
  },

  update: async (req:Request, res:Response) => {
    const workspaceId = parseInt(req.params.id);
    const data = req.body;
    const response = await WorkspaceService.update(workspaceId, data);
    res.status(200).send(response)
  },

  delete: async (req:Request, res:Response) => {
    res.send('Create workspace');
  },
};
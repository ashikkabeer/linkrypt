import { Request, Response } from 'express';
import LinkService from '../services/link.service';
export default {
  create: async (req:Request, res:Response) => {
    const response = await LinkService.create(req.body);
    return res.status(200).send(response);
  },

  get: async (req:Request, res:Response) => {
    const workspaceId = parseInt(req.params.id)
    const response = await LinkService.get(workspaceId);
    return res.status(200).send(response);
  },

  update: async (req:Request, res:Response) => {
    const linkId = parseInt(req.params.id);
    const response = await LinkService.update(linkId,req.body.data);
    return res.status(200).send(response);
  },

  delete: async (req:Request, res:Response) => {
    const linkId = parseInt(req.params.id);
    const response = await LinkService.delete(linkId);
    return res.status(200).send(response);
  },
};
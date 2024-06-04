import { Link } from '../models/link.model';
import linkModel from '../models/link.model';

export default {
  create: async (workspaceId:string, data:Link) => {
    data.workspaceId = workspaceId;
    const response = await linkModel.create(data);
    return response;
  },
  get: async (id: string) => {
    const response = await linkModel.getAll(id);
    return response;
  },
  getAll: async (workspaceId: string) => {
    const response = await linkModel.getAll(workspaceId);
    return response;
  },
  update: async (id:string, data:Link) => {
    const response = await linkModel.update(id, data);
    return response;
  },
  delete: async (id:string) => {
    const response = await linkModel.delete(id);
    return response;
  },

};
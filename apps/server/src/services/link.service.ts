import { Link } from '../models/link.model';
import linkModel from '../models/link.model';

export default {
  create: async (data:Link) => {
    const response = await linkModel.create(data);
    return response;
  },
  get: async (id: number) => {
    const response = await linkModel.get(id);
    return response;
  },
  getAll: async (workspaceId: number) => {
    const response = await linkModel.getAll(workspaceId);
    return response;
  },
  update: async (id:number, data:Link) => {
    const response = await linkModel.update(id,data);
    return response;
  },
  delete: async (id:number) => {
    const response = await linkModel.delete(id);
    return response;
  },

}
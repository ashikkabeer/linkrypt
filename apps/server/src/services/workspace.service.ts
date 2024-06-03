import WorkspaceModel from '../models/workspace.model';
import { Workspace } from '../models/workspace.model';
export default {
  create: async (data: Workspace) => {
    const response = await WorkspaceModel.create(data);
    return response;
  },

  get: async (id:number) => {
    const response = await WorkspaceModel.get(id);
    return response;
  },

  getAll: async (userId:number) => {
    const response = await WorkspaceModel.getAll(userId);
    return response;
  },

  update: async (id:number, data:Workspace) => {
    const response = await WorkspaceModel.update(id, data);
    return response;
  },

  delete: async (id:number) => {
    const response = await WorkspaceModel.delete(id);

    return response;
  },
}
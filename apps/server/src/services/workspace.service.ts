import WorkspaceModel from '../models/workspace.model';
import { Workspace } from '../models/workspace.model';
export default {
  create: async (userId:string, data: Workspace) => {
    data.userId = userId;
    const response = await WorkspaceModel.create(data);
    return response;
  },

  get: async (id:string) => {
    const response = await WorkspaceModel.get(id);
    return response;
  },

  getAll: async (userId:string) => {
    const response = await WorkspaceModel.getAll(userId);
    return response;
  },

  update: async (id:string, data:Workspace) => {
    const response = await WorkspaceModel.update(id, data);
    return response;
  },
  addUser: async (id:string, data:Workspace) => {
    const response = await WorkspaceModel.addUser(id, data);
    return response;
  },

  delete: async (id:string) => {
    const response = await WorkspaceModel.delete(id);

    return response;
  },
};
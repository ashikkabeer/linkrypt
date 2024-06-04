import WorkspaceModel from '../models/workspace.model';
import { Workspace } from '../models/workspace.model';
import AuthorizationModel from '../models/authorization.model';
import userModel from '../models/user.model';
export default {
  create: async (userId:string, data: Workspace) => {
    data.userId = userId;
    const workspace = await WorkspaceModel.create(data);
    const response = await AuthorizationModel.create({ userId:userId, workspaceId:workspace.id, email:userId });
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
  addUser: async (workspaceId:string, email:string) => {
    
    const user = await userModel.get(email);
    if (!user) {
      return 'User not found';
    }
    const userId = user ? user.id : ' ';
    const response = await AuthorizationModel.addUser(workspaceId, userId, email);
    return response;
  },

  delete: async (id:string) => {
    const response = await WorkspaceModel.delete(id);

    return response;
  },
};
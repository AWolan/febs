import {
  ClientChangeLoadingAction,
  ClientLoadDataAction,
  ProjectChangeLoadingAction,
  ProjectLoadDataAction,
  RoleChangeLoadingAction,
  RoleLoadDataAction,
} from '../interfaces/structure/action.interfaces';
import {
  Client,
  Project,
  Role,
} from '../interfaces/structure/interfaces';
import { StructureActionType } from '../enums/action.enums';
import {
  fetchAllClients,
  fetchAllProjects,
  fetchAllRoles,
} from '../services/structure.service';
import { showError } from './error.actions';

export const clientChangeLoading = (loading: boolean): ClientChangeLoadingAction => ({
  type: StructureActionType.ClientChangeLoading,
  payload: loading,
});

export const clientLoadData = (clients: Client[]): ClientLoadDataAction => ({
  type: StructureActionType.ClientLoadData,
  payload: clients,
});

export const loadClients = (): Function => (dispatch: Function): void => {
  dispatch(clientChangeLoading(true));

  fetchAllClients()
    .then((clients: Client[]) => dispatch(clientLoadData(clients)))
    .catch((error) => dispatch(showError(error)))
    .then(() => dispatch(clientChangeLoading(false)));
};

export const projectChangeLoading = (loading: boolean): ProjectChangeLoadingAction => ({
  type: StructureActionType.ProjectChangeLoading,
  payload: loading,
});

export const projectLoadData = (projects: Project[]): ProjectLoadDataAction => ({
  type: StructureActionType.ProjectLoadData,
  payload: projects,
});

export const loadProjects = (): Function => (dispatch: Function): void => {
  dispatch(projectChangeLoading(true));

  fetchAllProjects()
    .then((projects: Project[]) => dispatch(projectLoadData(projects)))
    .catch((error) => dispatch(showError(error)))
    .then(() => dispatch(projectChangeLoading(false)));
};

export const roleChangeLoading = (loading: boolean): RoleChangeLoadingAction => ({
  type: StructureActionType.RoleChangeLoading,
  payload: loading,
});

export const roleLoadData = (roles: Role[]): RoleLoadDataAction => ({
  type: StructureActionType.RoleLoadData,
  payload: roles,
});

export const loadRoles = (): Function => (dispatch: Function): void => {
  dispatch(roleChangeLoading(true));

  fetchAllRoles()
    .then((roles: Role[]) => dispatch(roleLoadData(roles)))
    .catch((error) => dispatch(showError(error)))
    .then(() => dispatch(roleChangeLoading(false)));
};

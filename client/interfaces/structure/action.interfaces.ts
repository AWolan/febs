import { StructureActionType } from '../../enums/action.enums';
import {
  Client,
  Project,
  Role,
} from './interfaces';

export interface StructureAction {
  type: StructureActionType;
  payload: any;
}

export interface ClientChangeLoadingAction extends StructureAction {
  payload: boolean;
}

export interface ClientLoadDataAction extends StructureAction {
  payload: Client[];
}

export interface ProjectChangeLoadingAction extends StructureAction {
  payload: boolean;
}

export interface ProjectLoadDataAction extends StructureAction {
  payload: Project[];
}

export interface RoleChangeLoadingAction extends StructureAction {
  payload: boolean;
}

export interface RoleLoadDataAction extends StructureAction {
  payload: Role[];
}

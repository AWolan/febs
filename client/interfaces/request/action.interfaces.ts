import { RequestActionType } from '../../enums/action.enums';
import { Request } from './interfaces';

export interface RequestAction {
  type: RequestActionType;
  payload: any;
}

export interface ChangeLoadingAction extends RequestAction {
  payload: boolean;
}

export interface LoadDataAction extends RequestAction {
  payload: Request[];
}


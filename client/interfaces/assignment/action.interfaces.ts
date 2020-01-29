import { AssignmentActionType } from '../../enums/action.enums';
import { Assignment } from './interfaces';
import { Dynamic, Filter } from '../common.interfaces';

export interface AssignmentAction {
  type: AssignmentActionType;
  payload?: any;
}

export interface ChangeLoadingAction extends AssignmentAction {
  payload: boolean;
}

export interface LoadDataAction extends AssignmentAction {
  payload: Assignment[];
}

export interface ChangeFiltersAction extends AssignmentAction {
  payload: Dynamic<Filter[]>;
}

export interface ClearFiltersAction extends AssignmentAction {
}


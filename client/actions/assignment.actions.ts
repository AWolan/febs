import {
  ChangeLoadingAction,
  LoadDataAction,
  ChangeFiltersAction,
  ClearFiltersAction,
} from '../interfaces/assignment/action.interfaces';
import { Assignment } from '../interfaces/assignment/interfaces';
import { AssignmentActionType } from '../enums/action.enums';
import { fetchAllAssignments } from '../services/assignment.service';
import { showError } from './error.actions';
import {
  Dynamic,
  Filter,
} from '../interfaces/common.interfaces';

export const changeLoading = (loading: boolean): ChangeLoadingAction => ({
  type: AssignmentActionType.ChangeLoading,
  payload: loading,
});

export const loadData = (assignments: Assignment[]): LoadDataAction => ({
  type: AssignmentActionType.LoadData,
  payload: assignments,
});

export const loadAssignments = (): Function => (dispatch: Function): void => {
  dispatch(changeLoading(true));

  fetchAllAssignments()
    .then((assigments: Assignment[]): void => dispatch(loadData(assigments)))
    .catch((error) => dispatch(showError(error)))
    .then(() => dispatch(changeLoading(false)));
};

export const changeAssignmentFilters = (filters: Dynamic<Filter[]>): ChangeFiltersAction => ({
  type: AssignmentActionType.ChangeFilters,
  payload: filters,
});

export const clearAssignmentFilters = (): ClearFiltersAction => ({
  type: AssignmentActionType.ClearFilters,
});

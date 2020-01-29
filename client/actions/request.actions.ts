import {
  ChangeLoadingAction,
  LoadDataAction,
} from '../interfaces/request/action.interfaces';
import { Request } from '../interfaces/request/interfaces';
import { RequestActionType } from '../enums/action.enums';
import { fetchAllRequests } from '../services/request.service';
import { showError } from './error.actions';

export const changeLoading = (loading: boolean): ChangeLoadingAction => ({
  type: RequestActionType.ChangeLoading,
  payload: loading,
});

export const loadData = (requests: Request[]): LoadDataAction => ({
  type: RequestActionType.LoadData,
  payload: requests,
});

export const loadRequests = (): Function => (dispatch: Function): void => {
  dispatch(changeLoading(true));
  
  fetchAllRequests()
    .then((requests: Request[]) => dispatch(loadData(requests)))
    .catch((error) => dispatch(showError(error)))
    .then(() => dispatch(changeLoading(false)));
};

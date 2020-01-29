import {
  ChangeLoadingAction,
  LoadDataAction,
} from '../interfaces/event/action.interfaces';
import { Event } from '../interfaces/event/interfaces';
import { EventActionType } from '../enums/action.enums';
import { fetchAllEvents } from '../services/event.service';
import { showError } from './error.actions';

export const changeLoading = (loading: boolean): ChangeLoadingAction => ({
  type: EventActionType.ChangeLoading,
  payload: loading,
});

export const loadData = (events: Event[]): LoadDataAction  => ({
  type: EventActionType.LoadData,
  payload: events,
});

export const loadEvents = (): Function => (dispatch: Function): void => {
  dispatch(changeLoading(true));

  fetchAllEvents()
    .then((response) => dispatch(loadData(response.data)))
    .catch((error) => dispatch(showError(error)))
    .then(() => dispatch(changeLoading(false)));
};

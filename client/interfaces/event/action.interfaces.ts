import { EventActionType } from '../../enums/action.enums';
import { Event } from './interfaces';

export interface EventAction {
  type: EventActionType;
  payload: any;
}

export interface ChangeLoadingAction extends EventAction {
  payload: boolean;
}

export interface LoadDataAction extends EventAction {
  payload: Event[];
}

import { RequestState } from '../interfaces/state.interfaces';
import { RequestAction } from '../interfaces/request/action.interfaces';
import { RequestActionType } from '../enums/action.enums';

const initialState: RequestState = {
  loading: false,
  requests: [],
};

export const requestReducer = (state: RequestState = initialState, action: RequestAction) => {
  switch (action.type) {
    case RequestActionType.ChangeLoading: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case RequestActionType.LoadData: {
      return {
        ...state,
        requests: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

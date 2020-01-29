import { AssignmentState } from '../interfaces/state.interfaces';
import { AssignmentAction } from '../interfaces/assignment/action.interfaces';
import { AssignmentActionType } from '../enums/action.enums';

const initialState: AssignmentState = {
  loading: false,
  assignments: [],
  filters: {},
};

export const assignmentReducer = (state: AssignmentState = initialState, action: AssignmentAction) => {
  switch (action.type) {
    case AssignmentActionType.ChangeLoading: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case AssignmentActionType.LoadData: {
      return {
        ...state,
        assignments: action.payload,
      };
    }
    case AssignmentActionType.ChangeFilters: {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        }
      };
    }
    case AssignmentActionType.ClearFilters: {
      return {
        ...state,
        filters: {},
      };
    }
    default: {
      return state;
    }
  }
}

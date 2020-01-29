import { ErrorState } from '../interfaces/state.interfaces';

const initialState: ErrorState = {};

export const errorReducer = (state: ErrorState = initialState, action: any) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
import { AssetState } from '../interfaces/state.interfaces';
import { AssetAction } from '../interfaces/asset/action.interfaces';
import { AssetActionType } from '../enums/action.enums';

const initialState: AssetState = {
  loading: false,
  assets: [],
  filters: {},
};

export const assetReducer = (state: AssetState = initialState, action: AssetAction) => {
  switch (action.type) {
    case AssetActionType.ChangeLoading: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case AssetActionType.LoadData: {
      return {
        ...state,
        assets: action.payload,
      };
    }
    case AssetActionType.ChangeFilters: {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        }
      };
    }
    case AssetActionType.ClearFilters: {
      return {
        ...state,
        filters: {},
      };
    }
    default: {
      return state;
    }
  }
};

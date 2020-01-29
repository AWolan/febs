import { AssetActionType } from '../../enums/action.enums';
import { Asset } from './interfaces';
import { Dynamic, Filter } from '../common.interfaces';

export interface AssetAction {
  type: AssetActionType;
  payload?: any;
}

export interface ChangeLoadingAction extends AssetAction {
  payload: boolean;
}

export interface LoadDataAction extends AssetAction {
  payload: Asset[];
}

export interface ChangeFiltersAction extends AssetAction {
  payload: Dynamic<Filter[]>;
}

export interface ClearFiltersAction extends AssetAction {
}


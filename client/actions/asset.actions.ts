import * as moment from 'moment';

import {
  ChangeLoadingAction,
  LoadDataAction,
  ChangeFiltersAction,
  ClearFiltersAction,
} from '../interfaces/asset/action.interfaces';
import { Asset } from '../interfaces/asset/interfaces';
import { AssetActionType } from '../enums/action.enums';
import { fetchAllAssets } from '../services/asset.service';
import { showError } from './error.actions';
import {
  Dynamic,
  Filter,
} from '../interfaces/common.interfaces';

export const changeLoading = (loading: boolean): ChangeLoadingAction => ({
  type: AssetActionType.ChangeLoading,
  payload: loading,
});

export const loadData = (assets: Asset[]): LoadDataAction => ({
  type: AssetActionType.LoadData,
  payload: assets,
});

export const loadAssets = (): Function => (dispatch: Function): void => {
  dispatch(changeLoading(true));

  fetchAllAssets()
    .then((assets: Asset[]): void => {
      dispatch(loadData(assets));
    })
    .catch((error) => dispatch(showError(error)))
    .then(() => dispatch(changeLoading(false)));
};

export const changeAssetFilters = (filters: Dynamic<Filter[]>): ChangeFiltersAction => ({
  type: AssetActionType.ChangeFilters,
  payload: filters,
});

export const clearAssetFilters = (): ClearFiltersAction => ({
  type: AssetActionType.ClearFilters,
});

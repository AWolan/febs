import { createSelector } from 'reselect';

import {
  GlobalState,
  AssetState,
} from '../interfaces/state.interfaces';
import {
  Dynamic,
  Filter,
} from '../interfaces/common.interfaces';
import { Asset } from '../interfaces/asset/interfaces';
import { matches } from '../utils/filter.utils';

export const selectAssetState = (state: GlobalState): AssetState => state.asset;

export const selectAllAssets = createSelector(selectAssetState, (state: AssetState): Asset[] => state.assets);

export const selectLoading = createSelector(selectAssetState, (state: AssetState): boolean => state.loading);

export const selectFilters = createSelector(selectAssetState, (state: AssetState): Dynamic<Filter[]> => state.filters);

export const selectFilteredAssets = createSelector([selectAllAssets, selectFilters], (assets: Asset[], filters: Dynamic<Filter[]>) =>
  assets.filter((asset: Asset) => matches(asset, filters)));

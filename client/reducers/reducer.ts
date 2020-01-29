import { combineReducers } from 'redux';

import { assetReducer } from './asset.reducer';
import { assignmentReducer } from './assignment.reducer';
import { errorReducer } from './error.reducer';
import { i18nReducer } from './i18n.reducer';
import { requestReducer } from './request.reducer';
import { structureReducer } from './structure.reducer';

export const reducer = combineReducers({
  asset: assetReducer,
  assignment: assignmentReducer,
	error: errorReducer,
	i18n: i18nReducer,
  request: requestReducer,
  structure: structureReducer,
});

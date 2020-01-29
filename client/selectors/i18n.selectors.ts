import { createSelector } from 'reselect';

import {
	GlobalState,
	I18NState,
} from '../interfaces/state.interfaces';
import {
	Dynamic,
	DynamicObject,
} from '../interfaces/common.interfaces';

export const selectI18NState = (state: GlobalState): I18NState => state.i18n;

export const selectMessagesLoading = createSelector(selectI18NState, (state: I18NState): boolean => state.loading);

export const selectAllMessages = createSelector(selectI18NState, (state: I18NState): Dynamic<DynamicObject<string>> => state.messages);

export const selectSelectedLanguage = createSelector(selectI18NState, (state: I18NState): string => state.selectedLanguage);

export const selectMessages = createSelector([selectAllMessages, selectSelectedLanguage],
	(messages: Dynamic<DynamicObject<string>>, language: string): DynamicObject<string> => messages && language ? messages[language] : {});

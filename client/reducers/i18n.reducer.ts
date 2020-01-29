import { I18NState } from '../interfaces/state.interfaces';
import { I18NAction } from '../interfaces/i18n/action.interfaces';
import { I18NActionType } from '../enums/action.enums';

const initialState: I18NState = {
	loading: false,
	messages: {
		'en': {

		},
	},
	selectedLanguage: 'en',
};

export const i18nReducer = (state: I18NState = initialState, action: I18NAction) => {
	switch (action.type) {
		case I18NActionType.ChangeLoading: {
			return {
				...state,
				loading: action.payload,
			};
		}
		case I18NActionType.LoadData: {
			return {
				...state,
				messages: {
					...state.messages,
					...action.payload,
				},
			};
		}
		case I18NActionType.SelectLanguage: {
			return {
				...state,
				selectedLocale: action.payload,
			};
		}
		default: {
			return state;
		}
	}
}

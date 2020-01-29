import { I18NActionType } from '../../enums/action.enums';

export interface I18NAction {
	type: I18NActionType;
	payload: any;
}
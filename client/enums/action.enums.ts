export enum AssetActionType {
  ChangeLoading = '[ASSET] Change Loading',
  LoadData = '[ASSET] Load Data',
  ChangeFilters = '[ASSET] Change Filters',
  ClearFilters = '[ASSET] Clear Filters',
};

export enum AssignmentActionType {
  ChangeLoading = '[ASSIGNMENT] Change Loading',
  LoadData = '[ASSIGNMENT] Load Data',
  ChangeFilters = '[ASSIGNMENT] Change Filters',
  ClearFilters = '[ASSIGNMENT] Clear Filters',
};

export enum EventActionType {
  ChangeLoading = '[EVENT] Change Loading',
  LoadData = '[EVENT] Load Data',
}

export enum I18NActionType {
	ChangeLoading = '[I18N] Change Loading',
	LoadData = '[I18N] Load Data',
	SelectLanguage = '[I18N] Select Language'
}

export enum RequestActionType {
  ChangeLoading = '[REQUEST] Change Loading',
  LoadData = '[REQUEST] Load Data',
};

export enum StructureActionType {
  ClientChangeLoading = '[STRUCTURE > CLIENT] Change Loading',
  ClientLoadData = '[STRUCTURE > CLIENT] Load Data',
  ProjectChangeLoading = '[STRUCTURE > PROJECT] Change Loading',
  ProjectLoadData = '[STRUCTURE > PROJECT] Load Data',
  RoleChangeLoading = '[STRUCTURE > ROLE] Change Loading',
  RoleLoadData = '[STRUCTURE > ROLE] Load Data',
};

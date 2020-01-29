import { Asset } from './asset/interfaces';
import { Assignment } from './assignment/interfaces';
import { Request } from './request/interfaces';
import {
  Client,
  Project,
  Role,
} from './structure/interfaces';
import {
  DataLoading,
  Filter,
  Dynamic,
  DynamicObject,
} from './common.interfaces';

export interface AssetState {
  loading: boolean;
  assets: Asset[];
  filters: Dynamic<Filter[]>;
}

export interface AssignmentState {
  loading: boolean;
  assignments: Assignment[];
  filters: Dynamic<Filter[]>;
}

export interface ErrorState {

}

export interface I18NState {
	loading: boolean;
	messages: Dynamic<DynamicObject<string>>;
	selectedLanguage: string;
}

export interface RequestState {
  loading: boolean;
  requests: Request[];
}

export interface StructureState {
  clients: DataLoading<Client>;
  projects: DataLoading<Project>;
  roles: DataLoading<Role>;
}

export interface GlobalState {
  asset: AssetState;
  assignment: AssignmentState;
	error: ErrorState;
	i18n: I18NState;
  request: RequestState;
  structure: StructureState;
}

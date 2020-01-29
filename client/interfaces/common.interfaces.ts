import {
  FilterType,
  StringFilterType,
  NumberFilterType,
  ArrayFilterType,
  ObjectFilterType,
  DateFilterType,
} from '../enums/common.enums';
import {
  Moment,
  unitOfTime,
} from 'moment';

export interface Dynamic<T> {
  [key: string]: T;
}

export interface DynamicObject<T> {
	[key: string]: T | DynamicObject<T>;
}

export interface DataLoading<T> {
  loading: boolean;
  data: T;
}

export interface BaseFilter {
  value: any;
  type: FilterType;
  negate: boolean;
}

export interface StringFilter extends BaseFilter {
  value: string;
  type: StringFilterType;
}

export interface NumberFilter extends BaseFilter {
  value: number;
  type: NumberFilterType;
}

export interface DateFilter extends BaseFilter {
  value: Moment;
  type: DateFilterType;
  unit?: unitOfTime.Base;
}

export interface ArrayFilter extends BaseFilter {
  type: ArrayFilterType;
}

export interface ObjectFilter extends BaseFilter {
  value: string | Object;
  type: ObjectFilterType;
}

export type Filter = StringFilter
  | NumberFilter
  | DateFilter
  | ArrayFilter
  | ObjectFilter
  | BaseFilter;

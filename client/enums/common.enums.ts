export enum Status {
  New = 'NEW',
  Ready = 'READY',
  Approved = 'APPROVED',
  Assigned = 'ASSIGNED',
}

export enum StringFilterType {
  StartsWith,
  EndsWith,
  Contains,
  Equals,
  Empty,
}

export enum NumberFilterType {
  GreaterThan,
  GreaterEquals,
  LessThan,
  LessEquals,
  Equals,
  Empty,
}

export enum DateFilterType {
  Before,
  BeforeOrEquals,
  After,
  AfterOrEquals,
  Equals,
  Empty,
}

export enum ArrayFilterType {
  Contains,
  Equals,
  Empty,
}

export enum ObjectFilterType {
  Contains,
  Equals,
}

export enum OtherFilterType {
  Equals,
}

export type FilterType = StringFilterType
  | NumberFilterType
  | DateFilterType
  | ArrayFilterType
  | ObjectFilterType
  | OtherFilterType;

import {
  Dynamic,
  Filter,
  StringFilter,
  NumberFilter,
  ArrayFilter,
  ObjectFilter,
  DateFilter,
} from '../interfaces/common.interfaces';
import {
  StringFilterType,
  NumberFilterType,
  ArrayFilterType,
  ObjectFilterType,
  OtherFilterType,
  DateFilterType,
} from '../enums/common.enums';
import {
  isMoment,
  Moment,
} from 'moment';

export const matches = (data: Object, filters: Dynamic<Filter[]>): boolean =>
  Object.keys(filters)
    .every((field: string): boolean => filters[field].every((filter: Filter) => matchesWithNegation(data[field], filter)));

const matchesWithNegation = (value: any, filter: Filter): boolean => {
  const isMatching = matchesValue(value, filter);
  return filter.negate ? !isMatching : isMatching;
};

const matchesValue = (value: any, filter: Filter): boolean => {
  if (typeof value === 'string') {
    return matchesString(<string>value, <StringFilter>filter);
  } else if (typeof value === 'number') {
    return matchesNumber(<number>value, <NumberFilter>filter);
  } else if (isMoment(value)) {
    return matchesDate(<Moment>value, <DateFilter>filter);
  } else if (Array.isArray(value)) {
    return matchesArray(<any[]>value, <ArrayFilter>filter);
  } else if (typeof value === 'object') {
    return matchesObject(<Object>value, <ObjectFilter>filter);
  } else {
    return matchesOther(value, filter);
  }
};

const matchesString = (value: string, filter: StringFilter): boolean => {
  switch (filter.type) {
    case StringFilterType.StartsWith: {
      return value.startsWith(filter.value);
    }
    case StringFilterType.EndsWith: {
      return value.endsWith(filter.value);
    }
    case StringFilterType.Contains: {
      return value.indexOf(filter.value) !== -1;
    }
    case StringFilterType.Equals: {
      return value === filter.value;
    }
    case StringFilterType.Empty: {
      return value === null || value === '';
    }
    default: {
      return true;
    }
  }
};

const matchesNumber = (value: number, filter: NumberFilter): boolean => {
  switch (filter.type) {
    case NumberFilterType.GreaterThan: {
      return value > filter.value;
    }
    case NumberFilterType.GreaterEquals: {
      return value >= filter.value;
    }
    case NumberFilterType.LessThan: {
      return value < filter.value;
    }
    case NumberFilterType.LessEquals: {
      return value <= filter.value;
    }
    case NumberFilterType.Equals: {
      return value === filter.value;
    }
    case NumberFilterType.Empty: {
      return value === null || value === 0;
    }
    default: {
      return true;
    }
  }
};

const matchesDate = (value: Moment, filter: DateFilter): boolean => {
  switch (filter.type) {
    case DateFilterType.Before: {
      return value.isBefore(filter.value, filter.unit);
    }
    case DateFilterType.BeforeOrEquals: {
      return value.isSameOrBefore(filter.value, filter.unit);
    }
    case DateFilterType.After: {
      return value.isAfter(filter.value, filter.unit);
    }
    case DateFilterType.AfterOrEquals: {
      return value.isSameOrAfter(filter.value, filter.unit);
    }
    case DateFilterType.Equals: {
      return value.isSame(filter.value, filter.unit);
    }
    case DateFilterType.Empty: {
      return value === null;
    }
    default: {
      return true;
    }
  }
};

const matchesArray = (value: any[], filter: ArrayFilter): boolean => {
  switch (filter.type) {
    case ArrayFilterType.Contains: {
      return value.indexOf(filter.value) !== -1;
    }
    case ArrayFilterType.Equals: {
      return value === filter.value;
    }
    case ArrayFilterType.Empty: {
      return value === null || value === [];
    }
    default: {
      return true;
    }
  }
};

const matchesObject = (value: Object, filter: ObjectFilter): boolean => {
  switch (filter.type) {
    case ObjectFilterType.Contains: {
      return value[<string>filter.value];
    }
    case ObjectFilterType.Equals: {
      return value === filter.value;
    }
    default: {
      return true;
    }
  }
};

const matchesOther = (value: any, filter: Filter): boolean => {
  switch (filter.type) {
    case OtherFilterType.Equals: {
      return value === filter.value;
    }
    default: {
      return true;
    }
  }
};

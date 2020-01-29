import { createSelector } from 'reselect';

import {
  GlobalState,
  AssignmentState,
} from '../interfaces/state.interfaces';
import {
  Dynamic,
  Filter,
} from '../interfaces/common.interfaces';
import { Assignment } from '../interfaces/assignment/interfaces';
import { matches } from '../utils/filter.utils';

export const selectAssignmentState = (state: GlobalState): AssignmentState => state.assignment;

export const selectAllAssignments = createSelector(selectAssignmentState, (state: AssignmentState): Assignment[] => state.assignments);

export const selectLoading = createSelector(selectAssignmentState, (state: AssignmentState): boolean => state.loading);

export const selectFilters = createSelector(selectAssignmentState, (state: AssignmentState): Dynamic<Filter[]> => state.filters);

export const selectFilteredAssignments = createSelector([selectAllAssignments, selectFilters], (assignments: Assignment[], filters: Dynamic<Filter[]>) =>
  assignments.filter((assignment: Assignment) => matches(assignment, filters)));

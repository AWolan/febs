import * as React from 'react';
import * as moment from 'moment';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  loadAssets,
  changeAssetFilters,
} from '../actions/asset.actions';
import {
  loadAssignments,
  changeAssignmentFilters,
} from '../actions/assignment.actions';
import { loadEvents } from '../actions/event.actions';
import { loadRequests } from '../actions/request.actions';
import {
  loadClients,
  loadProjects,
  loadRoles,
} from '../actions/structure.actions';
import {
  selectAllAssets,
  selectFilteredAssets,
} from '../selectors/asset.selectors';
import {
  DateFilterType,
  StringFilterType,
  NumberFilterType,
} from '../enums/common.enums';
import {
  selectAllAssignments,
  selectFilteredAssignments,
} from '../selectors/assignment.selectors';
import Filter from '../components/filter/Filter';
import FiltersGroup from '../components/filter/FilterGroup';
import { selectMessages } from '../selectors/i18n.selectors';
import { getMessage } from '../utils/i18n.utils';

export default function Page() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadClients());
    dispatch(loadProjects());
    dispatch(loadRoles());
    dispatch(loadAssets());
    dispatch(loadEvents());
    dispatch(loadRequests());
    dispatch(loadAssignments());

    dispatch(changeAssetFilters({
      ['startDate']: [{
        type: DateFilterType.After,
        value: moment('2017-01-01'),
        negate: false,
        unit: 'day',
      }, {
        type: DateFilterType.Before,
        value: moment('2019-10-01'),
        negate: false,
        unit: 'day',
      }],
      ['surname']: [{
        type: StringFilterType.Contains,
        value: 'siń',
        negate: true,
      }],
    }));

    dispatch(changeAssignmentFilters({
      ['endDate']: [{
        type: DateFilterType.Empty,
        value: null,
        negate: false,
      }],
      ['startDate']: [{
        type: DateFilterType.After,
        value: moment('2019-01-01'),
        negate: false,
        unit: 'day',
      }],
      ['commitment']: [{
        type: NumberFilterType.LessEquals,
        value: 50,
        negate: false,
      }],
    }));
  }, []);

  const allAssets = useSelector(selectAllAssets);
  const assets = useSelector(selectFilteredAssets);
  const allAssignments = useSelector(selectAllAssignments);
	const assignments = useSelector(selectFilteredAssignments);
	const messages = useSelector(selectMessages);

	const defaultFieldLabel = getMessage(messages, '');
	const defaultTypeLabel = getMessage(messages, '');

  console.log(allAssets, assets);
	console.log(allAssignments, assignments);

	const addFilterHandler = () => {
		console.log('add');
	};
	const removeFilterHandler = () => {
		console.log('remove');
	};

	const filters = [
		{

		}
	];

  return (
		<div>
			<FiltersGroup
				filters={filters}
				defaultFieldLabel={defaultFieldLabel}
				defaultTypeLabel={defaultTypeLabel}
				addFilterHandler={addFilterHandler}
				removeFilterHandler={removeFilterHandler} />
		</div>
  );
}

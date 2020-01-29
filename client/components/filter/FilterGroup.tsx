import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Filter from './Filter';
import Button from '../form/Button';

export interface FiltersProps {
	filters: any[];
	defaultFieldLabel: string;
	defaultTypeLabel: string;
	addFilterHandler: Function;
	removeFilterHandler: Function;
}

export default function FiltersGroup(props: FiltersProps) {
	return (
		<section className='filters'>
			<Filter
				className='filter-new'
				defaultFieldLabel={props.defaultFieldLabel}
				defaultTypeLabel={props.defaultTypeLabel}>
				<Button clickHandler={props.addFilterHandler}><FontAwesomeIcon icon="plus-circle" /></Button>
			</Filter>
			{props.filters.map((filter: any) => (
				<Filter
					key={filter.id}
					className='filter'
					defaultFieldLabel={props.defaultFieldLabel}
					defaultTypeLabel={props.defaultTypeLabel}>
					<Button clickHandler={props.removeFilterHandler}><FontAwesomeIcon icon="minus-circle" /></Button>
				</Filter>
			))}
    </section>
  );
}

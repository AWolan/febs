import * as React from 'react';
import { ReactNode } from 'react';

import Selector from '../Selector';
import Input from '../form/Input';

export interface FilterProps {
	className: string;
	key?: string;
	defaultFieldLabel: string;
	defaultTypeLabel: string;
	children?: ReactNode;
}

export default function Filter(props: FilterProps) {
  return (
		<div className={props.className}>
			<Selector
				className='field'
				value=''
				valueKey=''
				labelKey=''
				options={[]}
				defaultOption={{
					value: '',
					label: props.defaultFieldLabel
				}} />
			<Selector
				className='type'
				value=''
				valueKey=''
				labelKey=''
				options={[]}
				defaultOption={{
					value: '',
					label: props.defaultTypeLabel
				}} />
			<Input />
			<div className='actions'>{props.children}</div>
		</div>
  );
}

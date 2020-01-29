import * as React from 'react';

import Selector from '../Selector';

export interface FieldSelectorProps {
	defaultLabel?: string;
}

export default function FieldSelector(props: FieldSelectorProps) {
  return (
		<Selector
			className='field'
			value=''
			valueKey=''
			labelKey=''
			options={[]}
			defaultOption={{
				value: '',
				label: props.defaultLabel
			}} />
  );
}

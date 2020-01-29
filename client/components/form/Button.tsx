import * as React from 'react';
import { ReactNode } from 'react';

export interface ButtonProps {
	clickHandler: Function;
	children?: ReactNode;
}

export default function Button(props: ButtonProps) {
	return (
		<button onClick={props.clickHandler}>{props.children}</button>
	);
};

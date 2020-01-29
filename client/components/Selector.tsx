import * as React from 'react';
import { Dynamic } from '../interfaces/common.interfaces';

export interface DefaultOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  hidden?: boolean;
}

export interface SelectorProps {
  className: string;
  value: string | number;
  valueKey: string;
  labelKey: string;
  options: Dynamic<any>[];
  disabledKey?: string;
  hiddenKey?: string;
  defaultOption?: DefaultOption;
}

export default function Selector(props: SelectorProps) {
  return (
    <select className={props.className} value={props.value}>
      {props.defaultOption && !props.value ? (
        <option value={props.defaultOption.value}
          disabled={props.defaultOption.disabled}
          hidden={props.defaultOption.hidden}>
          {props.defaultOption.label}
        </option>
      ) : null}
      {props.options.map((option: Dynamic<any>) => (
        <option value={option[props.valueKey]}
          disabled={props.disabledKey ? option[props.disabledKey] : false}
          hidden={props.hiddenKey ? option[props.hiddenKey] : false}>
          {option[props.labelKey]}
        </option>
      ))}
    </select>
  );
}

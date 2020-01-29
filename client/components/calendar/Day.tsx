import React from 'react';

import {
  DynamicProps,
  DayData,
} from '../../interfaces/calendar.interfaces';

export default function Day(props: DynamicProps<DayData>) {
  return (
    <>
      {props.data.date.format()}
    </>
  );
}
import React from 'react';

import {
  DynamicProps,
  WeekData,
  DayData,
} from '../../interfaces/calendar.interfaces';
import Day from './Day';

export default function Week(props: DynamicProps<WeekData>) {
  return (
    <>
      {props.data.days.map((day: DayData) => (
        <Day key={day.date.format()}
             data={day} />
      ))}
    </>
  );
}
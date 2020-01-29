import React from 'react';

import {
  DynamicProps,
  CalendarData,
  WeekData,
} from '../../interfaces/calendar.interfaces';
import Week from './Week';

export default function Calendar(props: DynamicProps<CalendarData>) {
  return (
    <>
      {props.data.weeks.map((week: WeekData) => (
        <Week key={week.no.toString()}
              data={week} />
      ))}
    </>
  );
}
// import './index.scss';
import MonthCalendar from './MonthCalendar';
import { Dayjs } from 'dayjs';
import Header from './Header';
import React, { CSSProperties, ReactNode } from 'react';
import cs from 'classnames';

export interface CalendarProps {
  value: Dayjs;
  style?: CSSProperties;
  className?: string | string[];
  dateRender?: (currentDate: Dayjs) => ReactNode;
  dateInnerContent?: (currentDate: Dayjs) => ReactNode;
}

function Calendar(props: CalendarProps) {
  const {style, className} = props;
  const classNames = cs('calendar', className);
  return <div className={classNames} style={style}>
    <Header></Header>
    <MonthCalendar {...props} />
  </div>
}

export default Calendar;
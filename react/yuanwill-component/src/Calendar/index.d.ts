import { Dayjs } from 'dayjs';
import React, { CSSProperties, ReactNode } from 'react';
export interface CalendarProps {
    value: Dayjs;
    style?: CSSProperties;
    className?: string | string[];
    dateRender?: (currentDate: Dayjs) => ReactNode;
    dateInnerContent?: (currentDate: Dayjs) => ReactNode;
}
declare function Calendar(props: CalendarProps): React.JSX.Element;
export default Calendar;

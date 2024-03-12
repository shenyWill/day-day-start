import { useState } from 'react';
import './index.css';

interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void
}
const Calendar: React.FC<CalendarProps> = (props) => {
  const {value = new Date(), onChange} = props;
  const [date, setDate] = useState(new Date(value));

  const handlePreMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };
  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  }
  // 一个星期多少天
  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  }
  
  // 1号是星期几
  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  }

  const renderDays = () => {
    const days = [];
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());
    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
    for(let i = 0; i < firstDay; i++) {
      days.push(<div className='empty' key={'empty-' + i}></div>)
    }
    for(let i = 1; i <= daysCount; i++) {
      const handleChange = onChange?.bind(null, new Date(date.getFullYear(), date.getMonth(), i));
      if (i === date.getDate()) {
        days.push(<div key={i} className='day selected' onClick={handleChange}>{i}</div>)        
      } else {
        days.push(<div key={i} className='day' onClick={handleChange}>{i}</div>)
      }
    }
    return days;
  }
  return <div className="calendar">
      <div className="header">
        <button onClick={handlePreMonth}>&lt;</button>
        <div>{date.getFullYear()} 年 {date.getMonth() + 1} 月</div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDays()}
      </div>
    </div>
}

export default Calendar;
import Calendar from "./Calendar";
import dayjs from 'dayjs';

const Basic: React.FC = () => {
  const now = dayjs();
  return (
    <Calendar value={now} />
  );
};

export default Basic;

import { memo } from 'react';
import parse from 'html-react-parser';

const STATS_DATA = [
  {
    id: 'experience',
    no: '1.5+',
    title: 'Years Full Stack<br />Experience',
  },
  {
    id: 'roles',
    no: '3+',
    title: 'Industry Tech<br />Roles',
  },
  {
    id: 'apis',
    no: '15+',
    title: 'Production APIs<br />& Services',
  },
  {
    id: 'projects',
    no: '10+',
    title: 'Web Apps<br />Shipped',
  },
];

const Stats = () => {
  return (
    <>
      {STATS_DATA.map(({ id, no, title }) => (
        <div className="stats__box" key={id}>
          <h3 className="stats__no">{no}</h3>
          <p className="stats__title">{parse(title)}</p>
        </div>
      ))}
    </>
  );
};

export default memo(Stats);

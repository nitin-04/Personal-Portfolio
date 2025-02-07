
import parse from "html-react-parser"

const Stats = () => {

  const stats = [
    {
      id: 1,
      no: '8+',
      title: 'Completed  <br /> Projects',
    },

    {
      id: 2,
      no: '45+',
      title: 'LeetCode <br /> Questions',
    },
    {
      id: 3,
      no: '10+',
      title: 'Hours <br /> Learning',
    },
    {
      id: 4,
      no: '100+',
      title: 'Resolved <br /> Bugs',
    }

  ];


  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <div className="stats__box" key={index}>
            <h3 className="stats__no">{no}</h3>
            <p className="stats__title">{parse(title)}</p>
          </div>
        )
      })}
    </>
  );
};

export default Stats;

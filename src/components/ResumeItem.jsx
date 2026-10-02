import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const ResumeItem = ({ icon, category, year, title, desc }) => {
  const renderedIcon =
    icon || (category === 'education' ? <FaGraduationCap /> : <FaBriefcase />);

  return (
    <div className="resume__item">
      <div className="resume__icon">{renderedIcon}</div>
      <span className="resume__data">{year}</span>
      <h3 className="resume__subtitle">{parse(title)}</h3>
      <p className="resume__description">{desc}</p>
    </div>
  );
};

ResumeItem.propTypes = {
  icon: PropTypes.node,
  category: PropTypes.string,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ResumeItem;

import { memo } from 'react';
import './experience.css';
import { FaBriefcase } from 'react-icons/fa';
import { EXPERIENCES_DATA } from '../../data/experience';

const Experience = () => {
  return (
    <section className="experience section">
      <h2 className="title">
        WORK <span>EXPERIENCE</span>
      </h2>

      <div className="experience__container">
        {EXPERIENCES_DATA.map((exp) => (
          <article key={exp.id} className="experience__item">
            <div className="experience__icon">
              <FaBriefcase />
            </div>
            <div className="experience__data">
              <h3 className="experience__title">
                {exp.title} <span>{exp.company}</span>
              </h3>
              <span className="experience__year">
                {exp.year} {exp.location ? `| ${exp.location}` : ''}
              </span>
              <ul className="experience__description">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default memo(Experience);

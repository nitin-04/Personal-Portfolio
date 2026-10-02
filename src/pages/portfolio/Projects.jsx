import { useState } from 'react';
import ProjectBox from '../../pages/portfolio/ProtfolioBox';
import './portfolio.css';
import { PROJECTS } from '../../data/projects';

const FILTER_CATEGORIES = ['All', 'Featured', 'Full Stack', 'Mini Projects'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : activeFilter === 'Featured'
      ? PROJECTS.filter((p) => p.featured)
      : activeFilter === 'Full Stack'
      ? PROJECTS.filter((p) => p.category === 'Full Stack')
      : PROJECTS.filter(
          (p) => p.category === 'Mini Projects' || p.category === 'Utilities'
        );

  return (
    <section className="section">
      <h2 className="title">
        MY <span>PROJECTS</span>
      </h2>

      <p className="para">
        {`Here are some of the full-stack applications, interactive tools, and engineering projects I've built. Use the filters below to explore by focus area, or check out the source code and live demos directly.`}
      </p>

      <div className="project__filters" role="tablist" aria-label="Project categories">
        {FILTER_CATEGORIES.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeFilter === category}
            className={`filter__btn ${
              activeFilter === category ? 'active' : ''
            }`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project">
        {filteredProjects.map((project) => (
          <ProjectBox key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

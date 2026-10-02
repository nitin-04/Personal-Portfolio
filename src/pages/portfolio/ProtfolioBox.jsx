import { FaGithub } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';
import PropTypes from 'prop-types';
import { PROJECTS } from '../../data/projects';

const ProjectBox = ({ project, projectPhoto, projectName }) => {
  // Support both new `project` object and legacy `projectName/projectPhoto` props
  const resolvedProject =
    project ||
    PROJECTS.find(
      (p) =>
        p.title.toLowerCase() === (projectName || '').toLowerCase() ||
        p.id.toLowerCase() === (projectName || '').toLowerCase()
    ) || {
      title: projectName || 'Project',
      image: projectPhoto,
      description: '',
      tags: [],
      githubUrl: '',
      demoUrl: '',
      demoLabel: 'Demo',
    };

  const { title, image, description, tags, githubUrl, demoUrl, demoLabel } =
    resolvedProject;

  return (
    <article className="projectBox">
      {image && (
        <img
          className="projectPhoto"
          src={image}
          alt={`${title} project thumbnail`}
          loading="lazy"
        />
      )}
      <div>
        <h3 className="project_name">{title}</h3>
        <p className="projectDesc">{description}</p>

        {tags && tags.length > 0 && (
          <div className="projectTags">
            {tags.map((tag, idx) => (
              <span key={idx} className="projectTag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="projectActions">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="projectbtn"
              aria-label={`View ${title} code on GitHub`}
            >
              <FaGithub /> GitHub
            </a>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="projectbtn"
              aria-label={`View ${title} live demo`}
            >
              <CgFileDocument /> {demoLabel || 'Demo'}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

ProjectBox.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    featured: PropTypes.bool,
    image: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    githubUrl: PropTypes.string,
    demoUrl: PropTypes.string,
    demoLabel: PropTypes.string,
  }),
  projectPhoto: PropTypes.string,
  projectName: PropTypes.string,
};

export default ProjectBox;

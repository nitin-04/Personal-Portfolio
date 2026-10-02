import { FaDownload } from 'react-icons/fa6';

const Resume = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1PmmhS1AxVVZ664P5aTghisT8rmMbcvqC/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="button"
      aria-label="Download Nitin's CV"
    >
      <span className="cv">Download CV</span>
      <span className="button__icon">
        <FaDownload />
      </span>
    </a>
  );
};

export default Resume;

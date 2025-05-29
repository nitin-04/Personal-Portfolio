import "./experience.css";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      icon: <FaBriefcase />,
      year: "Feb 2025 - Present",
      title: "Full Stack Developer Intern",
      company: "Yup Solutions Pvt Ltd",
      description: [
        "Contributed to the development of a dynamic web platform using Next.js, React, Tailwind CSS, and Clerk for authentication.",
        "Developed reusable UI components using Radix UI and integrated complex form handling with React Hook Form and Zod validation.",
        "Designed and implemented scalable RESTful APIs with Express.js, enhancing backend performance and data integrity",
        "Debugged and optimized full-stack solutions, improving system stability and user experience",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
      ],
    },
  ];

  return (
    <section className="experience section">
      <h2 className="title">
        WORK <span>EXPERIENCE</span>
      </h2>

      <div className="experience__container">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience__item">
            <div className="experience__icon">{exp.icon}</div>
            <div className="experience__data">
              <h3 className="experience__title">
                {exp.title} <span>{exp.company}</span>
              </h3>
              <span className="experience__year">{exp.year}</span>
              <ul className="experience__description">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

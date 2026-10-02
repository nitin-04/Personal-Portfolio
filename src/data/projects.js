import annadata from '../assets/annadata.png';
import devdate from '../assets/devdate.jpg';
import astro from '../assets/astro.png';
import drive from '../assets/drive.png';
import share from '../assets/share.png';
import pdfChecker from '../assets/pdfChecker.png';
import snakegame from '../assets/snakegame.png';
import bmi from '../assets/bmi.png';
import bgChanger from '../assets/bg_changer.png';
import colorswitch from '../assets/colorswitch.png';
import ttt from '../assets/ttt.png';
import rps from '../assets/rps.png';

export const PROJECTS = [
  {
    id: 'devdate',
    title: 'DevDate',
    category: 'Full Stack',
    featured: true,
    image: devdate,
    description:
      'Developer networking platform built with the MERN stack enabling developers to connect, collaborate, and exchange project ideas.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/nitin-04/DevDate-web',
    demoUrl:
      'https://drive.google.com/file/d/1_rBRn1nSmUHqfKlvUDjP0GcEqJJ0ikQN/view?usp=sharing',
    demoLabel: 'Video Demo',
  },
  {
    id: 'annadata',
    title: 'Annadata',
    category: 'Full Stack',
    featured: true,
    image: annadata,
    description:
      'Online food delivery platform designed to provide a seamless browsing experience with cart management and order tracking.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/nitin-04/Annadata',
    demoUrl:
      'https://drive.google.com/file/d/1XzUqj_syzqxTD083xRY7mSHtS4kSStd2/view',
    demoLabel: 'Video Demo',
  },
  {
    id: 'drive',
    title: 'Cloud Drive',
    category: 'Full Stack',
    featured: true,
    image: drive,
    description:
      'Cloud-based digital asset and file management app inspired by Google Drive, supporting folder structures, image uploads, and search.',
    tags: ['React', 'Node.js', 'Express', 'Cloud Storage'],
    githubUrl: 'https://github.com/nitin-04/Drive-web',
    demoUrl:
      'https://drive.google.com/file/d/1fG6R1W73O_9pvuc_Cfj5q5J4qLzrl5A_/view?usp=sharing',
    demoLabel: 'Video Demo',
  },
  {
    id: 'astro',
    title: 'Astro Kundli',
    category: 'Frontend',
    featured: true,
    image: astro,
    description:
      'Dynamic astrology platform computing planetary positions from birth data to render Kundli reports and Lagna charts in real-time.',
    tags: ['React', 'JavaScript', 'Algorithms', 'Vercel'],
    githubUrl: 'https://github.com/nitin-04/kundli',
    demoUrl: 'https://kundli-psi.vercel.app',
    demoLabel: 'Live Demo',
  },
  {
    id: 'share',
    title: 'Content Share',
    category: 'Full Stack',
    featured: true,
    image: share,
    description:
      'Collaborative media and document sharing platform enabling users to upload and discover PPT, Video, and PDF resources.',
    tags: ['React', 'Node.js', 'Express', 'REST APIs'],
    githubUrl: 'https://github.com/nitin-04/ContentShare-Web',
    demoUrl:
      'https://drive.google.com/file/d/1pHXnAJ2N-QHpWMwlcY0BMszdLTBU0hKE/view?usp=sharing',
    demoLabel: 'Video Demo',
  },
  {
    id: 'pdf-checker',
    title: 'PDF Checker',
    category: 'Utilities',
    featured: false,
    image: pdfChecker,
    description:
      'Web application allowing users to upload, validate, and extract structured data from PDF files.',
    tags: ['React', 'PDF Parsing', 'Vercel'],
    githubUrl: 'https://github.com/nitin-04/PdfChecker',
    demoUrl: 'https://pdf-checker-ten.vercel.app/',
    demoLabel: 'Live Demo',
  },
  {
    id: 'snakegame',
    title: 'Snake Game',
    category: 'Mini Projects',
    featured: false,
    image: snakegame,
    description:
      'Classic arcade Snake Game with smooth grid canvas physics, collision detection, and score persistence.',
    tags: ['JavaScript', 'HTML5 Canvas'],
    githubUrl: 'https://github.com/nitin-04/snakeGame',
    demoUrl: 'https://snake-game-sg.vercel.app/',
    demoLabel: 'Live Demo',
  },
  {
    id: 'bmi',
    title: 'BMI Calculator',
    category: 'Mini Projects',
    featured: false,
    image: bmi,
    description:
      'Interactive health utility calculating Body Mass Index with categorized wellness indicators.',
    tags: ['JavaScript', 'CSS3'],
    githubUrl: 'https://github.com/nitin-04/bmi',
    demoUrl: 'https://bmi-dusky-omega.vercel.app',
    demoLabel: 'Live Demo',
  },
  {
    id: 'bg-changer',
    title: 'Background Colors',
    category: 'Mini Projects',
    featured: false,
    image: bgChanger,
    description:
      'Dynamic background color generator with asynchronous start/stop timer intervals.',
    tags: ['JavaScript', 'DOM'],
    githubUrl: 'https://github.com/nitin-04/Unlimited-background-colors',
    demoUrl: 'https://unlimited-background-colors.vercel.app/',
    demoLabel: 'Live Demo',
  },
  {
    id: 'color-switch',
    title: 'Color Switcher',
    category: 'Mini Projects',
    featured: false,
    image: colorswitch,
    description:
      'Interactive theme palette switcher with event delegation and dynamic DOM color changes.',
    tags: ['JavaScript', 'DOM'],
    githubUrl: 'https://github.com/nitin-04/color-switch',
    demoUrl: 'https://color-switch-five.vercel.app/',
    demoLabel: 'Live Demo',
  },
  {
    id: 'ttt',
    title: 'Tic Tac Toe',
    category: 'Mini Projects',
    featured: false,
    image: ttt,
    description:
      'Interactive 3x3 Tic Tac Toe game featuring real-time win, loss, and draw detection algorithms.',
    tags: ['JavaScript', 'Game Logic'],
    githubUrl: 'https://github.com/nitin-04/TicTacToe',
    demoUrl: 'https://tic-tac-toe-eight-lovat.vercel.app/',
    demoLabel: 'Live Demo',
  },
  {
    id: 'rps',
    title: 'Rock Paper Scissors',
    category: 'Mini Projects',
    featured: false,
    image: rps,
    description:
      'Single-player Rock Paper Scissors game simulating computer random choices with stateful round tracking.',
    tags: ['JavaScript', 'Game Logic'],
    githubUrl: 'https://github.com/nitin-04/RPS',
    demoUrl: 'https://rps-bice-five.vercel.app/',
    demoLabel: 'Live Demo',
  },
];

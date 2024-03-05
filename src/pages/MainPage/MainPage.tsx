import LeftSide from "../../components/Body/LeftSide";
import { LeftSideProps } from "../../components/Body/LeftSide/LeftSide";
import RightSide from "../../components/Body/RightSide";
import { RightSideProps } from "../../components/Body/RightSide/RightSide";
import Header from "../../components/Header";
import { HeaderProps } from "../../components/Header/Header";
import "./style.scss";

export default function MainPage() {
  const courses = [
    {
      title: "HTML5 and CSS3 part 1: The first web page",
      description: "Jun 2021",
    },
    {
      title: "HTML5 and CSS3 part 2: Positioning, lists and navigation",
      description: "Jun 2021",
    },
    {
      title: "HTML5 and CSS3 part 3: Working with forms and tables",
      description: "Out 2021",
    },
    {
      title: "Sass: CSS with superpowers",
      description: "Ago 2021",
    },
    {
      title: "Git and Github: Control and share your code",
      description: "Out 2021",
    },
    {
      title: "Chrome DevTools: analyze, inspect and debug your web pages",
      description: "Fev 2022",
    },
    {
      title: "TypeScript part 1: Evolving your JavaScript",
      description: "Out 2021",
    },
    {
      title: "Angular: Starting with the Framework",
      description: "Feb 2022",
    },
    {
      title: "Angular: Best practices in architectures and forms",
      description: "Out 2021",
    },
    {
      title: "Angular: Automated tests with Jasmine and Karma",
      description: "Out 2021",
    },
    {
      title: "Spring Boot API REST: Build an API",
      description: "Feb 2022",
    },

    {
      title: "React: Understanding how Libraries Works",
      description: "Mar 2022",
    },
    {
      title: "React: Dealing with Static Files",
      description: "Mar 2022",
    },
    {
      title: "React Fundamentals: Writing with Typescript",
      description: "Mar 2022",
    },
    {
      title: "React: Global State Management with Context API",
      description: "Apr 2022",
    },
    {
      title: "React: Optimizing Performance",
      description: "Jul 2022",
    },
    {
      title: "React: Integrating your React project with APIs",
      description: "Jul 2022",
    },
    {
      title: "HTTP: Understanding the web behind the scenes",
      description: "Jul 2022",
    },
    {
      title: "Bootstrap 4: Creating a Responsive Landing Page",
      description: "Jul 2022",
    },
    {
      title: "Java OO: Introduction to Object Orientation",
      description: "Jan 2022",
    },
    {
      title: "Java Polymorphism: Understand heritance and interfaces",
      description: "Fev 2022",
    },
    {
      title: "Java Exceptions: Learn to Create, Throw, and Handle Exceptions",
      description: "Mar 2022",
    },
  ];

  const headerInfos: HeaderProps = {
    title: "Ingrid Piazza Nantes",
    description: "Front-end developer",
  };

  const address = {
    city: "João Pessoa - PB",
    country: "Brasil",
  };

  const links = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/ingridnantes/" },
    { name: "GitHub", link: "https://github.com/injiris" },
  ];

  const languages = [
    { name: "Portuguese", level: "5" },
    { name: "English", level: "4" },
  ];

  const skills = [
    { name: "HTML & CSS", level: "5" },
    { name: "JavaScript", level: "5" },
    { name: "TypeScript", level: "5" },
    { name: "React", level: "5" },
    { name: "Angular", level: "5" },
    { name: "Unit tests", level: "5" },
  ];

  const leftSide: LeftSideProps = {
    links,
    skills,
    address,
    languages,
    email: "ingrid.pnantes@gmail.com",
  };

  const rightSide: RightSideProps = {
    courses,
    profile:
      "Three years experienced front-end developer adept in bringing expertise in design, installation, testing and maintenance of software systems. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.",
    experience: [
      {
        company: "Iteris - Globant",
        description:
          "Implemented and updated web applications utilizing high level programming skills using JavaScript, Typescript, React and Angular. Using Karma and Jasmine for unit tests in Angular application and Testing Library and Jest in React application.",
        type: "Remote job",
        period: "May, 2021 - Present",
        position: "Software Developer",
      },
    ],
    education: [
      {
        title: "Bachelor’s degree, Civil Engineering",
        description: "Jan 2011 - Dec 2015",
      },
      {
        title: "Postgraduate degree, Software Architecture",
        description: "Mar 2023 - Oct 2023",
      },
    ],
  };

  return (
    <div className="main-container">
      <Header {...headerInfos} />
      <div className="body">
        <LeftSide {...leftSide} />
        <RightSide {...rightSide} />
      </div>
    </div>
  );
}

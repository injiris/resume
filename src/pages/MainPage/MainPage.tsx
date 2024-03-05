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
      name: "HTML5 and CSS3 part 1: The first web page",
      date: "Jun 2021",
    },
    {
      name: "HTML5 and CSS3 part 2: Positioning, lists and navigation",
      date: "Jun 2021",
    },
    {
      name: "HTML5 and CSS3 part 3: Working with forms and tables",
      date: "Out 2021",
    },
    {
      name: "Sass: CSS with superpowers",
      date: "Ago 2021",
    },
    {
      name: "Git and Github: Control and share your code",
      date: "Out 2021",
    },
    {
      name: "Chrome DevTools: analyze, inspect and debug your web pages",
      date: "Fev 2022",
    },
    {
      name: "TypeScript part 1: Evolving your JavaScript",
      date: "Out 2021",
    },
    {
      name: "Angular: Starting with the Framework",
      date: "Feb 2022",
    },
    {
      name: "Angular: Best practices in architectures and forms",
      date: "Out 2021",
    },
    {
      name: "Angular: Automated tests with Jasmine and Karma",
      date: "Out 2021",
    },
    {
      name: "Spring Boot API REST: Build an API",
      date: "Feb 2022",
    },

    {
      name: "React: Understanding how Libraries Works",
      date: "Mar 2022",
    },
    {
      name: "React: Dealing with Static Files",
      date: "Mar 2022",
    },
    {
      name: "React Fundamentals: Writing with Typescript",
      date: "Mar 2022",
    },
    {
      name: "React: Global State Management with Context API",
      date: "Apr 2022",
    },
    {
      name: "React: Optimizing Performance",
      date: "Jul 2022",
    },
    {
      name: "React: Integrating your React project with APIs",
      date: "Jul 2022",
    },
    {
      name: "HTTP: Understanding the web behind the scenes",
      date: "Jul 2022",
    },
    {
      name: "Bootstrap 4: Creating a Responsive Landing Page",
      date: "Jul 2022",
    },
    {
      name: "Java OO: Introduction to Object Orientation",
      date: "Jan 2022",
    },
    {
      name: "Java Polymorphism: Understand heritance and interfaces",
      date: "Fev 2022",
    },
    {
      name: "Java Exceptions: Learn to Create, Throw, and Handle Exceptions",
      date: "Mar 2022",
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
        course: "Civil Engineering",
        period: "Jan 2011 - Dec 2015",
        type: "Bachelor’s degree",
      },
      {
        course: "Software Architecture",
        period: "Mar 2023 - Oct 2023",
        type: "Postgraduate degree",
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

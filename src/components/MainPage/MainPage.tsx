import Header from "../Header";
import { HeaderProps } from "../Header/Header";
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

  const languages = [
    { name: "Portuguese" },
    {
      name: "English",
    },
  ];

  const education = [{ name: "Portuguese" }, { name: "English" }];

  const headerInfos: HeaderProps = {
    title: "Ingrid Piazza Nantes",
    description: "Front-end developer",
  };

  return (
    <div className="main-container">
      <Header {...headerInfos} />

      <div className="body">
        <div className="left-side">
          <div className="details">
            <h4 className="title">Details</h4>
            <div className="address">
              <span className="title">Address</span>
              <span className="text">João Pessoa - PB</span>
              <span className="text">Brasil</span>
            </div>
            <div className="email">
              <span className="title">Email</span>
              <span className="text">ingrid.pnantes@gmail.com</span>
            </div>
          </div>
          <div className="link">
            <h4 className="title">Links</h4>
            <div className="links">
              <a
                className="text"
                target="_blank"
                href="https://www.linkedin.com/in/ingridnantes/"
              >
                Linkedin
              </a>
              <a
                className="text"
                target="_blank"
                href="https://github.com/injiris"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="languages">
            <h4 className="title">Languages</h4>
            <div className="box">
              <span className="text">English</span>
              <ul className="skill-rating">
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle"></li>
              </ul>
            </div>
            <div className="box margin">
              <span className="text">Portuguese</span>
              <ul className="skill-rating">
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
              </ul>
            </div>
          </div>
          <div className="skills">
            <h4 className="title">Skills</h4>
            <div className="box">
              <span>HTML & CSS</span>
              <ul className="skill-rating">
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
              </ul>
            </div>
            <div className="box margin">
              <span>JavaScript</span>
              <ul className="skill-rating">
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
              </ul>
            </div>
            <div className="box margin">
              <span>TypeScript</span>
              <ul className="skill-rating">
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
              </ul>
            </div>
            <div className="box margin">
              <span>React</span>
              <ul className="skill-rating">
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
              </ul>
            </div>
            <div className="box margin">
              <span>Unit tests</span>
              <ul className="skill-rating">
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle"></li>
              </ul>
            </div>
            <div className="box margin">
              <span>Angular</span>
              <ul className="skill-rating">
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle colorful"></li>
                <li className="circle"></li>
                <li className="circle"></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="section">
            <h4 className="title">profile</h4>
            <h4 className="description">
              Three years experienced front-end developer adept in bringing
              expertise in design, installation, testing and maintenance of
              software systems. Able to effectively self-manage during
              independent projects, as well as collaborate as part of a
              productive team.
            </h4>
          </div>
          <div className="section">
            <h4 className="title">Employment history</h4>
            <div className="job">
              <div className="first-line">
                <span>Front-end Developer, Iteris - Globant</span>
                <span>Remote job</span>
              </div>
              <span>May 2021 - Present </span>
              <h4 className="description">
                Implemented and updated web applications utilizing high level
                programming skills using JavaScript, Typescript, React and
                Angular. Using Karma and Jasmine for unit tests in Angular
                application and Testing Library and Jest in React application.
              </h4>
            </div>
          </div>
          <div className="section">
            <h4 className="title">Education</h4>
            <div className="schools">
              <h4 className="title">
                Postgraduate degree, Software Architecture
              </h4>
              <h4 className="description">Mar 2023 - Oct 2023</h4>
            </div>
            <div className="schools">
              <h4 className="title">Bachelor’s degree, Civil Engineering</h4>
              <h4 className="description">Jan 2011 - Dec 2015</h4>
            </div>
          </div>
          <div className="section">
            <h4 className="title">Courses</h4>
            <div className="courses">
              {courses.map((course) => (
                <div className="course">
                  <h4 className="title">{course.name}</h4>
                  <h4 className="description">{course.date}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

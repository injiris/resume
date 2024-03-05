import "./style.scss";

export type RightSideProps = {
  profile: string;
  courses: Array<{ name: string; date: string }>;
  experience: Array<{
    position: string;
    type: string;
    company: string;
    period: string;
    description: string;
  }>;
  education: Array<{
    course: string;
    type: string;
    period: string;
  }>;
};

export default function RightSide({
  courses,
  profile,
  experience,
  education,
}: RightSideProps) {
  return (
    <div className="right-side">
      <div className="section">
        <h4 className="title">Profile</h4>
        <h4 className="description">{profile}</h4>
      </div>
      <div className="section">
        <h4 className="title">Employment history</h4>
        {experience.map((xp) => (
          <div className="job">
            <div className="first-line">
              <span>{`${xp.position}, ${xp.company}`}</span>
              <span>{xp.type}</span>
            </div>
            <span>{xp.period}</span>
            <h4 className="description">{xp.description}</h4>
          </div>
        ))}
      </div>
      <div className="section">
        <h4 className="title">Education</h4>
        {education.map((ed) => (
          <div className="schools">
            <h4 className="title">{`${ed.type}, ${ed.course}`}</h4>
            <h4 className="description">{ed.period}</h4>
          </div>
        ))}
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
  );
}

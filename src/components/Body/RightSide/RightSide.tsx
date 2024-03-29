import { useTranslation } from "react-i18next";
import SectionsList from "../SectionsList";
import "./style.scss";

export type RightSideProps = {
  profile: string;
  courses: Array<{ title: string; description: string }>;
  education: Array<{ title: string; description: string }>;
  experience: Array<{
    position: string;
    type: string;
    period: string;
    company: string;
    description: string;
  }>;
};

export default function RightSide({
  profile,
  courses,
  education,
  experience,
}: RightSideProps) {
  const { t } = useTranslation("resume");

  return (
    <div className="right-side">
      <div className="section">
        <h4 className="title">{t("profile")}</h4>
        <h4 className="description">{profile}</h4>
      </div>
      <div className="section">
        <h4 className="title">{t("experience")}</h4>
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
      <SectionsList itemsList={education} title={t("education")} />
      <SectionsList itemsList={courses} title={t("courses")} />
    </div>
  );
}

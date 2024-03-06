import { useTranslation } from "react-i18next";
import LeftSide from "../../components/Body/LeftSide";
import { LeftSideProps } from "../../components/Body/LeftSide/LeftSide";
import RightSide from "../../components/Body/RightSide";
import { RightSideProps } from "../../components/Body/RightSide/RightSide";
import Header from "../../components/Header";
import { HeaderProps } from "../../components/Header/Header";
import "./style.scss";

export default function MainPage() {
  const { t } = useTranslation("resume");

  const courses = [
    {
      title: t("html-1"),
      description: t("jun"),
    },
    {
      title: t("html-2"),
      description: t("jun"),
    },
    {
      title: t("html-3"),
      description: t("out"),
    },
    {
      title: t("sass"),
      description: t("ago"),
    },
    {
      title: t("git"),
      description: t("out"),
    },
    {
      title: t("type-1"),
      description: t("out"),
    },
    {
      title: t("angular-1"),
      description: t("out"),
    },
    {
      title: t("angular-2"),
      description: t("out"),
    },
    {
      title: t("java-1"),
      description: t("jan"),
    },
    {
      title: t("chrome"),
      description: t("feb"),
    },
    {
      title: t("spring"),
      description: t("feb"),
    },
    {
      title: t("angular-3"),
      description: t("feb"),
    },
    {
      title: t("java-2"),
      description: t("feb"),
    },
    {
      title: t("react-1"),
      description: t("mar"),
    },
    {
      title: t("react-2"),
      description: t("mar"),
    },
    {
      title: t("react-3"),
      description: t("mar"),
    },
    {
      title: t("java-3"),
      description: t("mar"),
    },
    {
      title: t("react-4"),
      description: t("apr"),
    },
    {
      title: t("react-5"),
      description: t("jul"),
    },
    {
      title: t("react-6"),
      description: t("jul"),
    },
    {
      title: t("http"),
      description: t("jul"),
    },
    {
      title: t("bootstrap"),
      description: t("jul"),
    },
  ];

  const headerInfos: HeaderProps = {
    title: "Ingrid Piazza Nantes",
    description: t("position"),
  };

  const address = {
    city: t("city"),
    country: t("country"),
  };

  const links = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/ingridnantes/" },
    { name: "GitHub", link: "https://github.com/injiris" },
  ];

  const languages = [
    { name: t("portuguese"), level: 5 },
    { name: t("english"), level: 4 },
  ];

  const skills = [
    { name: "HTML & CSS", level: 5 },
    { name: "JavaScript", level: 5 },
    { name: "TypeScript", level: 5 },
    { name: "React", level: 5 },
    { name: t("unit-tests"), level: 5 },
    { name: "Angular", level: 3 },
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
    profile: t("profile-description"),
    experience: [
      {
        company: "Iteris - Globant",
        description: t("experience-description"),
        type: t("remote"),
        period: t("period"),
        position: t("position"),
      },
    ],
    education: [
      {
        title: t("education-title-1"),
        description: t("education-period-1"),
      },
      {
        title: t("education-title-2"),
        description: t("education-period-2"),
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

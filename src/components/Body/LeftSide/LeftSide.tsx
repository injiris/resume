import { useTranslation } from "react-i18next";
import RatingList from "../RatingList";
import "./style.scss";

export type LeftSideProps = {
  email: string;
  address: { city: string; country: string };
  links: Array<{ name: string; link: string }>;
  skills: Array<{ name: string; level: number }>;
  languages: Array<{ name: string; level: number }>;
};

export default function LeftSide({
  links,
  email,
  skills,
  address,
  languages,
}: LeftSideProps) {
  const { t } = useTranslation("resume");
  const { city, country } = address;

  return (
    <div className="left-side">
      <div className="container">
        <h4 className="title">{t("details")}</h4>
        <div className="box">
          <span className="title">{t("address")}</span>
          <span className="text">{city}</span>
          <span className="text">{country}</span>
        </div>
        <div className="box email">
          <span className="title">{t("email")}</span>
          <span className="text">{email}</span>
        </div>
      </div>
      <div className="container">
        <h4 className="title">{t("links")}</h4>
        <div className="box">
          {links.map((link) => (
            <a className="text" target="_blank" href={link.link}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <RatingList itemsList={languages} title={t("languages")} />
      <RatingList itemsList={skills} title={t("skills")} />
    </div>
  );
}

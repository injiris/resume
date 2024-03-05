import RatingList from "../RatingList";
import "./style.scss";

export type LeftSideProps = {
  email: string;
  address: { city: string; country: string };
  links: Array<{ name: string; link: string }>;
  skills: Array<{ name: string; level: string }>;
  languages: Array<{ name: string; level: string }>;
};

export default function LeftSide({
  links,
  email,
  skills,
  address,
  languages,
}: LeftSideProps) {
  const { city, country } = address;

  return (
    <div className="left-side">
      <div className="container">
        <h4 className="title">Details</h4>
        <div className="box">
          <span className="title">Address</span>
          <span className="text">{city}</span>
          <span className="text">{country}</span>
        </div>
        <div className="box email">
          <span className="title">Email</span>
          <span className="text">{email}</span>
        </div>
      </div>
      <div className="container">
        <h4 className="title">Links</h4>
        <div className="box">
          {links.map((link) => (
            <a className="text" target="_blank" href={link.link}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <RatingList itemsList={languages} title="Languages" />
      <RatingList itemsList={skills} title="Skills" />
    </div>
  );
}

import RatingList from "../RatingList";
import "./style.scss";

export type LeftSideProps = {
  email: string;
  address: {
    city: string;
    country: string;
  };
  links: Array<{ name: string; link: string }>;
  languages: Array<{ name: string; level: string }>;
  skills: Array<{ name: string; level: string }>;
};

export default function LeftSide({
  email,
  links,
  languages,
  address,
  skills,
}: LeftSideProps) {
  const { city, country } = address;

  return (
    <div className="left-side">
      <div className="details">
        <h4 className="title">Details</h4>
        <div className="address">
          <span className="title">Address</span>
          <span className="text">{city}</span>
          <span className="text">{country}</span>
        </div>
        <div className="email">
          <span className="title">Email</span>
          <span className="text">{email}</span>
        </div>
      </div>
      <div className="link">
        <h4 className="title">Links</h4>
        <div className="links">
          {links.map((link) => (
            <a className="text" target="_blank" href={link.link}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <RatingList itemsList={languages} />
      <RatingList itemsList={skills} />
    </div>
  );
}

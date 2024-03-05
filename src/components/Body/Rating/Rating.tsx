import "./style.scss";

export type RatingProps = {
  email: string;
  address: {
    city: string;
    country: string;
  };
  links: Array<{ name: string; link: string }>;
  languages: Array<{ name: string; level: string }>;
};

export default function Rating() {
  return (
    <ul className="skill-rating">
      <li className="circle colorful"></li>
      <li className="circle colorful"></li>
      <li className="circle colorful"></li>
      <li className="circle colorful"></li>
      <li className="circle"></li>
    </ul>
  );
}

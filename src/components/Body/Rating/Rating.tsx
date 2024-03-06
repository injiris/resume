import "./style.scss";

export type RatingProps = {
  level: number;
};

export default function Rating({ level }: RatingProps) {
  const validLevel = Math.max(0, Math.min(5, level));

  const circles = Array.from({ length: 5 }, (_, index) => (
    <li
      key={index}
      className={`circle ${index < validLevel ? "colorful" : ""}`}
    ></li>
  ));

  return <ul className="skill-rating">{circles}</ul>;
}

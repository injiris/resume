import Rating from "../Rating";
import "./style.scss";

export type RightSideProps = {
  itemsList: Array<{ name: string; level: string }>;
};

export default function RatingList({ itemsList }: RightSideProps) {
  return (
    <div className="skills">
      <h4 className="title">Skills</h4>
      {itemsList.map((item) => (
        <div className="box">
          <span className="text">{item.name}</span>
          <Rating />
        </div>
      ))}
    </div>
  );
}

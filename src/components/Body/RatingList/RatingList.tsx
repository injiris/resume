import Rating from "../Rating";
import "./style.scss";

export type RightSideProps = {
  title: string;
  itemsList: Array<{ name: string; level: string }>;
};

export default function RatingList({ title, itemsList }: RightSideProps) {
  return (
    <div className="list">
      <h4 className="title">{title}</h4>
      {itemsList.map((item) => (
        <div className="box">
          <span className="text">{item.name}</span>
          <Rating />
        </div>
      ))}
    </div>
  );
}

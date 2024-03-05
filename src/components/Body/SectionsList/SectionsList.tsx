import "./style.scss";

export type SectionsListProps = {
  title: string;
  itemsList: Array<{ title: string; description: string }>;
};

export default function SectionsList({ title, itemsList }: SectionsListProps) {
  return (
    <div className="section">
      <h4 className="title">{title}</h4>
      {itemsList.map((item) => (
        <div className="item">
          <h4 className="title">{item.title}</h4>
          <h4 className="description">{item.description}</h4>
        </div>
      ))}
    </div>
  );
}

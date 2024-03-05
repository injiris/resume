import "./style.scss";

export type HeaderProps = {
  title: string;
  description: string;
};

export default function Header({ title, description }: HeaderProps) {
  return (
    <div className="header">
      <div className="texts">
        <h1 className="title">{title}</h1>
        <h3 className="description">{description}</h3>
      </div>
    </div>
  );
}

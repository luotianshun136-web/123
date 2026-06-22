type HeaderProps = {
  intro: {
    title: string;
    subtitle: string;
    tags: string[];
    description: string;
  };
};

export default function Header({ intro }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="title-block">
        <p className="eyebrow">Residential Space Advisory · 2026</p>
        <h1>{intro.title}</h1>
        <p className="subtitle">{intro.subtitle}</p>
      </div>
      <div className="header-copy">
        <div className="tag-row" aria-label="项目标签">
          {intro.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p>{intro.description}</p>
      </div>
    </header>
  );
}

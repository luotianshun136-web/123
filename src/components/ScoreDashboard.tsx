import type { CSSProperties } from "react";
import type { ScoreItem } from "../data/reportData";

type ScoreDashboardProps = {
  items: ScoreItem[];
  summary: {
    title: string;
    total: number;
    potential: number;
    level: string;
    note: string;
  };
};

export default function ScoreDashboard({ items, summary }: ScoreDashboardProps) {
  return (
    <section className="glass-card score-card">
      <div className="score-hero">
        <div>
          <span>{summary.title}</span>
          <h2>{summary.total}<small>/100</small></h2>
        </div>
        <div>
          <span>优化后潜力</span>
          <h3>{summary.potential}<small>/100</small></h3>
        </div>
      </div>
      <p className="level-pill">{summary.level}</p>
      <div className="score-bars">
        {items.map((item) => (
          <div className="score-row" key={item.label}>
            <div>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
            <i style={{ "--score": `${item.value}%` } as CSSProperties} />
          </div>
        ))}
      </div>
      <p className="muted-copy">{summary.note}</p>
    </section>
  );
}

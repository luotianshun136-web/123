import { CalendarRange } from "lucide-react";
import type { AnnualFocus } from "../data/reportData";

type AnnualFocusPanelProps = {
  items: AnnualFocus[];
};

export default function AnnualFocusPanel({ items }: AnnualFocusPanelProps) {
  return (
    <section className="glass-card">
      <div className="section-title">
        <CalendarRange size={17} />
        <h2>2026年度重点关注</h2>
      </div>
      <div className="focus-grid">
        {items.map((item) => (
          <article className="focus-card" key={item.area}>
            <span>{item.area}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <em>{item.suggestion}</em>
          </article>
        ))}
      </div>
    </section>
  );
}

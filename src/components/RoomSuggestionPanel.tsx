import { SlidersHorizontal } from "lucide-react";
import type { RoomSuggestion } from "../data/reportData";

type RoomSuggestionPanelProps = {
  finalSummary: {
    title: string;
    body: string;
    highlight: string;
  };
  items: RoomSuggestion[];
};

export default function RoomSuggestionPanel({ finalSummary, items }: RoomSuggestionPanelProps) {
  return (
    <section className="glass-card">
      <div className="section-title">
        <SlidersHorizontal size={17} />
        <h2>5项重点优化建议</h2>
      </div>
      <div className="suggestion-list">
        {items.map((item, index) => (
          <article className="suggestion-item" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="final-summary">
        <h2>{finalSummary.title}</h2>
        <p>{finalSummary.body}</p>
        <strong>{finalSummary.highlight}</strong>
      </div>
    </section>
  );
}

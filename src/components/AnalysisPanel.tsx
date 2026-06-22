import type { ReportMarker } from "../data/reportData";

type AnalysisPanelProps = {
  marker: ReportMarker;
};

export default function AnalysisPanel({ marker }: AnalysisPanelProps) {
  return (
    <article className="glass-card analysis-card" key={marker.id}>
      <div className="card-heading">
        <span className="numeric-label">{marker.id}</span>
        <div>
          <p>当前观察点</p>
          <h2>{marker.title}</h2>
        </div>
      </div>

      <p className="lead-text">{marker.summary}</p>

      <div className="insight-grid">
        <section>
          <span>优势</span>
          <p>{marker.strengths}</p>
        </section>
        <section>
          <span>关注重点</span>
          <p>{marker.focus}</p>
        </section>
        <section className="wide">
          <span>整理建议</span>
          <p>{marker.suggestion}</p>
        </section>
      </div>
    </article>
  );
}

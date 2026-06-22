import type { ReportMarker } from "../data/reportData";

type MarkerLayerProps = {
  activeMarkerId: string;
  markers: ReportMarker[];
  onMarkerSelect: (markerId: string) => void;
};

export default function MarkerLayer({ activeMarkerId, markers, onMarkerSelect }: MarkerLayerProps) {
  return (
    <div className="marker-layer" aria-label="可点击观察点位">
      {markers.map((marker, index) => (
        <button
          aria-label={`${marker.id} ${marker.title}`}
          className={`map-marker ${marker.id === activeMarkerId ? "is-selected" : ""}`}
          key={marker.id}
          onClick={() => onMarkerSelect(marker.id)}
          style={{
            left: `${marker.position.x}%`,
            top: `${marker.position.y}%`,
            animationDelay: `${index * 70}ms`,
          }}
          type="button"
        >
          <span>{marker.id}</span>
          <em>{marker.tooltip}</em>
        </button>
      ))}
    </div>
  );
}

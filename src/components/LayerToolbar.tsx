import { Layers } from "lucide-react";
import type { AnalysisLayer } from "../data/reportData";

type LayerToolbarProps = {
  activeLayerId: string;
  layers: AnalysisLayer[];
  onLayerChange: (layerId: string) => void;
};

export default function LayerToolbar({ activeLayerId, layers, onLayerChange }: LayerToolbarProps) {
  return (
    <nav className="layer-toolbar" aria-label="分析图层">
      <span className="toolbar-label">
        <Layers size={15} />
        图层
      </span>
      {layers.map((layer) => (
        <button
          aria-pressed={layer.id === activeLayerId}
          className={layer.id === activeLayerId ? "is-selected" : ""}
          key={layer.id}
          onClick={() => onLayerChange(layer.id)}
          title={layer.description}
          type="button"
        >
          {layer.label}
        </button>
      ))}
    </nav>
  );
}

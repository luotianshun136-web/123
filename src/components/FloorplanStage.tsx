import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import floorplan from "../assets/floorplan.png";
import type { AnalysisLayer, ReportMarker } from "../data/reportData";
import LayerToolbar from "./LayerToolbar";
import MarkerLayer from "./MarkerLayer";

type FloorplanStageProps = {
  activeLayer: AnalysisLayer;
  activeLayerId: string;
  activeMarker: ReportMarker;
  activeMarkerId: string;
  layers: AnalysisLayer[];
  markers: ReportMarker[];
  onLayerChange: (layerId: string) => void;
  onMarkerSelect: (markerId: string) => void;
  onReset: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  zoom: number;
};

export default function FloorplanStage({
  activeLayer,
  activeLayerId,
  activeMarker,
  activeMarkerId,
  layers,
  markers,
  onLayerChange,
  onMarkerSelect,
  onReset,
  onZoomIn,
  onZoomOut,
  zoom,
}: FloorplanStageProps) {
  const activeRoomIds = new Set(activeMarker.relatedRoomIds);

  return (
    <section className="stage-shell" aria-label="户型图交互区">
      <div className="stage-topbar">
        <LayerToolbar activeLayerId={activeLayerId} layers={layers} onLayerChange={onLayerChange} />
        <div className="zoom-controls" aria-label="缩放控制">
          <button aria-label="放大户型图" onClick={onZoomIn} type="button">
            <ZoomIn size={16} />
          </button>
          <button aria-label="缩小户型图" onClick={onZoomOut} type="button">
            <ZoomOut size={16} />
          </button>
          <button aria-label="重置户型图缩放" onClick={onReset} type="button">
            <RotateCcw size={16} />
          </button>
          <span>{Math.round(zoom * 100)}%</span>
        </div>
      </div>

      <div className="stage-meta">
        <strong>{activeLayer.label}</strong>
        <span>{activeLayer.description}</span>
      </div>

      <div className="floorplan-viewport">
        <div className="floorplan-canvas" style={{ transform: `scale(${zoom})` }}>
          {/* 请将上传的户型图命名为 floorplan.png，并放入 src/assets 文件夹。 */}
          <img alt="原始户型图" draggable="false" src={floorplan} />
          <div className="grid-overlay" aria-hidden="true" />

          <div className="region-layer" key={activeLayer.id}>
            {activeLayer.regions.map((region) => (
              <div
                className={`analysis-region tone-${region.tone} ${activeRoomIds.has(region.id) ? "is-active" : ""}`}
                key={region.id}
                style={{
                  left: `${region.x}%`,
                  top: `${region.y}%`,
                  width: `${region.width}%`,
                  height: `${region.height}%`,
                }}
              >
                <span>{region.label}</span>
              </div>
            ))}
          </div>

          <MarkerLayer
            activeMarkerId={activeMarkerId}
            markers={markers}
            onMarkerSelect={onMarkerSelect}
          />
        </div>
      </div>
    </section>
  );
}

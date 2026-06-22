import { useMemo, useState } from "react";
import { annualFocus, disclaimer, familyMembers, familySummary, finalSummary, layers, markers, reportIntro, roomSuggestions, scoreItems, scoreSummary } from "./data/reportData";
import Header from "./components/Header";
import FloorplanStage from "./components/FloorplanStage";
import AnalysisPanel from "./components/AnalysisPanel";
import FamilyPanel from "./components/FamilyPanel";
import ScoreDashboard from "./components/ScoreDashboard";
import AnnualFocusPanel from "./components/AnnualFocusPanel";
import RoomSuggestionPanel from "./components/RoomSuggestionPanel";
import Disclaimer from "./components/Disclaimer";

const defaultMarkerId = "01";

export default function App() {
  const [activeMarkerId, setActiveMarkerId] = useState(defaultMarkerId);
  const [activeLayerId, setActiveLayerId] = useState(layers[0].id);
  const [zoom, setZoom] = useState(1);

  const activeMarker = useMemo(
    () => markers.find((marker) => marker.id === activeMarkerId) ?? markers[0],
    [activeMarkerId],
  );

  const activeLayer = useMemo(
    () => layers.find((layer) => layer.id === activeLayerId) ?? layers[0],
    [activeLayerId],
  );

  const setZoomWithinRange = (nextZoom: number) => {
    setZoom(Math.min(1.35, Math.max(0.85, Number(nextZoom.toFixed(2)))));
  };

  return (
    <main className="app-shell">
      <Header intro={reportIntro} />

      <section className="workspace" aria-label="住宅空间观察工作区">
        <FloorplanStage
          activeLayer={activeLayer}
          activeLayerId={activeLayerId}
          activeMarker={activeMarker}
          activeMarkerId={activeMarkerId}
          layers={layers}
          markers={markers}
          onLayerChange={setActiveLayerId}
          onMarkerSelect={setActiveMarkerId}
          onReset={() => setZoomWithinRange(1)}
          onZoomIn={() => setZoomWithinRange(zoom + 0.1)}
          onZoomOut={() => setZoomWithinRange(zoom - 0.1)}
          zoom={zoom}
        />

        <aside className="report-panel" aria-label="报告详情">
          <AnalysisPanel marker={activeMarker} />
          <ScoreDashboard items={scoreItems} summary={scoreSummary} />
          <AnnualFocusPanel items={annualFocus} />
          <FamilyPanel members={familyMembers} summary={familySummary} />
          <RoomSuggestionPanel finalSummary={finalSummary} items={roomSuggestions} />
        </aside>
      </section>

      <Disclaimer text={disclaimer} />
    </main>
  );
}

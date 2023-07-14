"use client";

import { ToolbarPanel } from "./_components/ToolbarPanel";
import { ElementPropertiesPanel } from "./_components/ElementPropertiesPanel";
import { DesignCanvasPanel } from "./_components/DesignCanvasPanel";
import { ElementsListPanel } from "./_components/ElementsListPanel";
import { useState } from "react";

export default function DesignStudio() {
  const [showPropertiesPanel, setShowPropertiesPanel] = useState(true);

  return (
    <main
      style={{ height: "calc(100vh - 4rem)" }}
      className="bg-slate-200 flex flex-col select-none"
    >
      <ToolbarPanel />

      <div className="flex flex-grow flex-col lg:flex-row">
        <ElementsListPanel
          handleClickElement={() => {
            setShowPropertiesPanel(true);
          }}
        />
        <DesignCanvasPanel />
        {showPropertiesPanel && (
          <ElementPropertiesPanel
            handleCloseEditor={() => {
              setShowPropertiesPanel(false);
            }}
          />
        )}
      </div>
    </main>
  );
}

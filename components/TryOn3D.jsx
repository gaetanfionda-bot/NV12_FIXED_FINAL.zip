"use client";

import { useEffect } from "react";

export default function TryOn3D({ src }) {
  useEffect(() => {
    // Injecter le script <model-viewer> une seule fois
    const existing = document.querySelector("#model-viewer-script");
    if (existing) return;

    const script = document.createElement("script");
    script.id = "model-viewer-script";
    script.type = "module";
    script.src =
      "https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js";
    document.body.appendChild(script);
  }, []);

  return (
    <model-viewer
      src={src}
      ar
      auto-rotate
      camera-controls
      exposure="1.1"
      shadow-intensity="1"
      style={{
        width: "100%",
        height: "400px",
        background: "#000",
        borderRadius: "10px",
      }}
    >
    </model-viewer>
  );
}

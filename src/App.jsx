import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Interface from "./components/Interface";
import { MantineProvider, Loader } from "@mantine/core";
import { useHudSettings } from "./contexts/HudSettings";
import { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";

function App() {
  const { isDarkMode } = useHudSettings();
  const [isLoading, setIsLoading] = useState(true);
  const { active, progress } = useProgress();

  useEffect(() => {
    if (!active) {
      setIsLoading(false);
    }
  }, [active]);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: isDarkMode ? "dark" : "light",
        globalStyles: (_theme) => ({
          body: {
            width: "100vw",
            height: "100vh",
            margin: 0,
          },
          "#root": {
            width: "100%",
            height: "100%",
            position: "relative",
          },
        }),
      }}
    >
      <div
        style={{
          position: "absolute",
          display: isLoading ? "flex" : "none",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          opacity: isLoading ? 1 : 0,
          transition: "opacity 0.5s",
          zIndex: 100,
          backgroundColor: isDarkMode ? "black" : "white", // Optional: To cover the canvas with a solid color
        }}
      >
        <h3>Loading {progress.toFixed(2)}%</h3>
        <Loader />
      </div>
      <Canvas
        camera={{ position: [1, 1.5, 2.5], fov: 50 }}
        shadows
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transition: "opacity 0.5s",
          opacity: isLoading ? 0 : 1,
        }}
      >
        <Experience />
      </Canvas>
      <Interface />
    </MantineProvider>
  );
}

export default App;

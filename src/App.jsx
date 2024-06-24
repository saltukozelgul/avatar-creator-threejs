import { Canvas,events } from "@react-three/fiber";
import Experience from "./components/Experience";
import Interface from "./components/Interface";
import { MantineProvider } from "@mantine/core";
import { useHudSettings } from "./contexts/HudSettings";
import { useState,useEffect } from "react";
import { Loader } from "@mantine/core";
import { useProgress } from "@react-three/drei";

function App() {
  const {isDarkMode} = useHudSettings();
  const [isLoading, setIsLoading] = useState(true)
  const { active, progress, errors, item, loaded, total } = useProgress()

  useEffect(() => {
    if (!active) {
      setIsLoading(false)
    }
  }, [active])


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
          },
          "#root": {
            width: "100%",
            height: "100%",
          },
        }),
      }}
    >
      { isLoading ? 
      <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
        <h3>Loading { progress.toFixed(2) }%</h3>
        <Loader />
      </div> 
      : 
      <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
          <Experience />
      </Canvas> 
      }

      <Interface />
    </MantineProvider>
  );
}

export default App;

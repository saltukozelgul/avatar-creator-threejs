import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Interface from "./components/Interface";
import { MantineProvider } from "@mantine/core";
import { useHudSettings } from "./contexts/HudSettings";

function App() {
  const {isDarkMode} = useHudSettings();

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
      <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
          <Experience />
      </Canvas>
      <Interface />
    </MantineProvider>
  );
}

export default App;

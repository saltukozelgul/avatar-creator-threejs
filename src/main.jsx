import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";
import { CharacterCustomizationProvider } from "./contexts/CharacterCustomization";
import { HudSettingsProvider } from "./contexts/HudSettings";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
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
      <HudSettingsProvider>
        <CharacterCustomizationProvider>
          <CharacterAnimationsProvider>
            <App />
          </CharacterAnimationsProvider>
        </CharacterCustomizationProvider>
      </HudSettingsProvider>
    </MantineProvider>
  </React.StrictMode>
);

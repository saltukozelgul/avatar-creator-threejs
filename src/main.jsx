import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";
import { CharacterCustomizationProvider } from "./contexts/CharacterCustomization";
import { HudSettingsProvider } from "./contexts/HudSettings";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <HudSettingsProvider>
        <CharacterCustomizationProvider>
          <CharacterAnimationsProvider>
            <App />
          </CharacterAnimationsProvider>
        </CharacterCustomizationProvider>
      </HudSettingsProvider>
  </React.StrictMode>
);

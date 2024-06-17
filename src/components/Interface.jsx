import { Affix, Button, Group, Stack } from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { useCharacterCustomization } from "../contexts/CharacterCustomization";
import { cameraModes } from "../enums/cameraModes";

// Icons
import { IconMoodHappy, IconShirt, IconShoe, IconBulb } from "@tabler/icons-react";
import { useHudSettings } from "../contexts/HudSettings";
import { HeadConfig } from "./Configurators/HeadConfig";
import { BodyConfig } from "./Configurators/BodyConfig";
import { LegConfig } from "./Configurators/LegConfig";
import { useState } from "react";
import { LightConfig } from "./Configurators/LightConfig";

const camelCaseToWords = (camelCase) => {
  const result = camelCase.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } = useCharacterAnimations();
  const { camMode, setCamMode } = useCharacterCustomization();
  const { hudColor, setHudColor } = useHudSettings();
  const [ lightSettings, setLightSettings ] = useState(false);

  return (
    <>
      <Affix position={{ top: 20, left: 20 }}>
        <Stack>
          <Group position="center">
            <Button
              color="grape"
              variant="light"
              onClick={() => setHudColor("grape")}
            >
              Grape
            </Button>
            <Button
              color="teal"
              variant="light"
              onClick={() => setHudColor("teal")}
            >
              Teal
            </Button>
            <Button
              color="orange"
              variant="light"
              onClick={() => setHudColor("orange")}
            >
              Orange
            </Button>
            <Button
              key="light_settings"
              color={hudColor}
              variant={lightSettings ? "filled" : "light"}
              onClick={() => setLightSettings(!lightSettings)}
            >
             <IconBulb />
            </Button>
            
          </Group>
          {Object.keys(cameraModes).map((mode) => (
            <Button
              key={mode}
              color={hudColor}
              variant={mode === camMode ? "filled" : "light"}
              onClick={() => setCamMode(cameraModes[mode])}  // Ensure you pass the correct value
            >
              { mode === cameraModes.HEAD ? <IconMoodHappy /> : mode === cameraModes.TOP ? <IconShirt /> : mode === cameraModes.BOTTOM ? <IconShoe /> : "Free Camera" }
            </Button>
          ))}
         { lightSettings && <LightConfig /> }
        </Stack>
      </Affix>
      <Affix position={{ top: 20, right: 20 }}>
        { camMode === cameraModes.HEAD && <HeadConfig /> }
        { camMode === cameraModes.TOP && <BodyConfig /> }
        { camMode === cameraModes.BOTTOM && <LegConfig /> }
          
      </Affix>
      <Affix position={{ bottom: 50, right: 20 }}>
        <Stack>
          {animations.map((animation, index) => (
            <Button
              key={animation}
              color={hudColor}
              variant={index === animationIndex ? "filled" : "light"}
              onClick={() => setAnimationIndex(index)}
            >
              {camelCaseToWords(animation)}
            </Button>
          ))}
        </Stack>
      </Affix>
    </>
  );
};

export default Interface;

import { Affix, Button, Group, Stack } from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { useCharacterCustomization } from "../contexts/CharacterCustomization";
import { cameraModes } from "../enums/cameraModes";

// Icons
import { IconUsersGroup, IconMoodHappy, IconShirt, IconShoe, IconBulb, IconDice5Filled, IconMoon, IconSun, IconMoodSadSquint, IconMoodSad2, IconMoodPuzzled } from "@tabler/icons-react";
import { useHudSettings } from "../contexts/HudSettings";
import { HeadConfig } from "./Configurators/HeadConfig";
import { BodyConfig } from "./Configurators/BodyConfig";
import { LegConfig } from "./Configurators/LegConfig";
import { useState } from "react";
import { LightConfig } from "./Configurators/LightConfig";
import { ExpressionConfig } from "./Configurators/ExpressionConfig";

const camelCaseToWords = (camelCase) => {
  const result = camelCase.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex, manAnimations, manAnimationsIndex, setManAnimationsIndex } = useCharacterAnimations();
  const { camMode, setCamMode, setRandomizeCharacter, character, setCharacter, scene, setScene } = useCharacterCustomization();
  const { hudColor, setHudColor, isDarkMode, setIsDarkMode } = useHudSettings();
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
            <Button
              key="randomize_character"
              color={hudColor}
              variant={lightSettings ? "filled" : "light"}
              onClick={() => setRandomizeCharacter()}
            >
             <IconDice5Filled />
            </Button>
            <Button
              key="change_character"
              color={hudColor}
              variant={lightSettings ? "filled" : "light"}
              onClick={() => setCharacter(character === 1 ? 2 : 1)}
            >
             <IconUsersGroup />
            </Button>
            
          </Group>
          {Object.keys(cameraModes).map((mode) => (
            <Button
              key={mode}
              color={hudColor}
              variant={mode === camMode ? "filled" : "light"}
              onClick={() => setCamMode(cameraModes[mode])}  // Ensure you pass the correct value
            >
              { mode === cameraModes.HEAD ? <IconMoodHappy /> : mode === cameraModes.TOP ? <IconShirt /> : mode === cameraModes.BOTTOM ? <IconShoe /> : mode === cameraModes.EXP ? <div><IconMoodSadSquint/> <IconMoodPuzzled/> <IconMoodSad2/></div> : "Free Camera" }
            </Button>
          ))}
         { lightSettings && <LightConfig /> }
        </Stack>
      </Affix>
      <Affix position={{ top: 60, right: 20 }}>
        { camMode === cameraModes.HEAD && <HeadConfig /> }
        { camMode === cameraModes.TOP && <BodyConfig /> }
        { camMode === cameraModes.BOTTOM && <LegConfig /> }
        { camMode === cameraModes.EXP && <ExpressionConfig /> }
      </Affix>
      <Affix position={{ top: 20, right: 20 }}>
        <Stack>
          <Button
            color={hudColor}
            variant="light"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <IconMoon /> : <IconSun />}
          </Button>
        </Stack>
      </Affix>
      <Affix position={{ bottom: 50, right: 20 }}>
        <Stack>
          { character === 1 && manAnimations.map((animation, index) => (
            <Button
              key={animation}
              color={hudColor}
              variant={index === manAnimationsIndex ? "filled" : "light"}
              onClick={() => {
                if (index === manAnimationsIndex) {
                    setManAnimationsIndex(0);
                } else {
                    setManAnimationsIndex(index);
                }
              }
              }
            >
              {camelCaseToWords(animation)}
            </Button>
          ))}
          { character === 2 && animations.map((animation, index) => (
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
      <Affix position={{ bottom: 50, left: 20 }}>
        <Stack>
          <Button
            color={hudColor}
            variant={scene === 0 ? "filled" : "light"}
            onClick={() => setScene(0)}
          >
              Bedroom
          </Button>
          <Button
            color={hudColor}
            variant={scene === 1 ? "filled" : "light"}
            onClick={() => setScene(1)}
            >
              Concert
          </Button>
          <Button
            color={hudColor}
            variant={scene === 2 ? "filled" : "light"}
            onClick={() => setScene(2)}
            >
              Park
          </Button>
          <Button
            color={hudColor}
            variant={scene === 3 ? "filled" : "light"}
            onClick={() => setScene(3)}
            >
              Night Club
          </Button>
        </Stack>
      </Affix>
    </>
  );
};

export default Interface;

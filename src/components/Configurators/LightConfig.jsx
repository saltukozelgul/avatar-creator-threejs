import { Stack, ColorInput, Slider, Group, Text } from "@mantine/core";
import { useHudSettings } from "../../contexts/HudSettings";

export const LightConfig = () => {
    const {lightColor, setLightColor, lightIntensity, setLightIntensity, lightDistance, setLightDistance, lightAngle, setLightAngle, 
        lightPosX,
        setLightPosX,
        lightPosY,
        setLightPosY,
        lightPosZ,
        setLightPosZ,
    } = useHudSettings();
    // lightColor
    // lightPosition
    // lightIntensity
    // lightDistance
    // lightAngle

    return (
    <Stack>
        <ColorInput label="Light Color" value={lightColor} onChange={setLightColor} />
        <Text size={"sm"}>Light Intensity</Text>
        <Slider label="Light Intensity" value={lightIntensity} onChange={setLightIntensity} min={0} max={1} step={0.1} />
        <Text size={"sm"}>Light Position</Text>
        <Group grow>
            <Slider label="Light Position X" value={lightPosX} onChange={setLightPosX} min={-10} max={10} step={0.1} />
            <Slider label="Light Position Y" value={lightPosY} onChange={setLightPosY} min={-10} max={10} step={0.1} />
            <Slider label="Light Position Z" value={lightPosZ} onChange={setLightPosZ} min={-10} max={10} step={0.1} />
        </Group>
    </Stack>
    );
    }
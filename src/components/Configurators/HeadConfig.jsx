import { Stack, ColorInput, Title, Group } from "@mantine/core";
import { useCharacterCustomization } from "../../contexts/CharacterCustomization";

export const HeadConfig = () => {
    const {hairColor, setHairColor} = useCharacterCustomization();
    const {skinColor, setSkinColor} = useCharacterCustomization();
    const {eyeColor, setEyeColor} = useCharacterCustomization();
    const {mouthColor, setMouthColor} = useCharacterCustomization();

    const {morphTargetDictionary, setMorphTargetDictionary} = useCharacterCustomization();
    const {morphTargetInfluences, setMorphTargetInfluences} = useCharacterCustomization();

    return (
        <Group style={{padding: "1rem"}}>
            <Stack>
                <Title order={3}>Head Settings</Title>
                <ColorInput label="Hair Color" value={hairColor} onChange={setHairColor} />
                <ColorInput label="Skin Color" value={skinColor} onChange={setSkinColor} />
                <ColorInput label="Eyes Color" value={eyeColor} onChange={setEyeColor} />
                <ColorInput label="Mouth Color" value={mouthColor} onChange={setMouthColor} />
            </Stack>
        </Group>

    );
    }
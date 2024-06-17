import { Stack, ColorInput } from "@mantine/core";
import { useCharacterCustomization } from "../../contexts/CharacterCustomization";

export const HeadConfig = () => {
    const {hairColor, setHairColor} = useCharacterCustomization();
    const {skinColor, setSkinColor} = useCharacterCustomization();
    const {eyeColor, setEyeColor} = useCharacterCustomization();
    const {mouthColor, setMouthColor} = useCharacterCustomization();

    return (
    <Stack>
        <ColorInput label="Hair Color" value={hairColor} onChange={setHairColor} />
        <ColorInput label="Skin Color" value={skinColor} onChange={setSkinColor} />
        <ColorInput label="Eyes Color" value={eyeColor} onChange={setEyeColor} />
        <ColorInput label="Mouth Color" value={mouthColor} onChange={setMouthColor} />
    </Stack>
    );
    }
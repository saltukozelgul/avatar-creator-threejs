import { Stack, ColorInput } from "@mantine/core";
import { useCharacterCustomization } from "../../contexts/CharacterCustomization";

export const BodyConfig = () => {
    const {shirtColor, setShirtColor} = useCharacterCustomization();

    return (
    <Stack>
        <ColorInput label="Shirt Color" value={shirtColor} onChange={setShirtColor} />
    </Stack>
    );
    }
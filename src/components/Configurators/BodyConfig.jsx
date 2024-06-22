import { Stack, ColorInput, Title } from "@mantine/core";
import { useCharacterCustomization } from "../../contexts/CharacterCustomization";

export const BodyConfig = () => {
    const {shirtColor, setShirtColor} = useCharacterCustomization();

    return (
    <Stack>
        <Title order={3}>Body Settings</Title>
        <ColorInput label="Shirt Color" value={shirtColor} onChange={setShirtColor} />
    </Stack>
    );
    }
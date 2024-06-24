import { Stack, ColorInput, Title, Group, Button, Image } from "@mantine/core";
import { useCharacterCustomization } from "../../contexts/CharacterCustomization";

export const LegConfig = () => {
    const {character, setCharacter} = useCharacterCustomization();
    const {pantsColor, setPantsColor} = useCharacterCustomization();
    const {shoesColor, setShoesColor} = useCharacterCustomization();
    const {laceColor, setLaceColor} = useCharacterCustomization();
    const {soleColor, setSoleColor} = useCharacterCustomization();
    const {updateTexture} = useCharacterCustomization();


    return (
    <Stack>
        { character === 2 && <>
            <Title order={3}>Leggings Settings</Title>
        <ColorInput label="Pants Color" value={pantsColor} onChange={setPantsColor} />
        <ColorInput label="Shoes Color" value={shoesColor} onChange={setShoesColor} />
        <ColorInput label="Laces Color" value={laceColor} onChange={setLaceColor} />
        <ColorInput label="Sole Color" value={soleColor} onChange={setSoleColor} />
        </> }
        {
            character === 1 && <>
                <Title order={3}>Leggings Settings</Title>
            <ColorInput label="Shoes Color" value={shoesColor} onChange={setShoesColor} />
            </>
        }

    </Stack>
    );
    }
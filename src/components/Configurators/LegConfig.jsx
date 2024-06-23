import { Stack, ColorInput, Title, Group, Button, Image } from "@mantine/core";
import { useCharacterCustomization } from "../../contexts/CharacterCustomization";

export const LegConfig = () => {
    const {pantsColor, setPantsColor} = useCharacterCustomization();
    const {shoesColor, setShoesColor} = useCharacterCustomization();
    const {laceColor, setLaceColor} = useCharacterCustomization();
    const {soleColor, setSoleColor} = useCharacterCustomization();
    const {updateTexture} = useCharacterCustomization();


    return (
    <Stack>
        <Title order={3}>Leggings Settings</Title>
        <ColorInput label="Pants Color" value={pantsColor} onChange={setPantsColor} />
        <ColorInput label="Shoes Color" value={shoesColor} onChange={setShoesColor} />
        <ColorInput label="Laces Color" value={laceColor} onChange={setLaceColor} />
        <ColorInput label="Sole Color" value={soleColor} onChange={setSoleColor} />
        {/* <Title order={4}>Leggins Textures</Title>
        <Group>
            <Button onClick={() => updateTexture("1", "pants")} color="gray">
                <Image src="./pant_textures/1.jpg" alt="Pants Texture" width={100} height={100} />
            </Button>
            <Button onClick={() => updateTexture("2", "pants")} color="gray">
                <Image src="./pant_textures/2.jpg" alt="Pants Texture" width={100} height={100} />
            </Button>
        </Group>
        <Group>
            <Button onClick={() => updateTexture("3", "pants")} color="gray">
                <Image src="./pant_textures/3.jpg" alt="Pants Texture" width={100} height={100} />
            </Button>
            <Button onClick={() => updateTexture("4", "pants")} color="gray">
                <Image src="./pant_textures/4.jpg" alt="Pants Texture" width={100} height={100} />
            </Button>
        </Group> */}
    </Stack>
    );
    }
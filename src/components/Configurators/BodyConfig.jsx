import { Stack, ColorInput, Title, Image, Group, Button } from "@mantine/core";
import { useCharacterCustomization } from "../../contexts/CharacterCustomization";

export const BodyConfig = () => {
    const {shirtColor, setShirtColor, updateTexture} = useCharacterCustomization();

    return (
    <Stack>
        <Title order={3}>Body Settings</Title>
        <ColorInput label="Shirt Color" value={shirtColor} onChange={setShirtColor} />
        <Title order={4}>Shirt Texture</Title>
        <Group>
            <Button onClick={() => updateTexture("1", "shirt")} color="gray">
                <Image src="./shirt_textures/1.jpg" alt="Shirt Texture" width={100} height={100} />
            </Button>
            <Button onClick={() => updateTexture("2", "shirt")} color="gray">
                <Image src="./shirt_textures/2.jpg" alt="Shirt Texture" width={100} height={100} />
            </Button>
        </Group>
        <Group>
            <Button onClick={() => updateTexture("3", "shirt")} color="gray">
                <Image src="./shirt_textures/3.jpg" alt="Shirt Texture" width={100} height={100} />
            </Button>
            <Button onClick={() => updateTexture("4", "shirt")} color="gray">
                <Image src="./shirt_textures/4.jpg" alt="Shirt Texture" width={100} height={100} />
            </Button>
        </Group>
    </Stack>
    );
    }
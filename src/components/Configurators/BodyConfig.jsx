import { Stack, ColorInput, Title, Image, Group, Button } from "@mantine/core";
import { useCharacterCustomization } from "../../contexts/CharacterCustomization";

export const BodyConfig = () => {
    const {character, setCharacter} = useCharacterCustomization();
    const {shirtColor, setShirtColor, updateTexture, suitColor, setSuitColor, buttonsColor, setButtonsColor} = useCharacterCustomization();

    return (
    <Stack>
        <Title order={3}>Body Settings</Title>
        <ColorInput label="Shirt Color" value={shirtColor} onChange={setShirtColor} />
        { character === 1 && <ColorInput label="Suit Color" value={suitColor} onChange={setSuitColor} /> }
        { character === 2 && 
        <>
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
        </>
        }
        { character === 1 && <ColorInput label="Buttons and Tie Color" value={buttonsColor} onChange={setButtonsColor} /> }

    </Stack>
    );
    }
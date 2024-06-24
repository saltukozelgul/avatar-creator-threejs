import { Stack, ColorInput, Title, Group, Slider } from "@mantine/core";
import { useCharacterCustomization } from "../../contexts/CharacterCustomization";

export const ExpressionConfig = () => {
    const {character, setCharacter} = useCharacterCustomization();

    return (
        <>
           { character === 2 && <ForWomen />}
           { character === 1 && <ForMen />}
        </>
    );
    }


const ForWomen = () => {
    const {morphTargetDictionary, setMorphTargetDictionary} = useCharacterCustomization();
    const {morphTargetInfluences, setMorphTargetInfluences} = useCharacterCustomization();
    return (
        <Stack spacing={10}>
            <Title order={3}>Expressions</Title>
            {morphTargetDictionary.map((expression, index) => {
                return (
                    <div key={expression}>
                        <p style={{margin: 0}}>{expression}</p>
                        <Slider
                            key={expression}
                            label={(value) => Math.round(value * 100) + "%"}
                            value={morphTargetInfluences[index]}
                            onChange={(value) => {
                                morphTargetInfluences[index] = value;
                                setMorphTargetInfluences([...morphTargetInfluences]);
                            }}
                            min={0}
                            max={1}
                            step={0.001}
                        />
                    </div>
                );
            }
        )}
        <ColorInput opacity={0} disabled label="Light Color"/>
        </Stack>
    );
}

const ForMen = () => {
    return (
        <Stack spacing={10}>
            <Title order={3}>No expression for man</Title>
        </Stack>
    );
}

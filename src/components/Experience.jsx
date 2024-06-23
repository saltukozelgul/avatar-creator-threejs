import { OrbitControls, Stage } from "@react-three/drei";
import Woman from "./Woman";
import Bedroom from "./Bedroom";
import Nightclub from "./Nightclub";
import ConcertStage from "./ConcertStage";
import Park from "./Park";
import { CameraControls } from "../controllers/CameraControls";
import { LightControls } from "../controllers/LightControls";
import { useHudSettings } from "../contexts/HudSettings";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { useCharacterCustomization } from "../contexts/CharacterCustomization";
import Man from "./Man";

const Experience = () => {
  const { lightColor, lightIntensity, lightDistance, lightAngle } = useHudSettings();
  const { animationIndex, setAnimationIndex, animations, setAnimations} = useCharacterAnimations()
  const { character } = useCharacterCustomization()
  console.log('animations', animationIndex)
  console.log('character', character)
  return (
    <>
      <CameraControls />
      <LightControls />
      <group position={[0, -1, 0]}>
        { 0 && <Woman />}
        { 1 && <Man rotation={[0,-0.8*Math.PI,0]} position={[0,0.0,0]} /> }
        {/* { character == 1 && <Woman />}
        { character == 2 && <Man rotation={[0,-0.8*Math.PI,0]} position={[0,0.0,0]} />} */}
        
        { ![1,2,3].includes(animationIndex) && <Bedroom scale={[1.2, 1.2, 1.2 ]} position={[0,-0.08,0]} /> }
        { animationIndex == 1 && <ConcertStage scale={[0.25,0.25,0.25]} position={[0,-0.8,0]} /> }
        { animationIndex == 2 && <Park scale={[1.2, 1.2, 1.2 ]} rotation={[0,-0.45*Math.PI,0]} />}
        { animationIndex == 3 && <Nightclub /> }
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[500, 500, 1, 1]} />
        <shadowMaterial transparent opacity={lightIntensity * 0.5} />
      </mesh>
    </>
  );
};

export default Experience;

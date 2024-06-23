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

const Experience = () => {
  const { lightColor, lightIntensity, lightDistance, lightAngle } = useHudSettings();
  const { animationIndex, setAnimationIndex, animations, setAnimations} = useCharacterAnimations()
  console.log('animations', animationIndex)
  return (
    <>
      <CameraControls />
      <LightControls />
      <group position={[0, -1, 0]}>
        <Woman />
        { ![1,2,3].includes(animationIndex) && <Bedroom scale={[1.5, 1.5, 1.5 ]} position={[0,-0.08,0]} /> }
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

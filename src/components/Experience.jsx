import { OrbitControls, Stage } from "@react-three/drei";
import Woman from "./Woman";
import { Room } from "./Room";
import Nightclub from "./Nightclub";
import ConcertStage from "./ConcertStage";
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
        { ![1,3].includes(animationIndex) && <Room /> }
        { animationIndex == 1 && <ConcertStage scale={[0.3,0.3,0.3]} position={[0,-1,0]} /> }
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

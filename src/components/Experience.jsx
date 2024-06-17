import { OrbitControls } from "@react-three/drei";
import Woman from "./Woman";
import { CameraControls } from "../controllers/CameraControls";
import { LightControls } from "../controllers/LightControls";
import { useHudSettings } from "../contexts/HudSettings";

const Experience = () => {
  const { lightColor, lightIntensity, lightDistance, lightAngle } = useHudSettings();
  return (
    <>
      <CameraControls />
      <LightControls />
      <group position={[0, -1, 0]}>
        <Woman />
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

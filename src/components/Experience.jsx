import React, { useEffect, useState } from 'react';
import { OrbitControls, Stage } from "@react-three/drei";
import Woman from "./Woman";
import Nightclub from "./Nightclub";
import ConcertStage from "./ConcertStage";
import Park from "./Park";
import { CameraControls } from "../controllers/CameraControls";
import { LightControls } from "../controllers/LightControls";
import { useHudSettings } from "../contexts/HudSettings";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { useCharacterCustomization } from "../contexts/CharacterCustomization";
import Man from "./Man";
import NeonBedroom from "./NeonBedroom";

import concertStageMusic from "../assets/guitar.mp3";
import parkMusic from "../assets/park.mp3";
import nightclubMusic from "../assets/nightclub.mp3";

const Experience = () => {
  const { lightColor, lightIntensity, lightDistance, lightAngle } = useHudSettings();
  const { animationIndex, setAnimationIndex, animations, setAnimation} = useCharacterAnimations()
  const { character, scene } = useCharacterCustomization()
  
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (audio) {
      audio.pause();
    }

    let newAudio;
    switch (scene) {
      case 0:
        //newAudio = new Audio(neonBedroomMusic);
        break;
      case 1:
        newAudio = new Audio(concertStageMusic);
        break;
      case 2:
        newAudio = new Audio(parkMusic);
        break;
      case 3:
        newAudio = new Audio(nightclubMusic);
        break;
      default:
        break;
    }

    if (newAudio) {
      newAudio.loop = true;
      newAudio.play();
      setAudio(newAudio);
    }
  }, [scene]);

  return (
    <>
      <CameraControls />
      <LightControls />
      <group position={[0, -1, 0]}>
        { character === 2 && <Woman />}
        { character === 1 && <Man rotation={[0,1.2*Math.PI,0]} position={[0,0.0,0]} /> }

        { scene === 0 && <NeonBedroom scale={[1.4, 1.4, 1.4 ]} position={[0,1.75,-3.2]} /> }
        { scene === 1 && <ConcertStage scale={[0.25,0.25,0.25]} position={[0,-0.8,0]} /> }
        { scene === 2 && <Park scale={[1.2, 1.2, 1.2 ]} rotation={[0,-0.45*Math.PI,0]} />}
        { scene === 3 && <Nightclub /> }
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

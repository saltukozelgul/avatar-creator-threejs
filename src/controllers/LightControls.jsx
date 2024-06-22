import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useHudSettings } from "../contexts/HudSettings";
import * as THREE from "three";


export const LightControls = () => {
    const { lightColor, lightIntensity, lightDistance, lightAngle, lightPosX, lightPosY, lightPosZ } = useHudSettings();
    return (
        <>
      <ambientLight intensity={lightIntensity} />
        <pointLight
            position={[lightPosX, lightPosY, lightPosZ]}
            intensity={lightIntensity}
            color={lightColor}
            distance={lightDistance}
            angle={lightAngle}
            castShadow
            receiveShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
        />
        </>
    );
    }
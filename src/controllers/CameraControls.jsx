import { OrbitControls } from "@react-three/drei";
import { useCharacterCustomization } from "../contexts/CharacterCustomization";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { cameraModes } from "../enums/cameraModes";
import { useRef, useState } from "react";

const cameraPositions = {
    [cameraModes.EXP]: {
        position: new THREE.Vector3(0, 0.5, 1),
        lookAt: new THREE.Vector3(0, 0.5, 0),
    },
    [cameraModes.HEAD]: {
        position: new THREE.Vector3(0, 0.5, 1),
        lookAt: new THREE.Vector3(0, 0.5, 0),
    },
    [cameraModes.TOP]: {
        position: new THREE.Vector3(-.5, 0.2, 1.5),
        lookAt: new THREE.Vector3(0, 0.2, 0),
    },
    [cameraModes.BOTTOM]: {
        position: new THREE.Vector3(0, -0.5, 2.5),
        lookAt: new THREE.Vector3(0, -0.5, 0),
    },
};

export const CameraControls = () => {
    const {camMode, setCamMode} = useCharacterCustomization();
    const orbitControls = useRef(); 

    useFrame((state, delta) => {
        if (camMode === cameraModes.FREE) {
          return;
        }
        state.camera.position.lerp(cameraPositions[camMode].position, 3 * delta);
        orbitControls.current.target.lerp(
            cameraPositions[camMode].lookAt,
          3 * delta
        );
      });


    return (
        <>
        <OrbitControls
            ref={orbitControls}
        />
        </>
    );
    }
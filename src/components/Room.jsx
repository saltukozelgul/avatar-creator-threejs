import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export const Room = () => {
    const { scene } = useGLTF("./models/the_tack_room/scene.gltf");

    return (
        <>
        <primitive
            object={scene}
            scale={[0.2, 0.15, 0.2]} // Replace x, y, z with the desired scale values
            position={[1, -0.20, 1]} // Replace x, y, z with the desired position values
            receiveShadow
            castShadow
        />
        </>
    );
};

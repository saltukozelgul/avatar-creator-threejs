import { createContext, useContext, useState } from "react";
import * as THREE from "three";

const HudSettingsContext = createContext({})

export const HudSettingsProvider = ({ children }) => {
    const [hudColor, setHudColor] = useState('grape');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const [lightColor, setLightColor] = useState('#ffffff');
    const [lightPosition, setLightPosition] = useState(new THREE.Vector3(0, 0, 0));
    const [lightPosX, setLightPosX] = useState(0);
    const [lightPosY, setLightPosY] = useState(5);
    const [lightPosZ, setLightPosZ] = useState(5);
    const [lightIntensity, setLightIntensity] = useState(1);
    const [lightAngle, setLightAngle] = useState(Math.PI / 3);


    return (
        <HudSettingsContext.Provider value={{
            hudColor,
            setHudColor,
            lightColor,
            setLightColor,
            lightPosition,
            setLightPosition,
            lightPosX,
            setLightPosX,
            lightPosY,
            setLightPosY,
            lightPosZ,
            setLightPosZ,
            lightIntensity,
            setLightIntensity,
            lightAngle,
            setLightAngle,
            isDarkMode,
            setIsDarkMode,
        }}>
            {children}
        </HudSettingsContext.Provider>
    );
    }

export const useHudSettings = () => {
    return useContext(HudSettingsContext);
}

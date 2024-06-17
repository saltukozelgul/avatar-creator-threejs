import { createContext, useContext, useState } from "react";

const HudSettingsContext = createContext({})

export const HudSettingsProvider = ({ children }) => {
    const [hudColor, setHudColor] = useState('grape');


    return (
        <HudSettingsContext.Provider value={{
            hudColor,
            setHudColor,
        }}>
            {children}
        </HudSettingsContext.Provider>
    );
    }

export const useHudSettings = () => {
    return useContext(HudSettingsContext);
}

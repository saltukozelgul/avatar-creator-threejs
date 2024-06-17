import { createContext, useContext, useState } from 'react';
import { cameraModes } from '../enums/cameraModes';

const CharacterCustomizationContext = createContext({});

export const CharacterCustomizationProvider = ({ children }) => {
  const [camMode, setCamMode] = useState(cameraModes.FREE);
  const [hairColor, setHairColor] = useState('#6e4545');
    const [skinColor, setSkinColor] = useState('#ab8d60');
    const [shirtColor, setShirtColor] = useState('#432C9F');
    const [pantsColor, setPantsColor] = useState('#ffffff');
    const [shoesColor, setShoesColor] = useState('#63530a');
    const [eyeColor, setEyeColor] = useState('#ffffff');
    const [mouthColor, setMouthColor] = useState('#D9564D');
    const [laceColor, setLaceColor] = useState('#ffffff');
    const [soleColor, setSoleColor] = useState('#000000');

  return (
    <CharacterCustomizationContext.Provider value={{ 
        camMode, 
        setCamMode,
        hairColor,
        setHairColor,
        skinColor,
        setSkinColor,
        shirtColor,
        setShirtColor,
        pantsColor,
        setPantsColor,
        shoesColor,
        setShoesColor,
        eyeColor,
        setEyeColor,
        mouthColor,
        setMouthColor,
        laceColor,
        setLaceColor,
        soleColor,
        setSoleColor,
        }}>
      {children}
    </CharacterCustomizationContext.Provider>
  );
};

export const useCharacterCustomization = () => {
  return useContext(CharacterCustomizationContext);
};

import { createContext, useContext, useState } from 'react';
import { cameraModes } from '../enums/cameraModes';

const CharacterCustomizationContext = createContext({});

export const CharacterCustomizationProvider = ({ children }) => {
  const [camMode, setCamMode] = useState(cameraModes.FREE);

  return (
    <CharacterCustomizationContext.Provider value={{ camMode, setCamMode }}>
      {children}
    </CharacterCustomizationContext.Provider>
  );
};

export const useCharacterCustomization = () => {
  return useContext(CharacterCustomizationContext);
};

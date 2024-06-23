import { createContext, useContext, useState } from 'react';
import { cameraModes } from '../enums/cameraModes';
import { RepeatWrapping,TextureLoader, ImageUtils, Texture } from 'three';
import { useLoader } from '@react-three/fiber';

export const generateRandomRGB = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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
  // add randomize colors for all colors
  const setRandomizeCharacter = () => {
    setHairColor(generateRandomRGB());
    setSkinColor(generateRandomRGB());
    setShirtColor(generateRandomRGB());
    setPantsColor(generateRandomRGB());
    setShoesColor(generateRandomRGB());
    setEyeColor(generateRandomRGB());
    setMouthColor(generateRandomRGB());
    setLaceColor(generateRandomRGB());
    setSoleColor(generateRandomRGB());
  }

  // Facial Expressions
  const [morphTargetDictionary, setMorphTargetDictionary] = useState([]);
  const [morphTargetInfluences, setMorphTargetInfluences] = useState([]);

  // Textures for clothing
  const [shirtTextureIndex, setShirtTextureIndex] = useState(1);
  const [pantTextureIndex, setPantTextureIndex] = useState(1);


  const updateTexture = (index, part) => {
      if (part === 'shirt') {
        console.log("Updating shirt texture to: ", index);
        setShirtTextureIndex(index);
      }
      if (part === 'pants') {
        console.log("Updating pants texture to: ", index);
        setPantTextureIndex(index);
      }
    }
  

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
        morphTargetDictionary,
        setMorphTargetDictionary,
        morphTargetInfluences,
        setMorphTargetInfluences,
        setRandomizeCharacter,
        shirtTextureIndex,
        updateTexture,
        pantTextureIndex
        }}>
      {children}
    </CharacterCustomizationContext.Provider>
  );
};

export const useCharacterCustomization = () => {
  return useContext(CharacterCustomizationContext);
};

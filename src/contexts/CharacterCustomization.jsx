import { createContext, useContext, useEffect, useState } from 'react';
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
  const [character, setCharacter] = useState(2);

  const [scene, setScene] = useState(0);

  useEffect(() => {
    console.log("Character: ", character);
    if (character === 1) {
      setEyeColor("#000000");
      setShirtColor("#fff");
      setShoesColor("#000");
    } else {
      setEyeColor("#fff");
      setShirtColor("#432C9F");
      setShoesColor("#63530a");
    }
  }, [character]);

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
  const [buttonsColor, setButtonsColor] = useState('#000');
  const [suitColor, setSuitColor] = useState('#282828');
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
    setButtonsColor(generateRandomRGB());
    setSuitColor(generateRandomRGB());
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
        character,
        setCharacter,
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
        buttonsColor,
        setButtonsColor,
        suitColor,
        setSuitColor,
        morphTargetDictionary,
        setMorphTargetDictionary,
        morphTargetInfluences,
        setMorphTargetInfluences,
        setRandomizeCharacter,
        shirtTextureIndex,
        updateTexture,
        pantTextureIndex,
        setScene,
        scene,
        }}>
      {children}
    </CharacterCustomizationContext.Provider>
  );
};

export const useCharacterCustomization = () => {
  return useContext(CharacterCustomizationContext);
};

import React, {createContext, useState} from 'react';
import challenger from '../../challenges.json';
import { Alert } from 'react-native';

export const ChallengerContext = createContext();

export function ChallengerProvider({children}) {
  const [level, setLevel] = useState(1);
  const [user, setUser] = useState({nome: '', foto: ''});
  const [experienceCurrent, setExperienceCurrent] = useState(0);
  const [countChallengers, setCountChallengers] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [newChallenger, setNewChallenger] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function startChallenger() {
    const randomChallengerIndex = Math.floor(Math.random() * challenger.length);
    const randomChallenger = challenger[randomChallengerIndex];
    setNewChallenger(randomChallenger);

    setModalVisible(true);
  }


  function levelUp(){
    setLevel(level + 1);
  }

  function closeChallenger(){
    setNewChallenger(null);
    setModalVisible(false);
  }

  function completeChallenger(){
    if(!newChallenger){
      return;
    }
      const experience = experienceCurrent + newChallenger.amount;

      if(experience >= experienceToNextLevel){
        const finalExperience = experience - experienceToNextLevel;
        setExperienceCurrent(finalExperience);
        levelUp();
      }else {
        setExperienceCurrent(experience);
      }
      setCountChallengers(countChallengers + 1);
      closeChallenger();
      
  }


  return (
    <ChallengerContext.Provider
      value={{
        level,
        setUser,
        user,
        level,
        experienceToNextLevel,
        setModalVisible,
        modalVisible,
        newChallenger,
        startChallenger,
        experienceCurrent,
        completeChallenger,
        countChallengers,
        closeChallenger
      }}>
      {children}
    </ChallengerContext.Provider>
  );
}

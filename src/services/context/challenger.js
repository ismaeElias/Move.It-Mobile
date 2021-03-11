import React, {createContext, useState} from 'react';

export const ChallengerContext = createContext();


export function ChallengerProvider({children}){
  const [level, setLevel] = useState(1);
  const [user , setUser ] = useState({ nome : '', foto : ''});
  const [modalVisible, setModalVisible] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  return(
    <ChallengerContext.Provider value={{level, setUser, user, level,experienceToNextLevel,setModalVisible, modalVisible}}>
      {children}
    </ChallengerContext.Provider>
  );
}
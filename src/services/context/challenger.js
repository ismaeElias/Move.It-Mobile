import React, {createContext, useState} from 'react';

export const ChallengerContext = createContext();


export function ChallengerProvider({children}){
  const [level, setLevel] = useState(1);
  const [user , setUser ] = useState({ nome : '', foto : ''});

  return(
    <ChallengerContext.Provider value={{level, setUser, user}}>
      {children}
    </ChallengerContext.Provider>
  );
}
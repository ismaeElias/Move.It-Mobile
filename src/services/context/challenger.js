import {createContext, useState} from 'react';

export const ChallengerContext = createContext();


export function ChallengerProvider({children}){
  const [level, setLevel] = useState(1);

  return(
    <ChallengerContext.Provider value={{level}}>
      {children}
    </ChallengerContext.Provider>
  );
}
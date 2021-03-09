import React, {createContext, useState, useEffect} from 'react';

export const CountdownContext = createContext();
let Timer;

export function CountdownProvider({children}) {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(Timer);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      Timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider value={{minutes, seconds, startCountdown}}>
      {children}
    </CountdownContext.Provider>
  );
}

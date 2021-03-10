import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonStart from '../../components/Button';
import Challengers from '../../components/Challengers';
import Countdown from '../../components/Countdown';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import {CountdownContext} from '../../services/context/countdown';

function Home() {
  const {isActive, hasFinished} = useContext(CountdownContext);

  async function handlerGetUser(){
    const value = await AsyncStorage.getItem('@User_info');
    console.log('====================================');
    console.log(JSON.parse(value));
    console.log('====================================');
  }
  useEffect(()=> {
    handlerGetUser();
   
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <ExperienceBar />
        <Profile />
        <Challengers />
        <View style={styles.containerCountdown}>
        <Countdown />
        {hasFinished ? (
          <ButtonStart
            title={'Ciclo encerrado'}
            ativo={isActive}
            terminou={hasFinished}
          />
        ) : (
          <>
            {isActive ? (
              <ButtonStart
                title={'Abandonar ciclo'}
                ativo={isActive}
                terminou={hasFinished}
              />
            ) : (
              <ButtonStart
                title={'Iniciar um ciclo'}
                ativo={isActive}
                terminou={hasFinished}
              />
            )}
          </>
        )}
        </View>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  profile: {
    height: 100,
    padding: 10,
  },
  containerCountdown : {
    marginTop : 5
  }
});

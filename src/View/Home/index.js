import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ButtonStart from '../../components/Button';
import Challengers from '../../components/Challengers';
import Countdown from '../../components/Countdown';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import {
  CountdownContext,
  CountdownProvider,
} from '../../services/context/countdown';

function Home() {
  const {isActive, hasFinished} = useContext(CountdownContext);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <ExperienceBar />
        <Profile />

        <Challengers />
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
});

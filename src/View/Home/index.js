import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonStart from '../../components/Button';
import Challengers from '../../components/Challengers';
import Countdown from '../../components/Countdown';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import {CountdownProvider} from '../../services/context/countdown';

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <ExperienceBar />
        <Profile />
        <CountdownProvider>
          <Challengers />
          <Countdown />
          <ButtonStart title={'Iniciar novo ciclo'} />
        </CountdownProvider>
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

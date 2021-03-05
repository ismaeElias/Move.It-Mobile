import React from 'react';
import {View, StyleSheet} from 'react-native';
import Challengers from '../../components/Challengers';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <ExperienceBar />
        <Profile />
        <Challengers />
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F5',
  },
  profile: {
    height: 100,
    padding: 10,
  },
});

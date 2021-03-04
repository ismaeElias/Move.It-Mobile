import React from 'react'
import {View, Text,StyleSheet} from 'react-native';
import ExperienceBar from '../../components/ExperienceBar';
function Home(){

  return(
    <View style={styles.container}>
      <ExperienceBar/>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#F2F3F5'
  }
});
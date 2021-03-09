import React, {useContext} from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PlayArrow from '../../public/play-arrow.svg';
import { CountdownContext } from '../../services/context/countdown';

function ButtonStart({title}) {
  const { startCountdown } = useContext(CountdownContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>{
        startCountdown();
      }}>
        <Text style={styles.text}>{title}</Text>
        <PlayArrow />
      </TouchableOpacity>
    </View>
  );
}

export default ButtonStart;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5965E0',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    borderRadius: 5,
  },
  text: {
    color: '#FFF',

    textAlign: 'center',
  },
});

import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PlayArrow from '../../public/play-arrow.svg';

function ButtonStart({title}) {

  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{title}</Text><PlayArrow/>
      </TouchableOpacity>
    </View>
  );
}

export default ButtonStart;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems : 'center',
  },
  button : {
    backgroundColor: '#5965E0',
    padding: 15,
    alignItems : 'center',
    justifyContent : 'center',
    width: '100%',
    flexDirection : 'row',
    borderRadius : 5
  },
  text: {
    color: '#FFF',
    
    textAlign: 'center'
  },
});


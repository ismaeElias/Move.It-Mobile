import React, { useContext } from 'react';

import {View, Text, StyleSheet} from 'react-native';
import { ChallengerContext } from '../../services/context/challenger';

function Challengers() {
  const { countChallengers } = useContext(ChallengerContext);

  return (
    <View style={styles.container}>
      <View style={styles.challenger}>
        <Text style={styles.text}>Desafios completos</Text>
        <Text style={styles.text}>{countChallengers || 0}</Text>
      </View>
    </View>
  );
}

export default Challengers;

const styles = StyleSheet.create({
  container : {
    height: 60,
    width: '100%',
    backgroundColor: '#D9D9D9',
    padding: 10,
    justifyContent : 'center',
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    
  },
  challenger : {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#666666',
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  text : {
    color : '#666666',
    fontWeight : 'bold',
    fontSize : 15
  }
});

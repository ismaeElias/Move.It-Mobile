import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

function Countdown() {
  return (
    <View style={styles.container}>
      <Text style={styles.countdown}>0</Text>
      <Text style={styles.countdown}>0</Text>

      <Text style={{fontSize: 60, color: '#2E384D'}}>:</Text>

      <Text style={styles.countdown}>0</Text>
      <Text style={styles.countdown}>0</Text>
    </View>
  );
}

export default Countdown;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginTop: 10,
    height: 150,
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  countdown: {
    backgroundColor : '#E6E7E9',
    borderRadius : 5,
    margin : 1,
    fontSize: 80,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
    color: '#2E384D',
  },
});

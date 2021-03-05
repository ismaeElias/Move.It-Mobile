import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ExperienceBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.colorText}>0 exp</Text>
        <View style={styles.experienceBar}>
          <View style={{width: '50%', backgroundColor: '#13c401', height: 10, borderRadius: 5}}></View>
          <Text style={[styles.experience, styles.colorText,{transform : [{ translateX: -20 }], left: '50%' }] }>50 exp</Text>
        </View>
      <Text style={styles.colorText}>600 exp</Text>
    </View>
  );
}

export default ExperienceBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 20
  },
  experienceBar: {
    backgroundColor: '#DCDDE0',
    height: 10,
    width: '70%',
    position : 'relative',
    borderRadius: 5
  },
  colorText : {
    color: '#666666',
    fontWeight : 'bold'
  },
  experience : {
    position : 'absolute',
    top : 10,
  }
});

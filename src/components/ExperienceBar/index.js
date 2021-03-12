import React, { useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ChallengerContext } from '../../services/context/challenger';

function ExperienceBar() {
  const { experienceToNextLevel, experienceCurrent } = useContext(ChallengerContext);
  const [percent , setPercent] = useState(0);

  useEffect(()=> {
    const percentExperience = (100 * experienceCurrent)/experienceToNextLevel;
    setPercent(percentExperience);
    
  },[experienceCurrent]);

  return (
    <View style={styles.container}>
      <Text style={styles.colorText}>0 exp</Text>
        <View style={styles.experienceBar}>
          <View style={{width: `${percent}%`, backgroundColor: '#13c401', height: 10, borderRadius: 5}}></View>
          <Text style={[styles.experience, styles.colorText,{transform : [{ translateX: -20 }], left: `${percent}%` }] }>{experienceCurrent || 0} exp</Text>
        </View>
      <Text style={styles.colorText}>{experienceToNextLevel} exp</Text>
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
    marginBottom: 25
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

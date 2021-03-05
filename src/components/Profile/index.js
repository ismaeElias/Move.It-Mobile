import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import Level from '../../public/level.svg';

function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.image}
          source={{uri: 'https://github.com/ismaeElias.png'}}
        />
        <View style={styles.containerLevel}> 
          <Text>Ismael Elias</Text>
          <Text style={styles.level}> <Level /> Level 1</Text>
        </View>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 10,
  },
  profile: {
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    height: '100%',
    borderRadius: 5,
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFF'
  },
  level: {
    width: '100%',
  },
  containerLevel : {
    flexDirection : 'column'
  }
});

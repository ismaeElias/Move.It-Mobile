import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import Level from '../../public/level.svg';
import Challengers from '../Challengers';

function Profile() {
  return (
      <View style={styles.profile}>
        <Image
          style={styles.image}
          source={{uri: 'https://github.com/ismaeElias.png'}}
        />
        <View style={styles.containerLevel}>
          <Text style={styles.nameUser}>Ismael Elias</Text>
          <Text>
            <Level /> Level 1
          </Text>
        </View>
      </View>
      
  );
}

export default Profile;

const styles = StyleSheet.create({
    profile: {
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    height: '100%',
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    flexDirection: 'row',
    
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFF',
    marginLeft: 10,
  },
  nameUser: {
    fontWeight: 'bold',
    fontSize: 18,

  },
  containerLevel: {
    marginLeft: 5,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

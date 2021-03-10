import React, { useContext } from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import Level from '../../public/level.svg';
import { ChallengerContext } from '../../services/context/challenger';
import GithubLogo from '../../public/github.png';

function Profile() {
  const { user, level } = useContext(ChallengerContext);
  return (
      <View style={styles.profile}>
        <Image
          style={styles.image}
          source={{uri: `${user.foto || GithubLogo}`}}
        />
        <View style={styles.containerLevel}>
          <Text style={styles.nameUser}>{user.nome}</Text>
          <Text>
            <Level /> Level {level} 
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

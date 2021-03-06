import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GithubApi } from '../../services/api';

import Arrow from '../../public/arrow.svg';
import LinearGradient from 'react-native-linear-gradient';


function Input({navigation}) {
  const [user, setUser] = useState('');

  async function handlerGetUser(user) {
    try {
      await GithubApi.get(`/users/${user}`).then(async (response) => {
        
        const { data } = response;
        const values = JSON.stringify({ nome : data.name ,foto : data.avatar_url})
        await AsyncStorage.setItem('@User_info', values);
        
        navigation.push('Home');
      });
    } catch (error) {
      console.warn(error);
    }
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4953b8', 'rgba(73,83,184,0.5)']}
        start={{x: 0.0, y: 1}}
        end={{x: 0.5, y: 1.0}}
        style={{width: '100%'}}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário!"
          placeholderTextColor="#B2B9FF"
          value={user}
          onChangeText={(text) => {
            setUser(text);
          }}
        />
      </LinearGradient>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => {
          if (user) {
            handlerGetUser(user);
          }
        }}>
        <Text>
          <Arrow />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    width: '90%',
    height: 50,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#4953B8',
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  input: {
    color: '#B2B9FF',
    width: '100%',
    paddingRight: 60,
    paddingLeft: 5,
    borderTopStartRadius: 5,
  },
  buttonHover: {
    backgroundColor: 'red',
  },
});

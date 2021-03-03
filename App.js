import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Input from './src/components/Input';

import SvgBackground from './src/public/logo-background.svg';
import Logo from './src/public/logo.svg';
import GitHub from './src/public/icon-github.svg';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <SvgBackground width={300} height={200} />
        <Logo width={250} />
        <View style={styles.textoAcesso}>
          <GitHub />
          <Text style={styles.colorText}>
            
            Acesse com o github
          </Text>
        </View>
        <Input />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5965E0',
  },
  header: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  colorText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyled: {
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 5,
    marginBottom: 5,
  },
  buttonStyled: {
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  textoAcesso : {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : 'row',
    marginBottom : 10
  }
});

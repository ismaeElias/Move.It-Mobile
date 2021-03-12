import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import Input from '../../components/Input';

import SvgBackground from '../../public/logo-background.svg';
import Logo from '../../public/logo.svg';
import GitHub from '../../public/icon-github.svg';

function Login({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.main}>
        <SvgBackground width={300} height={200} />
        <Logo width={250} />
        <View style={styles.textoAcesso}>
          <GitHub />

          <Text style={styles.colorText}>Acesse com o github</Text>
        </View>

        <Input navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
    backgroundColor: '#5965E0',
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
  textoAcesso: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
});

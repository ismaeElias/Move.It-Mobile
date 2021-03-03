import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oláa</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 30,
    backgroundColor: 'purple',
    alignItems : 'center',
    justifyContent: 'center'
  },
  title : {
    color: '#fff',
    fontWeight: '600'
  }
});




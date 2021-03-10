import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './src/View/Login';
import Home from './src/View/Home';
import {CountdownProvider} from './src/services/context/countdown';
import {ChallengerProvider} from './src/services/context/challenger';

const Stack = createStackNavigator();

function App() {
  return (
    <ChallengerProvider>
      <CountdownProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </CountdownProvider>
    </ChallengerProvider>
  );
}

export default App;

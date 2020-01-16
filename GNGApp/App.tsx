import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IntroScreen from './src/screens/IntroScreen';
import LoginScreen from './src/screens/LoginScreen';
import LoginInScreen from './src/screens/LoginInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const AppNavigator = createStackNavigator(
  {
    Intro: IntroScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Profile: ProfileScreen,
    LoginIn: LoginInScreen
  },
  {
    initialRouteName: 'Intro',
    defaultNavigationOptions: {
      title: 'Introduction'
    }
  }
);

export default createAppContainer(AppNavigator);

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { RootStackScreen } from './src/stack/RootStack.js';
import { AddModal } from './Modal';
import Modal from 'react-native-modalbox';
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <RootStackScreen />
    );
  }
}
'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default class Initial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flash: RNCamera.Constants.FlashMode.torch 
    };
  }

  //tela sueca
  flashFunction = () => {
    if ( this.state.flash == RNCamera.Constants.FlashMode.torch ) {
    this.setState({ flash: RNCamera.Constants.FlashMode.off });
  }
  
  if ( this.state.flash == RNCamera.Constants.FlashMode.off ) {
    this.setState({ flash: RNCamera.Constants.FlashMode.torch });
  }

  };

  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={this.state.flash}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>ADS</Text> 
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable} onPress={this.flashFunction}>
            <Text style={styles.buttonText}>Flash</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
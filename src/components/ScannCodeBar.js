import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import { RNCamera } from "react-native-camera";

class ScannCodeBar extends Component{

  onBarCodeRead = (e) => {
    Alert.alert("Barcode value is"+e.data ,"Barcode type is"+e.type);
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {this.camera = ref}}
          style={styles.preview}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
        >
          <View style={{
            padding: 20
          }}>
            <Text style={{ color: 'white' }}>{'Back'}</Text>
          </View>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
});

export default  ScannCodeBar;
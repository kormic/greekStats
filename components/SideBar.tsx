import React from 'react';
import {Dimensions} from 'react-native';
import {Container, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';

const SideBar = () => {
  return (
    <Container style={Styles.sideBar}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </Container>
  );
};

export default SideBar;

const Styles = StyleSheet.create({
  sideBar: {
    width: Dimensions.get('window').width / 2,
    backgroundColor: '#aad',
  },
});

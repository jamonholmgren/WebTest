/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [welcome, setWelcome] = useState(false);
  const [world, setWorld] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView testID="welcome">
        <View>
          <TouchableOpacity
            onPress={() => setWelcome(true)}
            testID="hello_button">
            <Text>Show hello</Text>
          </TouchableOpacity>
          {welcome && <Text>Hello!!!</Text>}
          <TouchableOpacity
            onPress={() => setWorld(true)}
            testID="world_button">
            <Text>Show world</Text>
          </TouchableOpacity>
          {world && <Text>World!!!</Text>}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

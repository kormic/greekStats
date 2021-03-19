import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Layout} from './containers/Layout';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Layout />
      </SafeAreaView>
    </>
  );
};

// const styles = StyleSheet.create({});

export default App;

import { a } from '@rhsoftware/common';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text>{a()}</Text>
    </SafeAreaView>
  );
};

export default App;

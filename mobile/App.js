import React from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import Routes from './src/routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#3399ff" />
    <Routes />
  </>
);

export default App;

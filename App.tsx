import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppContainer from './src';
import {AuthProvider} from './src/contexts/auth/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppContainer />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;

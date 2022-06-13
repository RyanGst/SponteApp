import React from 'react';

import {useAuth} from './contexts/auth/AuthContext';
import SplashScreen from './pages/splash';
import AppRoutes from './routes/app.routes';
import AuthRoutes from './routes/auth.routes';

const AppContainer = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return <SplashScreen />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default AppContainer;

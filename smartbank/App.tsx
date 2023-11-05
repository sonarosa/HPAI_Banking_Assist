import { NavigationContainer } from "@react-navigation/native";

import AuthProvider, { useAuth } from "./features/auth/AuthContext";
import { LoginStack } from "./navigation/LoginStack";
import { MainStack } from "./navigation/MainStack";
import React from 'react';
import { View, Text } from 'react-native';
import PersistentNotification from './eventTracking/NotificationService';
import { ApiProvider } from './eventTracking/ApiContext';

export default function App() {
  return (
    <ApiProvider>
    <NavigationContainer>
      <AuthProvider>
        <Router />
        <PersistentNotification />
      </AuthProvider>
    </NavigationContainer>
    </ApiProvider>
  );
}

function Router() {
  const { authStatus } = useAuth();

  return authStatus === "signed-in" ? <MainStack /> : <LoginStack />;
}

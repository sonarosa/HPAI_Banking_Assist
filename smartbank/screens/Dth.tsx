import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const DTHScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>DTH Services</Text>
        <Text style={{ fontSize: 16, marginTop: 20 }}>
          Welcome to our DTH services screen. Here, you can access various features and services related to your DTH needs.
        </Text>
        <Text style={{ fontSize: 16, marginTop: 20 }}>
          Some of the services provided may include DTH recharges, channel subscriptions, account management, and more. Explore the options to manage your DTH services conveniently.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DTHScreen;

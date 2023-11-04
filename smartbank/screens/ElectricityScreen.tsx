import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const ElectricityScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Electricity Bill Payments</Text>
        <Text style={{ fontSize: 16, marginTop: 20 }}>
          Welcome to our electricity bill payment screen. Here, you can conveniently pay your electricity bills and access various related features.
        </Text>
        <Text style={{ fontSize: 16, marginTop: 20 }}>
          Some of the services provided may include bill payment, viewing your billing history, setting up auto-pay, and receiving notifications. Explore the options to manage your electricity bills with ease.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ElectricityScreen;

import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const FASTagIssuingBanks = [
  { name: 'South Indian Bank', logo: require('../assets/sib.png') },
  // Add more South Indian banks here
  
  // Add more banks here
];

const FASTagRechargeScreen = () => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Select a Bank for FASTag Recharge</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>South Indian Bank</Text>
      <FlatList
        data={FASTagIssuingBanks.filter((bank) => bank.name === 'South Indian Bank')}
        horizontal
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ alignItems: 'center', margin: 10 }}>
            <Image source={item.logo} style={{ width: 100, height: 100 }} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Other Issuing Banks</Text>
      <FlatList
        data={FASTagIssuingBanks.filter((bank) => bank.name !== 'South Indian Bank')}
        horizontal
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ alignItems: 'center', margin: 10 }}>
            <Image source={item.logo} style={{ width: 100, height: 100 }} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* Add the recharge functionality here */}
    </View>
  );
};

export default FASTagRechargeScreen;

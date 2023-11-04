import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

const DTHOperators = [
  { name: 'Dish TV', icon: require('./assets/dish_tv.png') },
  { name: 'Tata Sky', icon: require('./assets/tata_sky.png') },
  { name: 'Airtel Digital TV', icon: require('./assets/airtel_tv.png') },
  // Add more DTH operators here
];

const DTHRechargeScreen = () => {
  const [selectedOperator, setSelectedOperator] = useState(DTHOperators[0]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Select DTH Operator</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {DTHOperators.map((operator, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedOperator(operator)}
            style={{
              alignItems: 'center',
              marginHorizontal: 10,
              borderWidth: selectedOperator === operator ? 2 : 0,
              borderColor: selectedOperator === operator ? 'blue' : 'transparent',
              borderRadius: 10,
            }}
          >
            <Image
              source={operator.icon}
              style={{ width: 100, height: 100 }}
            />
            <Text>{operator.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={{ fontSize: 20, marginTop: 20 }}>Selected Operator: {selectedOperator.name}</Text>
      {/* Add the recharge button and functionality here */}
    </View>
  );
};

export default DTHRechargeScreen;

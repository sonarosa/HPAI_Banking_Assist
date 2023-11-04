import React from "react";
import { View, Text, Button } from "react-native";

export default function PayToContactsScreen({ navigation }) {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>BHIM UPI Screen</Text>
      <Text style={{ marginVertical: 20 }}>
        Welcome to the Pay To Contacts screen. You can customize this screen with your
        features and content.
      </Text>
      <Button title="Go Back" onPress={handleBack} />
    </View>
  );
}

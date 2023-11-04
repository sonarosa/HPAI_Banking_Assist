import React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DashboardScreen = () => {
  const navigation = useNavigation();

  const handleFeaturePress = (featureLabel) => {
    switch (featureLabel) {
      case "BHIM UPI":
        navigation.navigate("BhimUPI"); // Navigate to the BHIM UPI screen
        break;
      case "Pay to Contacts":
        navigation.navigate("PayToContacts"); // Navigate to the Pay to Contacts screen
        break;
      case "Insurance":
        navigation.navigate("InsuranceScreen"); // Navigate to the Insurance screen
        break;
      case "Net Banking":
        navigation.navigate("NetBankingScreen"); // Navigate to the Net Banking screen
        break;
      case "Bank Holidays":
        navigation.navigate("BankHolidaysScreen"); // Navigate to the Bank Holidays screen
        break;
      case "Calculator":
        navigation.navigate("CalculatorScreen"); // Navigate to the Calculator screen
        break;
      case "Deposit Rates":
        navigation.navigate("DepositRatesScreen"); // Navigate to the Deposit Rates screen
        break;
      case "Online Payment":
        navigation.navigate("OnlinePaymentScreen"); // Navigate to the Online Payment screen
        break;
      default:
        console.log(`Pressed ${featureLabel}`);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#dbe4f1" }}>
      <Image
        source={require("../assets/dashboard.jpg")}
        style={{ flex: 1, resizeMode: "contain", alignSelf: "flex-start" }}
      />

      <View
        style={{
          backgroundColor: "#c7222a",
          width: "92.8888%",
          height: "5.4%",
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white", textAlign: "center" }}>
          REGISTER NOW
        </Text>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
          <FeatureCard
            icon="ios-cash"
            label="BHIM UPI"
            onPress={() => handleFeaturePress("BHIM UPI")}
          />
          <FeatureCard
            icon="ios-people"
            label="Pay to Contacts"
            onPress={() => handleFeaturePress("Pay to Contacts")}
          />
          <FeatureCard
            icon="ios-umbrella"
            label="Insurance"
            onPress={() => handleFeaturePress("Insurance")}
          />
          <FeatureCard
            icon="ios-globe"
            label="Net Banking"
            onPress={() => handleFeaturePress("Net Banking")}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <FeatureCard
            icon="ios-calendar"
            label="Bank Holidays"
            onPress={() => handleFeaturePress("Bank Holidays")}
          />
          <FeatureCard
            icon="ios-calculator"
            label="Calculator"
            onPress={() => handleFeaturePress("Calculator")}
          />
          <FeatureCard
            icon="ios-cash"
            label="Deposit Rates"
            onPress={() => handleFeaturePress("Deposit Rates")}
          />
          <FeatureCard
            icon="ios-card"
            label="Online Payment"
            onPress={() => handleFeaturePress("Online Payment")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

function FeatureCard({ icon, label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "59%",
          height: 77,
          marginBottom: 20,
        }}
      >
        <Ionicons name={icon} size={36} color="black" />
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 10 }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default DashboardScreen;

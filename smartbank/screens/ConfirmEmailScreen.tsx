import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DashboardScreen = () => {
  const navigation = useNavigation();

  const handleMoreInfoPress = () => {
    // Add your navigation logic here or any other action you want to perform
    navigation.navigate("MoreInfoScreen"); // Navigate to a screen with more information
  };
  

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
      case "Mobile":
          navigation.navigate("MobileScreen"); // Navigate to the Online Payment screen
          break;
      case "DTH":
            navigation.navigate("DTH"); // Navigate to the Online Payment screen
            break;
      case "Electricity":
            navigation.navigate("ElectricityScreen"); // Navigate to the Online Payment screen
            break;
      case "SIB Fastag":
              navigation.navigate("Fastag"); // Navigate to the Online Payment screen
            break;
      default:
      case "Debit Card":
          navigation.navigate("DebitCardScreen"); // Navigate to the Online Payment screen
          break;

      case "Cheque Book Services":
            navigation.navigate("ChequeScreen"); // Navigate to the Online Payment screen
            break;
      case "Complaints":
              navigation.navigate("ComplaintsScreen"); // Navigate to the Online Payment screen
              break;

      case "Update KYC":
                navigation.navigate("UpdateKYCScreen"); // Navigate to the Online Payment screen
                break;
      
        console.log(`Pressed ${featureLabel}`);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#dbe4f1" }}>
      <Image
        source={require("../assets/dashboard.jpg")}
        style={{ flex: 1, resizeMode: "contain", alignSelf: "flex-start" }}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
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
      <View style={{ marginVertical: 20, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Recharge & Pay Bills</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Earn more rewards points by paying bills</Text>
          <TouchableOpacity onPress={() => handleMoreInfoPress()}>
            <Ionicons name="ios-arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <BillFeatureCard
          icon="ios-phone-portrait"
          label="Mobile"
          onPress={() => handleFeaturePress("Mobile")}
        />
        <BillFeatureCard
          icon="ios-desktop"
          label="DTH"
          onPress={() => handleFeaturePress("DTH")}
        />
        <BillFeatureCard
          icon="ios-flash"
          label="Electricity"
          onPress={() => handleFeaturePress("Electricity")}
        />
        <BillFeatureCard
          icon="ios-car"
          label="SIB Fastag"
          onPress={() => handleFeaturePress("SIB Fastag")}
        />
      </View>

      <View style={{ marginVertical: 20, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Services & Request</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Get all services at your fingertip</Text>
          <TouchableOpacity onPress={() => handleMoreInfoPress()}>
            <Ionicons name="ios-arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <BillFeatureCard
          icon="md-card"
          label="Debit Card"
          onPress={() => handleFeaturePress("Debit Card")}
        />
        <BillFeatureCard
          icon="md-albums"
          label="Cheque Book Services"
          onPress={() => handleFeaturePress("Cheque Book Services")}
        />
        <BillFeatureCard
          icon="md-warning"
          label="Complaints"
          onPress={() => handleFeaturePress("Complaints")}
        />
        <BillFeatureCard
          icon="md-person"
          label="Update KYC"
          onPress={() => handleFeaturePress("Update KYC")}
        />
      </View>

      <View style={{ marginVertical: 20, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Financial Tools & Enquiries</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Get your enquiries resolved instantly</Text>
          <TouchableOpacity onPress={() => handleMoreInfoPress()}>
            <Ionicons name="ios-arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <BillFeatureCard
          icon="ios-calculator"
          label="Calculator"
          onPress={() => handleFeaturePress("Calculator")}
        />
        <BillFeatureCard
          icon="ios-calendar"
          label="Bank Holidays"
          onPress={() => handleFeaturePress("Bank Holidays")}
        />
        <BillFeatureCard
          icon="ios-help-circle"
          label="FAQs"
          onPress={() => handleFeaturePress("FAQs")}
        />
        <BillFeatureCard
          icon="ios-lock-closed"
          label="Locker Availability"
          onPress={() => handleFeaturePress("Locker Availability")}
        />
      </View>

      <View style={{ marginVertical: 20, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Payments</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Make payments at your comfort</Text>
          <TouchableOpacity onPress={() => handleMoreInfoPress()}>
            <Ionicons name="ios-arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
  <BillFeatureCard
    icon="ios-school"
    label="College/School fee"
    onPress={() => handleFeaturePress("College/School fee")}
  />
  <BillFeatureCard
    icon="ios-gift"
    label="Offerings"
    onPress={() => handleFeaturePress("Offerings")}
  />
  <BillFeatureCard
    icon="ios-globe"
    label="Remit Money Abroad"
    onPress={() => handleFeaturePress("Remit Money Abroad")}
  />
  <BillFeatureCard
    icon="ios-card"
    label="Online Payments"
    onPress={() => handleFeaturePress("Online Payments")}
  />
</View>
</ScrollView>


  
  );
};

function FeatureCard({ icon, label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 77,
          marginBottom: 10, 
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

function BillFeatureCard({ icon, label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 77,
          marginBottom: 10,
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

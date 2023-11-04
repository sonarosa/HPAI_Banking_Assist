import React from "react";
import { View, Text, SafeAreaView, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';

export default function ConfirmEmailScreen() {
  const navigation = useNavigation();

  const featureIcons = [
    { name: "cash", label: "BHIM UPI" },
    { name: "contacts", label: "Pay to Contacts" },
    { name: "shield", label: "Insurance" },
    { name: "wallet", label: "Net Banking" },
    { name: "calendar", label: "Bank Holidays" },
    { name: "calculator", label: "Calculator" },
    { name: "list", label: "Deposit Rates" },
    { name: "payment", label: "Online Payment" },
  ];

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
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        <Pressable onPress={() => navigation.navigate("QRCodeScanner")}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white", textAlign: "center" }}>
          View_ifsc
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "white",
          paddingHorizontal: 1,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
          {featureIcons.map((icon, index) => (
            <FeatureCard key={index} icon={icon} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

function FeatureCard({ icon }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 10,
        width: "25%",
        height: "27%",
        marginBottom: 28.80,
      }}
    >
      <Ionicons name={icon.name} size={26} color="black" />
      <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 10 }}>
        {icon.label}
      </Text>
    </View>
  );
}

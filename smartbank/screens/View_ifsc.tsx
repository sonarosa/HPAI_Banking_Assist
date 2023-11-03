import React, { useState } from "react";
import { View, Text, TextInput, Picker, ScrollView } from "react-native";

const ViewIFSC = () => {
  const [selectedState, setSelectedState] = useState("Select State");
  const [selectedBank, setSelectedBank] = useState("Select Bank");
  const [city, setCity] = useState("");
  const [branchName, setBranchName] = useState("");
  const ifscCode = "ABCD0123456"; // Replace with the actual IFSC code

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          View IFSC Code
        </Text>

        <Text style={{ marginBottom: 10 }}>IFSC Code: {ifscCode}</Text>

        <Picker
          selectedValue={selectedState}
          onValueChange={(itemValue) => setSelectedState(itemValue)}
        >
          <Picker.Item label="Select State" value="Select State" />
          <Picker.Item label="State 1" value="State 1" />
          <Picker.Item label="State 2" value="State 2" />
          {/* Add more states as needed */}
        </Picker>

        <Picker
          selectedValue={selectedBank}
          onValueChange={(itemValue) => setSelectedBank(itemValue)}
        >
          <Picker.Item label="Select Bank" value="Select Bank" />
          <Picker.Item label="Bank 1" value="Bank 1" />
          <Picker.Item label="Bank 2" value="Bank 2" />
          {/* Add more banks as needed */}
        </Picker>

        <TextInput
          placeholder="City"
          value={city}
          onChangeText={(text) => setCity(text)}
          style={{ borderColor: "gray", borderWidth: 1, borderRadius: 5, marginBottom: 10, padding: 5 }}
        />

        <TextInput
          placeholder="Branch Name"
          value={branchName}
          onChangeText={(text) => setBranchName(text)}
          style={{ borderColor: "gray", borderWidth: 1, borderRadius: 5, marginBottom: 10, padding: 5 }}
        />
      </View>
    </ScrollView>
  );
};

export default ViewIFSC;

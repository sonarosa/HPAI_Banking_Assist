import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { useEffect } from "react";
import { Image } from "react-native";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

import { LoginNavigationProps } from "../navigation/LoginStack";
import { supabase } from "../supabase";
import { classNames } from "../utils/classNames";

const schema = z.object({
  password: z.string().min(6), // Add validation for password
});

export default function LoginScreen() {
  const navigation = useNavigation<LoginNavigationProps>();
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { isSubmitting, isValid },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    setFocus("password");
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white pt-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex-1 pb-7">
          <View className="h-11 w-full justify-center">
            <Pressable
              className="absolute top-0 left-0 h-11 w-11 items-center justify-center"
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color="#2791B5" />
            </Pressable>
          </View>
          <View className="flex-1 px-4">
            <Image
              style={{
                resizeMode: "contain",
                width: 200,
                height: 100,
                left: 10,
              }}
              source={require("../assets/sib.png")}
            />
            <Text className="mt-5 text-[34px] font-bold text-[#0C212C] text-center">
              Login
            </Text>
            <Text className="mt-5 text-[13px] font-medium text-red-600">
              Sign in to South Indian Bank App.
            </Text>
            <Pressable
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Gray-black with less opacity
                borderRadius: 8, // You can adjust the border radius as needed
                flexDirection: 'row', // To align the icon and text horizontally
                alignItems: 'center', 
               
              }}
              className={classNames(
                "h-12 w-full flex-row items-center justify-center space-x-2 rounded-xl",
                isValid ? "bg-primary-500" : "bg-neutral-200"
              )}
              onPress={() => {
                // Implement fingerprint functionality here

                // Replace the fingerprint implementation with actual fingerprint logic
                // For example, you can use Biometric Authentication APIs for fingerprint verification

                // Check if fingerprint is valid
                const isFingerprintValid = true; // Replace with actual fingerprint check

                if (isFingerprintValid) {
                  navigation.navigate("Home"); // Navigate to Home on successful fingerprint
                } else {
                  Alert.alert("Fingerprint Invalid", "Please enter your password.", [
                    { text: "OK" },
                  ]);
                }
              }}
            >
              <Text
                style={{
                  color: "white", // White color
                  borderRadius: 8, // You can adjust the border radius as needed
                }}
                className={classNames(
                  "text-[16px] font-bold",
                  isValid ? "text-white" : "text-neutral-400"
                )}
              >
                Fingerprint
              </Text>
              {isSubmitting && <ActivityIndicator />}
            </Pressable>
            <Text className="mt-5 text-[13px] font-medium text-red-600 text-center">
              OR enter your password:
            </Text>
            <Controller
              control={control}
              name="password"
              rules={{ required: true }}
              render={({ field: { onChange, value, ref } }) => (
                <TextInput
                  className="mt-6 h-14 w-full rounded-xl border-[1px] border-[#E7EAEB] px-3.5"
                  textContentType="password" // Use the appropriate textContentType
                  secureTextEntry={true} // Hide the password
                  placeholder="Password"
                  placeholderTextColor="#2B6173"
                  editable={!isSubmitting}
                  value={value}
                  onChangeText={onChange}
                  ref={ref}
                />
              )}
            />
            <View className="px-4">
              <Text className="mt-4 w-full text-center text-[13px] font-bold text-primary-500">
                {"Don't have an account? "}
                <Text
                  onPress={() => navigation.navigate("SignUp")}
                  className="text-primary-400"
                >
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

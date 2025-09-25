import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuth } from "../features/auth/AuthContext";
import { MainNavigationProps } from "../navigation/MainStack";
import { classNames } from "../utils/classNames";

export default function WelcomeScreen() {
  const { signOut } = useAuth();
  const navigation = useNavigation<MainNavigationProps>();

  return (
    <LinearGradient
      colors={["#265565", "#288FB1", "#265565"]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 pt-1 pb-7">
        <View className="h-11 w-full justify-center">
          <Pressable
            className="absolute top-0 left-0 h-11 w-11 items-center justify-center"
            onPress={() => {
              Alert.alert(
                "Log out",
                "You will be returned to the login screen",
                [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  { text: "OK", onPress: () => signOut() },
                ]
              );
            }}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
        </View>
        <View className="flex-1">
          <Image
            style={{ resizeMode: "contain" }}
            className="w-full flex-1"
            source={require("../assets/welcome-to-smartbank.png")}
          />
        </View>
        <View className="px-4">
          <Text className="mt-1 text-center text-[34px] font-bold text-white">
            Welcome to SmartBank
          </Text>
          <Text className="mt-2 mb-8 text-center text-[13px] font-medium text-neutral-300">
            Spend, save and manage your money in one place. Your money is safe
            with us.
          </Text>
          <Pressable
            className={classNames(
              "mb-4 h-12 w-full items-center justify-center rounded-xl bg-[#E8F569]"
            )}
            onPress={() => navigation.navigate("ChooseAccountType")}
          >
            <Text
              className={classNames("text-[16px] font-bold text-[#134555]")}
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

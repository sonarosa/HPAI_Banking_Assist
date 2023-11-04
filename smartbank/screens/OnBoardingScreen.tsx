import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LoginNavigationProps } from "../navigation/LoginStack";
import { trackEvent }  from "../eventTracking/EventTracking";


export default function OnBoardingScreen() {
  const navigation = useNavigation<LoginNavigationProps>();

  return (
    <SafeAreaView className="flex-1 bg-white py-7 px-4">
      <View className="flex-1">
        <Text className="text-[13px] font-medium text-neutral-600">
          SOUTH INDIAN BANK
        </Text>
        <Text className="mt-1.5 text-[24px] font-bold text-[#420D09]">
        The best choice for your Personal Banking, NRI Banking, Business Banking, Online Banking.
        </Text>
        <Image
          source={require("../assets/sib_mirror.jpg")}
          className="mt-10 w-full flex-1"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View>
        <Pressable
          className="h-12 w-full items-center justify-center rounded-xl bg-red-500"
          onPress={() => 
          {
            const eventData = {
              event: 'button pressed',
              eventName: 'signin_button',
              timestamp: Date.now(),
            };
            trackEvent(eventData);
            
            navigation.navigate("SignUp")
          }
            
          }

        >
          <Text className="text-[16px] font-semibold text-white">Sign up</Text>
        </Pressable>
        <Pressable
          className="mt-4 h-12 w-full items-center justify-center rounded-xl bg-red-200"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-[16px] font-semibold text-primary-500">
            Log in
          </Text>
        </Pressable>
       
      </View>
    </SafeAreaView>
  );
}
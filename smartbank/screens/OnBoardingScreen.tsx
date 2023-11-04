import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LoginNavigationProps } from "../navigation/LoginStack";
import { trackEvent }  from "../eventTracking/EventTracking";
import { useApi } from '../eventTracking/ApiContext';

export default function OnBoardingScreen() {

  // const { setSecondApiPromise } = useApi();
  
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
          onPress={async () => 
          {
            const eventData = {
              event: 'button pressed',
              eventName: 'signup',
              timestamp: Date.now(),
            };
            const response = await trackEvent(eventData);
            console.log("API Response:", JSON.stringify(response, null, 2)); // Log the response data
            
            navigation.navigate("SignUp")
          }
            
          }

        >
          <Text className="text-[16px] font-semibold text-white">Sign up</Text>
        </Pressable>
        <Pressable
          className="mt-4 h-12 w-full items-center justify-center rounded-xl bg-red-200"
          onPress={() => {
            const eventData = {
              event: 'button pressed',
              eventName: 'login button',
              timestamp: Date.now(),
            };
            const response   = trackEvent(eventData);
            
            navigation.navigate("Login")}}
        >
          <Text className="text-[16px] font-semibold text-primary-500">
            Log in
          </Text>
        </Pressable>
        <Pressable
          className="mt-4 h-12 w-full items-center justify-center rounded-xl bg-red-200"
          onPress={() => navigation.navigate("ConfirmEmail")}
        >
          <Text className="text-[16px] font-semibold text-primary-500">
            Dashboard
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
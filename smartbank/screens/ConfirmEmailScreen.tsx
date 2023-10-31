import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Linking, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  LoginNavigationProps,
  LoginStackParams,
} from "../navigation/LoginStack";
import { classNames } from "../utils/classNames";

type RouteProps = NativeStackScreenProps<
  LoginStackParams,
  "ConfirmEmail"
>["route"];

export default function ConfirmEmailScreen() {
  const {
    params: { email },
  } = useRoute<RouteProps>();
  const navigation = useNavigation<LoginNavigationProps>();

  return (
    <LinearGradient
      colors={["#FFFADA", "#FFFFFF", "#D30000"]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 pt-1 pb-7">
        <View className="h-11 w-full justify-center">
          <Pressable
            className="absolute top-0 left-0 h-11 w-11 items-center justify-center"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
        </View>
        <View className="flex-1">
          <Image
            style={{ resizeMode: "contain",width:300,
            height: 100 ,left:40}}
            className="w-full flex-1"
            source={require("../assets/sib.png")}
          />
        </View>
        <View className="px-4">
          <Text className="mt-1 text-center text-[34px] font-bold text-black" >
            Confirm your email
          </Text>
          <Text className="mt-2 mb-8 text-center text-[13px] font-medium text-black-300">
            {`We just sent you an email to ${email}`}
          </Text>
          <Pressable
          style={{
            backgroundColor: "#A52A2A", 
            borderColor:"#FFFFFF",
            borderWidth:1,// Change the background color
            borderRadius: 8,
          }}
            className={classNames(
              "mb-4 h-12 w-full items-center justify-center rounded-xl bg-[#E8F569]"
            )}
            // TODO: Replace with universal solution. https://github.com/includable/react-native-email-link
            onPress={() => Linking.openURL("googlegmail://")}
          >
            <Text
              className={classNames("text-[16px] font-bold text-[#134555] bg-white-500 color-white")}
            >
              Open email app
            </Text>
          </Pressable>
          <Pressable
          style={{
            backgroundColor: "#FFFFFF", 
            borderColor:"#A52A2A",
            borderWidth:1,// Change the background color
            borderRadius: 8,
          }}
            className={classNames(
              "h-12 w-full items-center justify-center rounded-xl bg-primary-600"
            )}
          >
            <Text className={classNames("text-[16px] font-bold text-red ")}>
              I didn't receive my email
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

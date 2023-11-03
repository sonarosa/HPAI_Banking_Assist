import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import LoginScreen from "../screens/LoginScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import SignUpScreen from "../screens/SignUpScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import View_ifsc from "../screens/View_ifsc";

export type LoginStackParams = {
  OnBoarding: undefined;
  Login: undefined;
  SignUp: undefined;
  ConfirmEmail: { email: string };
  View_ifsc: undefined;
};

export type LoginNavigationProps =
  NativeStackScreenProps<LoginStackParams>["navigation"];

const Stack = createNativeStackNavigator<LoginStackParams>();

export function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Dashboard" component={WelcomeScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <Stack.Screen name="View_ifsc" component={View_ifsc} />

    </Stack.Navigator>
  );
}

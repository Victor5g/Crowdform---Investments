import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

import Login from "../pages/login";
import SingUp from "../pages/signUp";

import Tab from "./app.tab.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Screen name="Login" component={Login} />
        <Screen name="SingUp" component={SingUp} />
        <Screen name="HomeTab" component={Tab} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;

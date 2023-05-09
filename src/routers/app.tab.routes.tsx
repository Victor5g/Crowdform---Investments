import { Text, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo, Fontisto, Foundation } from "@expo/vector-icons";

import Home from "../pages/home";
import Trade from "../pages/trade";

const { Navigator, Screen } = createBottomTabNavigator();

const Tab = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 100 : 75,
          paddingVertical: 10,
          backgroundColor: "#000000",
        },
        tabBarItemStyle: { height: 55 },
        tabBarLabel: ({ focused, children }) => (
          <Text
            style={{
              color: focused ? "#FFFFFF" : "#cccccc",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            {children}
          </Text>
        ),
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? "#FFFFFF" : "#cccccc"}
            />
          ),
        }}
      />
      <Screen
        name="Trade"
        component={Trade}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="arrow-swap"
              size={24}
              color={focused ? "#FFFFFF" : "#cccccc"}
            />
          ),
        }}
      />
      <Screen
        name="Portifolio"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Foundation
              name="graph-pie"
              size={30}
              color={focused ? "#FFFFFF" : "#cccccc"}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default Tab;

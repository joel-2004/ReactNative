import React from "react";
import CurrentWeather from "./CurrentWeather";
import City from "./City";
import UpcomingWeather from "./UpcomingWeather";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();//initialising the tab object
const TabNavigator = () => {
    return (
        <>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "grey",
                tabBarStyle: {
                    backgroundColor: "skyblue"
                },
                headerStyle: {
                    backgroundColor: "skyblue",
                },
                headerTitleAlign: "center",

            }
            }>
                <Tab.Screen
                    name="Current"
                    component={CurrentWeather}
                    options={{ tabBarIcon: ({ focused }) => <Feather name="sun" color={focused ? "blue" : "grey"}></Feather> }}
                ></Tab.Screen>
                <Tab.Screen
                    name="Upcoming"
                    component={UpcomingWeather}
                    options={{ tabBarIcon: ({ focused }) => <Feather name="navigation" color={focused ? "blue" : "grey"}></Feather> }}
                ></Tab.Screen>
                <Tab.Screen
                    name="City"
                    component={City}
                    options={{ tabBarIcon: ({ focused }) => <Feather name="home" color={focused ? "blue" : "grey"}></Feather> }}
                ></Tab.Screen>
            </Tab.Navigator>
        </>
    );
};

export default TabNavigator;

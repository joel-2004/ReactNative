import React from "react";
import CurrentWeather from "./CurrentWeather";
import City from "./City";
import UpcomingWeather from "./UpcomingWeather";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();//initialising the tab object
const TabNavigator = ({ weather }) => {
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
                    options={{ tabBarIcon: ({ focused }) => <Feather name="sun" color={focused ? "blue" : "grey"}></Feather> }}
                >{() => <CurrentWeather weatherData={weather.list[0]}></CurrentWeather>}</Tab.Screen>
                <Tab.Screen
                    name="Upcoming"

                    options={{ tabBarIcon: ({ focused }) => <Feather name="navigation" color={focused ? "blue" : "grey"}></Feather> }}
                >{() => <UpcomingWeather weatherData={weather.list}></UpcomingWeather>}</Tab.Screen>
                <Tab.Screen
                    name="City"

                    options={{ tabBarIcon: ({ focused }) => <Feather name="home" color={focused ? "blue" : "grey"}></Feather> }}
                >{() => <City weatherData={weather.city}></City>}</Tab.Screen>
            </Tab.Navigator>
        </>
    );
};

export default TabNavigator;

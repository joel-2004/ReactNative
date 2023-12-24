
import City from "./components/City";
import CurrentWeather from "./components/CurrentWeather";
import UpcomingWeather from "./components/UpcomingWeather";
import FlatListDemo from "./learn/2_FlatList";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons"
const Tab = createBottomTabNavigator();//initialising the tab object
const App = () => {

    return (
        <NavigationContainer>
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
                />
                <Tab.Screen
                    name="Upcoming"
                    component={UpcomingWeather}
                    options={{ tabBarIcon: ({ focused }) => <Feather name="navigation" color={focused ? "blue" : "grey"}></Feather> }}
                />
                <Tab.Screen
                    name="City"
                    component={City}
                    options={{ tabBarIcon: ({ focused }) => <Feather name="home" color={focused ? "blue" : "grey"}></Feather> }}
                />

            </Tab.Navigator>
        </NavigationContainer>

    )
}
export default App;




import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import TabNavigator from "./components/TabNavigator";

import useDataFetch from "./components/useDataFetch"

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const API_KEY = "80306c3cc8aeb385768fd7a4ccd25daa"
const App = () => {
  const [loading, error, weather] = useDataFetch();

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <TabNavigator weather={weather}></TabNavigator>
      </NavigationContainer>

    )
  }
  return (
    <View style={Styles.loading}>
      <ActivityIndicator size={"large"} color={"blue"} ></ActivityIndicator>
      {/* //loading screen */}
    </View>
  );

}

const Styles = StyleSheet.create({
  loading: {

    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
})

export default App;



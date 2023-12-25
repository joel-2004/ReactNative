
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import TabNavigator from "./components/TabNavigator";

import useDataFetch from "./components/useDataFetch"

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const API_KEY = "80306c3cc8aeb385768fd7a4ccd25daa"
const App = () => {
  const [loading, error, weather] = useDataFetch();
  console.log(loading)
  console.log(error);
  console.log(weather);
  // if (location) {
  //   console.log(location);
  // }
  if (weather) {
    console.log(weather);
  }

  // if (loading) {
  //   return (
  //     <View style={Styles.loading}>
  //       <ActivityIndicator size={"large"} color={"blue"} ></ActivityIndicator>
  //       {/* //loading screen */}
  //     </View>
  //   );
  // }
  return (
    <NavigationContainer>
      <TabNavigator></TabNavigator>
    </NavigationContainer>

  )
}

const Styles = StyleSheet.create({
  loading: {

    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
})

export default App;



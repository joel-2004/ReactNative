
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import Error from "./components/Error";
import TabNavigator from "./components/TabNavigator";
import useDataFetch from "./components/useDataFetch"
import TextInputDemo from "./learn/6_TextInput";
const App = () => {
  const [loading, error, weather] = useDataFetch();

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <TabNavigator weather={weather}></TabNavigator>

      </NavigationContainer>

    )
  }

  return (
    <View style={Styles.loading}>
      {error ? <Error></Error> : <ActivityIndicator size={"large"} color={"blue"} ></ActivityIndicator>}
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



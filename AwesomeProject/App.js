import React from "react";
import { View, Text } from "react-native";


const App = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      {
        /*
        the core components are View,Text,...
        View is like a div or container fluid from bootStrp or <> </> from react
        */
      }
      <Text>Hello</Text>
    </View>
  )
}

export default App;
import React from "react";
import { View, Text, StyleSheet } from "react-native";


const App = () => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            {//Inline styling
            }
            <Text style={styleForText}>Hello</Text>
            <Text style={styles.styleForText2}>Text2</Text>
            <Text style={styles.styleForText3}>Text3</Text>
        </View>
    )
}

const styleForText = {
    //java obj passed for styling
    backgroundColor: "skyblue",
    padding: 10,
    margin: 10
}

//Import stylesheet from react-native
const styles = StyleSheet.create({
    styleForText2: {
        backgroundColor: "lime",
        padding: 10,
        margin: 10
    },
    styleForText3: {
        backgroundColor: "pink",
        padding: 10,//note that tha values are unit less, i.e 10px. They are density independent pixels
        margin: 10
    }
})


export default App;

{
    /*
    the core components are View,Text,...
    View is like a div or container fluid from bootStrap or <> </> from react
  
    Styling:
    We use java objects for styling
    Css is camel cased font-size in css would be fontSize in reactNative
    */
}

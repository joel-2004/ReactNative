import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const CurrentWeather = () => {
    const temp = 50;
    return (
        <>
            <View style={{ marginTop: 50, alignItems: "center", flex: 1 }}>
                <Feather name="sun" size={24}></Feather>
                <Text style={styles.weather}>Weather </Text>
                <Text style={styles.temperature}>Temperature {temp} degree </Text>

                <View style={{ backgroundColor: "yellow", flexDirection: "row" }}>
                    {/* to appear on same line */}
                    <Text style={styles.high}>High:8</Text>
                    <Text style={styles.high}>Low:6</Text>
                </View>
            </View>

            <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
                {/* to appear on bottom */}
                <Text style={styles.description}>Its sunny</Text>
                <Text style={styles.description}>Ready to play</Text>
            </View>

        </>

    )
}


//Import stylesheet from react-native
const styles = StyleSheet.create({
    weather: {
        backgroundColor: "skyblue",
        fontSize: 22,
        padding: 10,
        margin: 10
    },
    temperature: {
        backgroundColor: "lime",
        fontSize: 16,
        padding: 10,
        margin: 10
    },
    high: {

        fontSize: 14,
        padding: 10,
        margin: 10
    },
    description: {
        fontSize: 12,
        padding: 10

    }
})


export default CurrentWeather;

{
    /*
    the core components are View,Text,...
    View is like a div or container fluid from bootStrap or <> </> from react
  
    Styling:
    We use java objects for styling
    Css is camel cased font-size in css would be fontSize in reactNative
    */
}

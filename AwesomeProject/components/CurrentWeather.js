import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { weatherType } from "./weatherType";
import moment from "moment"
const CurrentWeather = ({ weatherData }) => {



    const { main: { temp, temp_max, temp_min }, weather, dt_txt } = weatherData;
    const weatherCondition = weather[0].main;

    return (
        <>
            <View style={{ alignItems: "center", flex: 1, backgroundColor: weatherType[weatherCondition].backgroundColor }}>
                <Feather name={weatherType[weatherCondition].icon} size={24}></Feather>
                <Text style={styles.weather}>Weather </Text>
                <Text style={styles.temperature}>Temperature {temp}°</Text>
                <Text style={styles.lastupdate}>Last updated : {moment(dt_txt).format("MMM Do YYYY, h:mm a")} </Text>

                <View style={{ flexDirection: "row" }}>
                    {/* to appear on same line */}

                    <Text style={styles.high}>High:{temp_max}°</Text>
                    <Text style={styles.high}>Low:{temp_min}°</Text>
                </View>
                <Text style={styles.weather}>{weather[0].description}</Text>
                <Text style={styles.weather}>{weatherType[weatherCondition].message}</Text>
            </View>
            {/*
            <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
                {/* to appear on bottom 
                <Text style={styles.description}>Its sunny</Text>
                <Text style={styles.description}>Ready to play</Text>
            </View>
    */}
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
        backgroundColor: "indianred",
        fontSize: 16,
        padding: 10,
        margin: 10
    },
    lastupdate: {
        backgroundColor: "white",
        fontSize: 16,
        padding: 10,
        margin: 10
    },
    high: {
        fontWeight: "800",
        fontSize: 16,
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

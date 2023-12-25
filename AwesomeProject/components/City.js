import React from "react";
import { StyleSheet, Text, View, ImageBackground, StatusBar, SafeAreaView } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';
import moment from "moment";
const City = ({ weatherData }) => {
    const { name, country, population, sunrise, sunset, timezone } = weatherData;
    const formattedSunrise = moment(sunrise * 1000).utcOffset(timezone / 60).format("h:mm:ss a");
    const formattedSunset = moment(sunset * 1000).utcOffset(timezone / 60).format("h:mm:ss a");
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{country}</Text>
            <AntDesign name="user" size={24} color="black" style={styles.text} />
            <Text style={styles.text}>Population: {population}</Text>
            <View style={styles.sunrise}>
                <Feather name="sunrise" size={24} color="black" />
                <Text>{formattedSunrise}</Text>
                <Feather name="sunset" size={24} color="black" />
                <Text>{formattedSunset}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

        //The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons.
    },
    img: {

        height: 725,
        width: 500,

    },
    text: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        fontSize: 24,

    }
    ,
    sunrise: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
    }
})

export default City;

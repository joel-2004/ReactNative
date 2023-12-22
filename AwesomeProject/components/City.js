import React from "react";
import { StyleSheet, Text, View, ImageBackground, StatusBar, SafeAreaView } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';
const City = () => {
    return (
        <SafeAreaView style={styles.view}>
            <ImageBackground source={require("../assets/Kodais.jpg")} style={styles.img}>
                <Text style={styles.text}>City</Text>
                <Text style={styles.text}>Country</Text>
                <AntDesign name="user" size={24} color="black" style={styles.text} />
                <Text style={styles.text}>Population: 70000</Text>
                <View style={styles.sunrise}>
                    <Feather name="sunrise" size={24} color="black" />
                    <Text>6.00 AM</Text>

                    <Feather name="sunset" size={24} color="black" />
                    <Text>6.30 PM</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: StatusBar.currentHeight || 0
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

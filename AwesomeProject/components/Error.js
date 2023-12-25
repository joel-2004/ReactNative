import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons"
const Error = () => {
    return <>
        <View style={Styles.View}>
            <Text style={Styles.Text}>Oops,Something went wrong!!</Text>
            <Feather name="frown" size={64}></Feather>
        </View>
    </>
};

const Styles = StyleSheet.create({
    View: {
        backgroundColor: "indianred",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    Text: {
        fontSize: 24,
        padding: 20
    }
})
export default Error;

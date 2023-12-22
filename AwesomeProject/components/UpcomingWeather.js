import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Feather } from "@expo/vector-icons"
import { ImageBackground } from "react-native";

import DATA from "./Data";
const Weather = (props) => {
    const { dt_txt, min, max } = props;
    return (
        <View style={styles.weather}>
            <Feather name="sun" size={20}></Feather>
            <Text>Date:{dt_txt}</Text>
            <View style={styles.text}>
                <Text style={{ paddingRight: 10 }}>Min:{min}</Text>
                <Text>Max:{max}</Text>
            </View>
        </View>
    );
}

const UpcomingWeather = () => {
    const render = ({ item }) => (
        <Weather dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}></Weather>
    )
    return (
        <View style={styles.view}>
            <Text>Upcoming Weather</Text>
            <ImageBackground source={require("../assets/weather.jpg")} style={styles.image} >

                <FlatList data={DATA} renderItem={render} keyExtractor={(item) => item.dt_txt}></FlatList>
                {/* <View style={{ flexDirection: "row" }}>
                <Image source={require("../assets/weather.jpg")} style={styles.image}></Image>
                <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.image}></Image>
                 //to get image from an url use uri 
            </View> */}

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange"
    },
    weather: {
        padding: 2,
        alignItems: 'center',
        justifyContent: "center",
        margin: 5,

    },
    text: {
        flexDirection: "row"
    },
    image: {
        height: 500,
        width: 500
    }

})

export default UpcomingWeather;
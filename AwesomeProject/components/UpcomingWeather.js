import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Feather } from "@expo/vector-icons"
import { ImageBackground } from "react-native";
import { weatherType } from "./weatherType";
import moment from "moment"
const Weather = (props) => {
    // console.log(props);
    const { dt_txt, min, max, condition } = props;
    return (
        <View style={styles.weather}>
            <Feather name={weatherType[condition].icon} size={20}></Feather>
            <Text>Day:{moment(dt_txt).format("dddd")}</Text>
            <Text>Time:{moment(dt_txt).format("h:mm:ss a")}</Text>
            <View style={styles.text}>
                <Text style={{ paddingRight: 10 }}>Min:{min}°</Text>
                <Text>Max:{max}°</Text>
            </View>
        </View>
    );
}

const UpcomingWeather = ({ weatherData }) => {
    // console.log(weatherData);
    // const weatherCondition = weatherData[0].main;
    // console.log(weatherCondition);
    const render = ({ item }) => (
        <Weather dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} condition={item.weather[0].main}></Weather>
    )
    return (
        <View style={styles.view}>
            <Text>Upcoming Weather</Text>
            <FlatList data={weatherData} renderItem={render} keyExtractor={(item) => item.dt_txt}></FlatList>
            {/* <View style={{ flexDirection: "row" }}>
                <Image source={require("../assets/weather.jpg")} style={styles.image}></Image>
                <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.image}></Image>
                 //to get image from an url use uri 
            </View> */}

        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue"
    },
    weather: {
        padding: 4,
        alignItems: 'center',
        justifyContent: "center",
        margin: 7,
    },
    text: {
        flexDirection: "row"
    }

})

export default UpcomingWeather;
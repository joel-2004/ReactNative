import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Feather } from "@expo/vector-icons"
import { ImageBackground } from "react-native";


//data
const DATA = [
    {
        "dt_txt": "2022-08-30 16:00:00",
        "main": {
            "temp_min": 296.34,
            "temp_max": 298.24,
        },
        "weather": [
            {
                "main": "Rain",
            }
        ],
    },
    {
        "dt_txt": "2022-08-30 17:00:00",
        "main": {
            "temp_min": 296.2,
            "temp_max": 296.31,

        },
        "weather": [
            {
                "main": "Rain",
            }
        ]
    },
    {
        "dt_txt": "2022-08-30 18:00:00",
        "main": {
            "temp_min": 292.84,
            "temp_max": 294.94,

        },
        "weather": [
            {
                "main": "Rain",
            }
        ]
    }
]

//new Component for each of the data
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
            {/* ImageBackground */}
            <ImageBackground source={require("../assets/weather.jpg")} style={styles.image} >


                {/* FlatList */}
                <FlatList data={DATA} renderItem={render} keyExtractor={(item) => item.dt_txt}></FlatList>

                {/* Image */}
                <View style={{ flexDirection: "row" }}>
                    <Image source={require("../assets/weather.jpg")} style={styles.image}></Image>
                    <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.image}></Image>
                 //to get image from an url use uri
                </View>

            </ImageBackground>
        </View>
    );
}


//styles
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
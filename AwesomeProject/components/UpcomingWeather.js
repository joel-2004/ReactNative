import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons"

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
const Weather = (props) => {
    const { dt_txt, min, max } = props;
    return (
        <View style={styles.weather}>
            <Feather name="sun" size={20}></Feather>
            <Text>Date:{dt_txt}</Text>
            <Text>Min:{min}</Text>
            <Text>Max:{max}</Text>

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
            <FlatList data={DATA} renderItem={render} keyExtractor={(item) => item.dt_txt}></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    weather: {
        padding: 2,
        alignItems: 'center',
        margin: 5,

    }
})

export default UpcomingWeather;
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons"

const UpcomingWeather = () => {
    return (
        <SafeAreaView style={styles.view}>

            <Text>Upcoming Weather</Text>
            <Feather name="star"></Feather>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default UpcomingWeather;
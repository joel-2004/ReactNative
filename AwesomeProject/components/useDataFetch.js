import React from "react";
import * as Location from "expo-location"
import { useState, useEffect } from "react";
const API_KEY = "80306c3cc8aeb385768fd7a4ccd25daa"
const useDataFetch = () => {
    const [loading, isLoading] = useState(true);
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);


    const fetchData = async () => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            const data = await res.json();
            setWeather(data);
            isLoading(false);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setError("Permission denied");
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setLat(location.coords.latitude);
            setLon(location.coords.longitude);
            await fetchData();
        })()
    }, [lat, lon])

    return [loading, error, weather];
};

export default useDataFetch;

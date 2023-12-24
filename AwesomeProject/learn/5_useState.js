import React, { useState } from "react";
import { Button, Text } from "react-native";

const useStateCounter = () => {
    const [value, setValue] = useState(0);
    return (
        <>
            <Text>
                {value}
            </Text>
            <Button title="Increase" onPress={() => setValue(value + 1)}></Button>
            <Button title="Decrease" onPress={() => setValue(value - 1)}></Button>
        </>
    );
};

export default useStateCounter;

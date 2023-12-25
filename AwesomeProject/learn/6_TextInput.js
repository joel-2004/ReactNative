import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native";

const TextInputDemo = () => {
    const [value, setValue] = useState(null);
    console.log(value);
    return (<>
        <TextInput style={{ height: 40 }} placeholder="type" defaultValue={value}
            onChangeText={(e) => setValue(e)}></TextInput>
    </>

    );
};

export default TextInputDemo;

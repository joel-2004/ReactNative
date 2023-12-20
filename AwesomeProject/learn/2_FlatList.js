import { View, Text, FlatList } from "react-native";
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];
const Item = ({ id, title }) => {
    return (
        <View>
            <Text>{id}</Text>
            <Text>{title}</Text>
        </View>
    );
}
/*flat List supports just plain arrays like const data=["joel","me","etc"],as well as array of objects,
use flat list for a usual list
section list only supports array of objects, us e section list when breaking up a list into sections*/
const FlatListDemo = () => {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Flat List</Text>
            <FlatList data={DATA} renderItem={({ item }) => <Item id={item.id} title={item.title}></Item>}></FlatList>

        </View>)
}

export default FlatListDemo;
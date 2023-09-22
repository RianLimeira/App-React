import { Button, FlatList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "../../components/Card";



export default function Details() {

  const [data, setData] = useState([])

  useEffect(() => {
    readData();
  },[])

  async function readData(){
    const response = await AsyncStorage.getItem('@rianApp:users');
    const json = JSON.parse(response);
    setData(json);
  }

  const navigation = useNavigation();

  return (
    <View className='flex-1 bg-black'>
      <Text className='text-red-500'> Detalhes de um produto...</Text>

      <Button title="Ir para Home" onPress={() => {
        navigation.navigate('Inicio')
      }} />
      
      <FlatList data={data.slice(0,6)} renderItem={({ index, item}) => (
                <Card title={[`Title: ${item.title} `]} image={item.url} />
            ) } keyExtractor={(item, index) => index} />
    </View>
  )
}
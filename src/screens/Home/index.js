import { Button, FlatList, SectionList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";

const DATA=[
    {
        title:'Como trabalhar com React Native',
        bannerURL: 'https://github.com/RianLimeira.png',
    },
    {
        title:'Como trabalhar com Expo?',
        bannerURL: 'https://github.com/RianLimeira.png',
    },
    {
        title:'Como trabalhar com Listas',
        bannerURL: 'https://github.com/RianLimeira.png'
    },
    {
        title:'Como trabalhar com React Native',
        bannerURL: 'https://github.com/RianLimeira.png',
    },
    {
        title:'Como trabalhar com Expo?',
        bannerURL: 'https://github.com/RianLimeira.png',
    },
    {
        title:'Como trabalhar com Listas',
        bannerURL: 'https://github.com/RianLimeira.png'
    },
]

export default function Home(){

    const [data, setData] = useState([]);
    
    const navigation = useNavigation();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos').then((res) => res.json().then(json => setData(json))).catch(err => console.warn(err));
    },[]);
    // Exemplo com axios
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/photos').then(res => setData(res.data)).catch(err => console.warn(err));
    // },[]);

    return(
        <View className='flex-1 items-center bg-black'>
            <Text className='text-right right-28 mb-4 ml-1 mt-2 text-red-500'> Bem vindo a Home!!!</Text>

            <Button title="Ir para os produtos-detalhes" onPress={() => {
                navigation.navigate('Detalhes')
            }} />
            {/* data.slice() faz com que limite a quantidade de items na tela */}
            <FlatList data={data.slice(0,6)} renderItem={({ index, item}) => (
                <Card title={[`Cidade: ${item.title} `]} image={item.url} />
            ) } keyExtractor={(item, index) => index} />

           {/* <SectionList sections={DATA} renderItem={({ index, item}) => (
                <Card title={item} image={item.bannerURL} />
           )} keyExtractor={(item, index) => index} /> */}
        </View> 
             
        )
    }
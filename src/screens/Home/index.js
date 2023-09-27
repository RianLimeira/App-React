import { Button, FlatList, SectionList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { getDatabase, ref, get, child } from "firebase/database";

const DATA = [
    {
        title: 'Como trabalhar com React Native',
        bannerURL: 'https://github.com/RianLimeira.png',
    },
    {
        title: 'Como trabalhar com Expo?',
        bannerURL: 'https://github.com/RianLimeira.png',
    },
    {
        title: 'Como trabalhar com Listas',
        bannerURL: 'https://github.com/RianLimeira.png'
    },
    {
        title: 'Como trabalhar com React Native',
        bannerURL: 'https://github.com/RianLimeira.png',
    },
    {
        title: 'Como trabalhar com Expo?',
        bannerURL: 'https://github.com/RianLimeira.png',
    },
    {
        title: 'Como trabalhar com Listas',
        bannerURL: 'https://github.com/RianLimeira.png'
    },
]

export default function Home() {

    const [data, setData] = useState([]);

    const navigation = useNavigation();

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/photos').then((res) => res.json().then(json => setData(json))).catch(err => console.warn(err));
    // },[]);

    // Exemplo com axios
    useEffect(() => {
        //Firebase Consulta
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(Object.values(snapshot.val()));
                setData(Object.values(snapshot.val()));
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

        //MySql
        // axios.get('http://192.168.100.58:8080/users').then(res => {
        //     setData(res.data.users);
        // }).catch(err => console.warn(err));
    }, []);

    // async storage armazena somente dados simples
    // Para guardar um JSON, se converte para uma string simples
    // async function saveData(json){
    //     const string = JSON.stringify(json)
    //     await AsyncStorage.setItem('@rianApp:users',string)
    //     alert('Usuario salvo na memoria');
    // }

    return (
        <View className='flex flex-1 items-center bg-black'>
            <Text className='text-right right-28 mb-4 ml-1 mt-2 text-red-500'> Bem vindo a Home!!!</Text>

            <Button title="Ir para os produtos-detalhes" onPress={() => {
                navigation.navigate('Detalhes')
            }} />
            <Button title="Ir para animações" onPress={() => {
                navigation.navigate('Animations')
            }} />
            {/* data.slice() faz com que limite a quantidade de items na tela */}
            <FlatList data={data} renderItem={({ index, item }) => (
                <Card title={`Nome: ${item.name}`} image={item.photo} />
            )} keyExtractor={(item, index) => index} />

            {/* <SectionList sections={DATA} renderItem={({ index, item}) => (
                <Card title={item} image={item.bannerURL} />
           )} keyExtractor={(item, index) => index} /> */}
        </View>

    )
}
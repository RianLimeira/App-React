import { Button, FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
// import { Card } from "../../components/Card";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";


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
    // useFocusEffect(
    //     React.useCallback(() => {
    //Firebase:
    //       const dbRef = ref(getDatabase());
    //       get(child(dbRef, `users/`)).then((snapshot) => {
    //           if (snapshot.exists()) {
    //               console.log(Object.values(snapshot.val()));
    //               setData(Object.values(snapshot.val()));
    //           } else {
    //               console.log("No data available");
    //           }
    //       }).catch((error) => {
    //           console.error(error);
    //       });
    
    //MySql:
    // axios.get('http://192.168.100.141:8080/users').then(res => {
    //         console.log(res.data.users);
    //         setData(res.data.users);
    //     }).catch(err => console.warn(err));
        
    // }, [])
    // );
        
    // async storage armazena somente dados simples
    // Para guardar um JSON, se converte para uma string simples
    // async function saveData(json){
    //     const string = JSON.stringify(json)
    //     await AsyncStorage.setItem('@rianApp:users',string)
    //     alert('Usuario salvo na memoria');
    // }

    const Separator = () => (
        <View style={styles.separator} />
      );
      
      const styles = StyleSheet.create({
        separator: {
          marginVertical: 8,
        },
      });

    return (
        <View className='flex flex-1 items-center bg-black pl-2'>
            <Text className='text-right right-28 mb-4 ml-1 mt-2 text-red-500'> Bem vindo a Home!!!</Text>
            <Image className='w-screen h-52 mb-8' source={require('../../../assets/Images/logo.png')} />
            <View className="flex-row space-x-2 items-center self-center m-5 rounded">
            <TouchableOpacity className="w-20 h-[40px] bg-red-600 items-center justify-center" onPress={() => {
                navigation.navigate('Detalhes')
            }}>
                <Text>ADICIONAR</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="w-20 h-[40px] bg-red-600 items-center justify-center" onPress={() => {
                navigation.navigate('Animations')
            }}>
                <Text> Ir para animações </Text>
            </TouchableOpacity>
            </View>
            <Separator />
            <Button title="LOGIN" onPress={() => {
                navigation.navigate('Login')
            }} />
            
            {/* data.slice() faz com que limite a quantidade de items na tela */}
            {/* <FlatList data={data} renderItem={({ index, item }) => (
                <Card title={`Nome: ${item.name}`} image={'https://github.com/RianLimeira.png'} />
            )} keyExtractor={(item, index) => index} /> */}

            {/* <SectionList sections={DATA} renderItem={({ index, item}) => (
                <Card title={item} image={item.bannerURL} />
           )} keyExtractor={(item, index) => index} /> */}
        </View>

    )
}
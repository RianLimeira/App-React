import { Button, FlatList, SectionList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card } from "../../components/Card";

export default function Home(){
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
    const navigation = useNavigation();

    return(
        <View className='flex-1 items-center bg-black'>
            <Text className='text-right right-28 mb-4 ml-1 mt-2 text-red-500'> Bem vindo a Home!!!</Text>

            <Button title="Ir para os produtos-detalhes" onPress={() => {
                navigation.navigate('Detalhes')
            }} />
            <FlatList data={DATA} renderItem={({ index, item}) => (
                <Card title={item.title} image={item.bannerURL} />
            ) } keyExtractor={(item, index) => index} />

           {/* <SectionList sections={DATA} renderItem={({ index, item}) => (
                <Card title={item} image={item.bannerURL} />
           )} keyExtractor={(item, index) => index} /> */}
        </View> 
             
        )
    }
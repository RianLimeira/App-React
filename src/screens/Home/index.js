import { Button, FlatList, Text, View } from "react-native";
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

           
        </View> 
             
        )
    }

            {/* <View className='mt-3 border-[2px] border-red-900 rounded-[30px] '> */}
            {/* Imagem */ }
            {/* <View className=' bg-blue-700 relative m-0 cursor-pointer border-4 shadow-lg rounded-[30px] items-center'>
                <View className="flex h-28 items-center justify-center">
                    <Text className="absolute mx-auto text-center right text-2xl ">
                        Image goes here
                    </Text>
                </View>
            </View> */}
            {/* {/* Descrição */}
            {/* <View className="p-2 border-x-8 -top-1 ">
                <Text className='text-sm text-center items-center justify-center text-blue-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis 27
                beatae nulla, atque et sunt ad voluptatum quidem impedit numquam quia?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                beatae nulla, atque et sunt ad voluptatum quidem impedit numquam quia?
                </Text>    
            </View>   */}

        {/* Stack de tecnologias utilizada */}
        {/* <View className="flex flex-row items-center m-2">
        <Text className="text-white border border-blue-300 rounded-2xl px-2 my-1 mx-1">
        #React Native
        </Text>
        <Text className="text-white border border-blue-300 rounded-2xl px-2 my-1 mx-1">
        #Redux
        </Text>
        <Text className="text-white border border-blue-300 rounded-2xl px-2 my-1 mx-1">
        #Javascript
        </Text>
        </View> */}
        {/* Links */}
        {/* <View className="flex flex-row items-center rounded-b-xl border-t-2 self-center ">
            <Text className="border rounded-2xl bg-blue-600 text-white shadow-sm p-1 px-2 m-2"
            onPress={() => {
                navigation.navigate('Detalhes')  
            }}>
                Go to Project
            </Text>
            <Text className="border-2 border-blue-600 rounded-2xl text-blue-600 shadow-sm p-1 px-2 m2 "
            onPress={() => {
                navigation.navigate('Detalhes')  
            }}>
                Github
            </Text>
        </View>
        </View> */}

   
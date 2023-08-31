import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(){

    const navigation = useNavigation();

    return(
        <View className='flex-1 items-center justify-center bg-black'>
            <Text className='text-red-500'> Bem vindo a Home!!!</Text>
            <Button title="Ir para os produtos-detalhes" onPress={() => {
                navigation.navigate('Details')
            }} />
        </View>
    )
}
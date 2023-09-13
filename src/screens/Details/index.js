import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Details(){

    const navigation = useNavigation();

    return(
        <View className='flex-1 items-center justify-center bg-black'>
            <Text className='text-red-500'> Detalhes de um produto...</Text>
            
            <Button title="Ir para Home" onPress={() => {
                navigation.navigate('Inicio')
            }} />
        </View>
    )
}
import { Image, Text, View } from "react-native";

export const Card = ({image, title}) => {
    return(
        <View className='w-[45%] h-52 bg-white mt-2 self-center rounded-md overflow-hidden '>
            <Image source={{uri: image}} className='w-full h-[80%] self-center '/>
            <Text className='font-bold text-center mt-2'>{title}</Text>
        </View>
    )
}

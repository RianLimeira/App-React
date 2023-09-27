import { Button, Text, View } from "react-native";
import Animated, {useSharedValue, withTiming, Easing, useAnimatedStyle } from "react-native-reanimated";


export default function Animation(){
    const randomWidht = useSharedValue(10);

    const style = useAnimatedStyle(() => {
        return{
            width: withTiming(randomWidht.value, {
                easing: Easing.ease,
                duration: 500
            })
        }
    })

    return(
        <View className='flex-1 items-center mt-10' >
            <Text className='font-bold text-lg text-center justify-center'>Trabalhar com Animações com Reanimation</Text>
            <Animated.View style={[{
                width:100, height:80, backgroundColor: '#000', margin: 30
            }, style]} />
                <Button title="toggle" onPress={() => {
                    randomWidht.value = Math.random() * 500;
                }} />
            </View>
        
    )
}
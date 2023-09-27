import { Button, Text, View, Image } from "react-native";
// import Animated, {useSharedValue, withTiming, Easing, useAnimatedStyle } from "react-native-reanimated";
import * as Animated from 'react-native-animatable'

//criar propria animação com imagens
// const ImageAnimated = Animated.createAnimatableComponent(Image)

const ButtonAnimated = Animated.createAnimatableComponent(Button);

const fadeIn = {
    from:{
        opacity: 0,
    },
    to:{
        opacity:1,
    },
};

export default function Animation(){
    // const randomWidht = useSharedValue(10);

    // const style = useAnimatedStyle(() => {
    //     return{
    //         width: withTiming(randomWidht.value, {
    //             easing: Easing.ease,
    //             duration: 500
    //         })
    //     }
    // })



    return(
        <View className='flex-1 items-center mt-10' >
            <Animated.Text animation={'slideInDown'} iterationCount={'infinite'} direction={'alternate'} className='font-bold text-lg text-center justify-center'>Trabalhar com Animações com Animated</Animated.Text>
            
                {/* <Button title="toggle" /> */}

                <Animated.Text animation={fadeIn} easing={'ease-in-out'} iterationCount={'infinite'}>
                    Hello
                </Animated.Text>

                {/* <ImageAnimated animation={''} /> */}
            </View>
        
    )
}
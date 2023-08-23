import { StatusBar } from 'expo-status-bar';
import { Alert, Dimensions, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from './src/theme'
import {Container, Title, SubTitle} from './src/theme/style'
import { styled } from 'nativewind';


const ViewStyled = styled(View);

export default function App() {

  return (
    <ViewStyled className='flex-1 items-center justify-center bg-black'>
      <StatusBar barStyle={'light-content'} backgroundColor='red' />
      <Text className='text-xs text-red-900'>Hello World!</Text>
      <Text className='text-base text-orange-400 font-bold'>My first project App</Text>

    </ViewStyled>
  );
}


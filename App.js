import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {styles} from './src/theme'
import {Container, Title, SubTitle} from './src/theme/style'
import { styled } from 'nativewind';
import { Text, TouchableOpacity, View } from 'react-native';


const ViewStyled = styled(View);
const ButtonStyled = styled(TouchableOpacity);
const TextStyled = styled(Text);

// let count = 0;

export default function App() {
  const [count, setCount] = useState(0);

  // Nos [] é as dependencias (variaveis) que salvará
  // Nos {} é passado comandos
  useEffect( () => {alert('Mudanca da variavel salva ' + count)},[count]);

  return (
    <ViewStyled className='flex-1 items-center justify-center bg-black'>
      <StatusBar barStyle={'light-content'} backgroundColor='red' />
      <Text className='text-lg font-bold text-red-900'>Hello World!</Text>
      <Text className='text-base text-orange-400 font-bold'>{count}</Text>
      <ButtonStyled className='bg-white rounded-md' onPress={() =>{
        setCount(count+1);
      }}>
        <TextStyled className='text-black text-sm'>
          Incremento
        </TextStyled>
      </ButtonStyled>
      <ButtonStyled className='bg-white rounded-md' onPress={() =>{
        setCount(count-1);
      }}>
        <TextStyled className='text-black text-sm'>
          Decremento
        </TextStyled>
      </ButtonStyled>
    </ViewStyled>
  );
}


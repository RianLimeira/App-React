import { StatusBar } from 'expo-status-bar';
import { Alert, Dimensions, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import {styles} from './src/theme'
import {Container, Title, SubTitle} from './src/theme/style'
import { styled } from 'nativewind';

const ViewStyled = styled(View);

export default function App() {
  // console.log(Platform.OS);
//   Alert.alert('Alerta personalizado','Minha notificação',
//   [{
//     text: 'Valeu',
//     onPress: () => Alert.alert('Alerta 2', 'Valeu')
//   },
//   {
//     text:'Boa',
//     onPress:() => Alert.alert('Ok', 'Juntos')
//   }
// ])
  return (
    // <View style={styles.container}>
    <Container>
      <Title>Hello World! Your first project App</Title>
      <TextInput placeholder='Seu Nome' placeholderTextColor={'red'}></TextInput>
      <TouchableOpacity activeOpacity={.5}>
        <Text>Botão personalizado</Text>
      </TouchableOpacity>
      {/* <Text style={{ fontSize: 20, color: '#fff'}}> {Dimensions.get('window').scale}</Text> */}
      <SubTitle>{Dimensions.get('window').scale}</SubTitle>
      <StatusBar style="auto" />
      </Container>
    // </View>
  )
};

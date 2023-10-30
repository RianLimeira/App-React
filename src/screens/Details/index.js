import {
  Button,
  FlatList,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "../../components/Card";

import { getDatabase, ref, set } from "firebase/database";

export default function Details() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   readData();
  // }, [])

  // async function readData() {
  //   const response = await AsyncStorage.getItem('@rianApp:users');
  //   const json = JSON.parse(response);
  //   setData(json);
  // }

  async function handleCreateUser() {
    //Firebase
    // const db = getDatabase();
    // // userId pode usar também o uuid
    // const userId = new Date().getMilliseconds() + new Date().getDay();
    // set(ref(db, "users/" + userId), {
    //   name,
    //   email,
    //   password,
    //   photo: "https://github.com/RianLimeira.png",
    // })
    //   .then(() => alert("user create"))
    //   .catch((err) => console.warn(err));

    // Mysql
    await fetch('http://192.168.100.141:8081/create', {
        method: 'POST',
        headers: {
            'Accept': "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nameUser: user,
            emailUser: email,
            passwordUser: password
        })
    }).then(() => alert('User criado')).catch(() => alert('User nao pode ser cadastrado'));
  }

  const navigation = useNavigation();

  return (
    <View className="flex-1 space-x-4 bg-black">
      <Text className="text-white text-center font-bold text-lg">
        {" "}
        Criar novo usuario{" "}
      </Text>
      {/* <FlatList data={data} renderItem={({ index, item }) => (
            <Card title={`Cidade: ${item.address.city}`} image={'https://github.com/RianLimeira.png'} />
           )} keyExtractor={(item, index) => index} /> */}
      <TextInput
        //onChangeText = salva na variavel ao inserir algo 
        onChangeText={(t) => setName(t)}
        className="bg-white w-[80%] h-[30px] mt-2 rounded-sm ml-2 pl-2"
        placeholder="Nome"
      />
      <TextInput
        onChangeText={(t) => setEmail(t)}
        className="bg-white w-[80%] h-[30px] mt-2 rounded-sm ml-2 pl-2"
        placeholder="Email"
      />
      <TextInput
        onChangeText={(t) => setPassword(t)}
        className="bg-white w-[80%] h-[30px] mt-2 rounded-sm ml-2 pl-2"
        placeholder="Senha"
      />
      <View className="flex-row space-x-4 items-center self-center mt-6 rounded">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Inicio");
          }}
          className="w-20 h-[40px] bg-red-600 items-center justify-center"
        >
          <Text className="text-white font-bold">Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleCreateUser}
          className="w-20 h-[40px] bg-red-600 items-center justify-center"
        >
          <Text className="text-white font-bold">Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

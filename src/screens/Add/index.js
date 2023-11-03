import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
// import * as Crypto from 'expo-crypto';

export default function Add() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  // useEffect(() => {
  //   readData();
  // }, [])

  // async function readData() {
  //   const response = await AsyncStorage.getItem('@rianApp:users');
  //   const json = JSON.parse(response);
  //   setData(json);
  // }

  const [users, setUsers] = useState([]);

  async function handleCreateUser() {
    //Firebase
    // const db = getDatabase();
    // const userId = new Date().getMilliseconds() + new Date().getDay();
    // const newUser = {
    //   name,
    //   email,
    //   password,
    //   photo: "https://github.com/RianLimeira.png",
    //   balance: 1000,
    //   createdAtUser: new Date().toString(),
    //   updatedAtUser: new Date().toString(),
    // };
    // console.log(newUser.createdAtUser);

    // try {
    //   await set(ref(db, "users/" + userId), newUser);
    //   setUsers([...users, newUser]);
    //   Alert.alert(
    //     "CADASTRO",
    //     "user create",
    //     [
    //       {
    //         text: "Ok",
    //         onPress: () => {
    //           navigation.navigate("Home");
    //         },
    //       },
    //     ],
    //     { cancelable: false }
    //   );
    // } catch (err) {
    //   console.warn(err);
    // }
    //Encriptar Password
    

    // Mysql
    let reqs = await fetch("http://192.168.100.141:8080/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameUser: name,
        passwordUser: password,
        emailUser: email,
      }),
    });
    let ress = await reqs.json();
    setMessage(ress);
  }

  const navigation = useNavigation();

  return (
    <View className="flex-1 space-x-4 bg-black">
      {message && <Text className="bg-white">{message}</Text>}
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
            navigation.navigate("Login");
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

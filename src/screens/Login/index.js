import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Limpa o campo de email e password quando a tela é focada
    const unsubscribe = navigation.addListener("focus", () => {
      setEmail("");
      setPassword("");
    });

    // Limpa o listener quando a tela é desmontada
    return unsubscribe;
  }, [navigation]);



  async function handleGetUser() {
    console.log(users);
    // Mysql
    let reqs = await fetch("http://192.168.100.141:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailUser: email,
        passwordUser: password,
      }),
    });
    let ress = await reqs.json();
    Keyboard.dismiss();

    if (ress.error == false) {
      console.log("vc se autenticou");
      setMessage(ress.message);
      navigation.navigate("Drawer", { screen: "Home" });
    } else {
      setMessage(ress.message);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  }

  const navigation = useNavigation();

  return (
    <View className="flex-1 space-x-4 bg-black">
      <Text className="text-white text-center font-bold text-lg mt-14">
        {" "}
        LOGIN{" "}
      </Text>
      {/* <FlatList data={data} renderItem={({ index, item }) => (
                <Card title={`Cidade: ${item.address.city}`} image={'https://github.com/RianLimeira.png'} />
               )} keyExtractor={(item, index) => index} /> */}
      {message && <Text className="text-white w-[50%]">{message}</Text>}
      <TextInput
        value={email}
        onChangeText={(t) => setEmail(t)}
        className="bg-white w-[80%] h-[30px] mt-4 rounded-sm ml-2 pl-2"
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={(t) => setPassword(t)}
        className="bg-white w-[80%] h-[30px] mt-4 rounded-sm ml-2 pl-2"
        placeholder="Senha"
      />
      <View className="flex-row space-x-4 items-center self-center mt-6 mr-5 rounded">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Add");
          }}
          className="w-28 h-[40px] bg-red-600 items-center justify-center"
        >
          <Text className="text-white font-bold">CADASTRE-SE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleGetUser}
          className="w-20 h-[40px] bg-red-600 items-center justify-center"
        >
          <Text className="text-white font-bold">ACESSAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

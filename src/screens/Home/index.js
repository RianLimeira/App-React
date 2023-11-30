import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
// import { Card } from "../../components/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Context } from "../../../context/Provider";

import { getDatabase, ref, get, child } from "firebase/database";

const DATA = [
  {
    title: "Como trabalhar com React Native",
    bannerURL: "https://github.com/RianLimeira.png",
  },
  {
    title: "Como trabalhar com Expo?",
    bannerURL: "https://github.com/RianLimeira.png",
  },
  {
    title: "Como trabalhar com Listas",
    bannerURL: "https://github.com/RianLimeira.png",
  },
  {
    title: "Como trabalhar com React Native",
    bannerURL: "https://github.com/RianLimeira.png",
  },
  {
    title: "Como trabalhar com Expo?",
    bannerURL: "https://github.com/RianLimeira.png",
  },
  {
    title: "Como trabalhar com Listas",
    bannerURL: "https://github.com/RianLimeira.png",
  },
];

export default function Home() {
  const [data, setData] = useState([]);
  const [nome, setNome] = useState("");
  const [message, setMessage] = useState("");

  const { pokemons } = useContext(Context);
  const navigation = useNavigation();

  // useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/photos').then((res) => res.json().then(json => setData(json))).catch(err => console.warn(err));
  // },[]);

  // Exemplo com axios
  useEffect(
    React.useCallback(() => {
      //MySql:
      let user = axios
        .get("http://192.168.100.141:8080/users")
        .then((response) => {
          if (!response.data.error) {
            setNome(response.data.username);
            setData(response.data.user);
          } else {
            navigation.navigate("Main", { screen: "Login" });
            console.error(
              "Erro ao obter o nome do usuário:",
              response.data.message
            );
          }
        })
        .catch((error) => console.warn("Erro na solicitação: ", error));
    }, [])
  );

  // async storage armazena somente dados simples
  // Para guardar um JSON, se converte para uma string simples
  // async function saveData(json) {
  //   const string = JSON.stringify(json);
  //   await AsyncStorage.setItem("@newpp:users", string);
  //   alert("Usuario salvo na memoria");
  // }
  // Função para deslogar
  const logout = async () => {
    console.log("clicou");
    try {
      const response = await fetch("http://192.168.100.141:8080/logout", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      // const data = await response.text();
      // console.log(data)
      // const cleanData = data.replace("<", "");

      // // Converte a string em um objeto JSON
      // const jsonData = JSON.parse(cleanData);
      // console.log(jsonData);

      // if (jsonData.error) {
      //   console.error("Erro ao deslogar:", data.message);
      //   return;
      // }
      if (response.data.success) {
        console.log(Sucesso);
        // Limpa o estado do usuário
        setData(null);
        // Limpa os dados do AsyncStorage
        AsyncStorage.removeItem("@newapp:user");
        // Navega para a tela de login ou outra tela inicial
        navigation.navigate("Main", { screen: "Login" });
      } else {
        console.error("Erro ao fazer logout:", response.data.message);
      }
    } catch (err) {
      console.error("Erro ao deslogar:", err);
    }
  };

  const Separator = () => <View style={styles.separator} />;

  const styles = StyleSheet.create({
    separator: {
      marginVertical: 8,
    },
  });

  return (
    <View className="flex flex-1 items-center bg-black pl-2">
      <Text className="text-right right-28 mb-4 ml-10 mt-2 text-red-500">
        {" "}
        Seja Bem Vindo {nome} !!! {pokemons}
      </Text>
      <Text>{message}</Text>
      <Image
        className="w-screen h-52 mb-8"
        source={require("../../../assets/Images/logo.png")}
      />
      <View className="flex-row space-x-2 items-center self-center m-5 rounded">
        <TouchableOpacity
          className="w-20 h-[40px] bg-red-600 items-center justify-center"
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <Text>BUSCAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-20 h-[40px] bg-red-600 items-center justify-center"
          onPress={() => {
            navigation.navigate("Pokedex");
          }}
        >
          <Text>POKEDEX</Text>
        </TouchableOpacity>
      </View>
      <Separator />
      <Button title="DESLOGAR" onPress={logout} />

      {/* data.slice() faz com que limite a quantidade de items na tela */}
      {/* <FlatList data={data} renderItem={({ index, item }) => (
                <Card title={`Nome: ${item.name}`} image={'https://github.com/RianLimeira.png'} />
            )} keyExtractor={(item, index) => index} /> */}

      {/* <SectionList sections={DATA} renderItem={({ index, item}) => (
                <Card title={item} image={item.bannerURL} />
           )} keyExtractor={(item, index) => index} /> */}
    </View>
  );
}

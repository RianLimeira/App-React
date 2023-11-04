import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { View } from "react-native-animatable";

export default function Search({}) {
  const navigation = useNavigation();

  const [search, setSearch] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(null);

  async function searchPokemon() {
    let reqs = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" +
        search.toLowerCase().replace(/ /g, ""),
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let ress = await reqs.json();
    setPokemon(ress.name);
    setImage(ress.sprites.front_default);
    setPrice(ress.weight);
    Keyboard.dismiss();
  }

  async function catchPokemon() {}

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View>
          <Image
            className="w-screen h-40 mb-8"
            source={require("../../../assets/Images/logo.png")}
          />
        </View>
        <TextInput
          //onChangeText = salva na variavel ao inserir algo
          onChangeText={(t) => setSearch(t)}
          className="bg-white w-[80%] h-[30px] mt-2 rounded-sm ml-5 pl-2 border-4 border-red-100"
          value={search}
          placeholder="Nome"
        />
        <View className="flex-row space-x-4 items-center self-center mt-6 rounded">
          <TouchableOpacity
            onPress={searchPokemon}
            className="w-20 h-[40px] bg-emerald-400 items-center justify-center"
          >
            <Text className="items-center justify-center self-center">
              PROCURAR
            </Text>
          </TouchableOpacity>
        </View>
        {image && (
          <View className="flex ml-6 pl-3 w-40 h-68 top-4 border-2 border-red-400">
            <Image
              className="flex w-52 h-52 -my-14 -mx-9 items-center content-center"
              source={{ uri: image }}
            />
            <View className="flex ml-4 mb-2">
              <Text>Nome: {pokemon}</Text>
              <Text>R$ {price}</Text>
            </View>
            <TouchableOpacity
              onPress={catchPokemon}
              className="w-20 h-[40px] bg-red-400 left-7 items-center justify-center"
            >
              <Text>Capturar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

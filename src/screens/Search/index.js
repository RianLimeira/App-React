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
  const [pokmon, setPokemon] = useState(null);
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(null);

  async function searchPokemon() {
    let reqs = await fetch("https://pokeapi.co/api/v2/pokemon/" + search, {
      method: "GET",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
    });
    let ress = await reqs.json();
    console.log(ress);
  }

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
            className="w-20 h-[40px] bg-red-600 items-center justify-center"
          >
            <Text className="items-center justify-center self-center">
              PROCURAR
            </Text>
          </TouchableOpacity>
        </View>
        {/* {message && <Text className="bg-black">{message}</Text>} */}
      </View>
    </TouchableWithoutFeedback>
  );
}

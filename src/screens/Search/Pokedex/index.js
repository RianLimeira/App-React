import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../../../config/config.json";
import {
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { View } from "react-native-animatable";

export default function Pokedex({}) {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [search, setSearch] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(null);
  const [message, setMessage] = useState(null);

  //   useEffect(() => {}, [message]);
    useEffect(() => {
      listPokemon();
    }, []);

  async function listPokemon() {
    let reqs = await fetch(config.urlRootPython + "pokedex/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let ress = await reqs.json();
    setPokemon(ress.data);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View>
          <Image
            className="w-screen h-40 mb-8"
            source={require("../../../../assets/Images/logo.png")}
          />
        </View>
        <ScrollView>
            {pokemon && (
                pokemon.map((elem, ind) => {
                    return (
                        <View key={ind} className='left-2 w-28 h-40 border-red-500 border mb-2 '>
                            <Image style={{left:3, width:100, height:100}} source={{uri: elem.image}} />
                            <Text className='left-4 '>{elem.name}</Text>
                        </View>
                    )
                })
            )}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

import { Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";

export default function Search() {

    async function searchPokemon(){
        
    }

  return (
    <View className="flex-1 space-x-2 bg-slate-300">
      <TextInput
        //onChangeText = salva na variavel ao inserir algo
        onChangeText={(t) => setName(t)}
        className="bg-white w-[80%] h-[30px] mt-2 rounded-sm ml-2 pl-2"
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
  );
}

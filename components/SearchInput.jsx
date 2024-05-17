import { useState } from "react";
import { useRouter, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { icons } from "../constants";

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 64,
        paddingHorizontal: 16,
        backgroundColor: '#000000',
        borderRadius: 32,
        borderWidth: 2,
        borderColor: '#333333'
      }}
    >
      <TextInput
        style={{
          fontSize: 16,
          color: '#FFFFFF',
          flex: 1,
          marginTop: 1,
          fontFamily: 'PRegular'
        }}
        value={query}
        placeholder="Search a video topic"
        placeholderTextColor="#CDCDE0"
        onChangeText={(text) => setQuery(text)}
        autoFocus={true} // Try adding this to ensure the keyboard opens
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
      >
        <Image source={icons.search} style={{ width: 20, height: 20 }} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

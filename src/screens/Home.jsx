import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import AddButton from "../components/AddButton";
import { FloatingAction } from "react-native-floating-action";

export function Home() {
  return (
    <>
      {/* statusBar componentes */}
      <SafeAreaView>
        <StatusBar backgroundColor="#61dafb" />
      </SafeAreaView>
      {/* middle svgs  */}

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/home.png")}
          style={{
            height: 250,
            width: 250,
          }}
        />
        <Text> What in your Mind share here... </Text>
      </View>

      {/* add button  */}
      <View>
        <AddButton />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  SvgImg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

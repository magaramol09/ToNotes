import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";
import AddButton from "../components/AddButton";
import { FloatingAction } from "react-native-floating-action";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export function Home() {
  return (
    <>
      {/* statusBar componentes */}

      <SafeAreaView style={style.Container}>
        <StatusBar barStyle="dark-content" />
        {/* uppper Itmes */}
        {/* middle svgs  */}

        <View style={style.UpperHearders}>
          <SimpleLineIcons
            name="menu"
            size={30}
            color="black"
            style={{ marginLeft: 20 }}
          />
          <Ionicons
            name="ellipsis-vertical-outline"
            size={30}
            color="black"
            style={{ marginRight: 8 }}
          />
        </View>

        <View style={style.MiddelListItems}>
          <ImageBackground
            source={require("../../assets/home.png")}
            style={{
              height: 250,
              width: 250,
            }}
          />
          <Text> What in your Mind share here... </Text>
        </View>

        {/* add button  */}
      </SafeAreaView>
      <AddButton />
    </>
  );
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F8F8FF",
  },
  UpperHearders: {
    flex: 0.1,
    backgroundColor: "#F8F8FF",
    width: "100%",
    height: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  UpperHeardersItems: {},
  MiddelListItems: {
    flex: 0.9,
    backgroundColor: "#F8F8FF",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

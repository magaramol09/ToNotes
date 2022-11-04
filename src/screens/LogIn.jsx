import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Svg, { Path } from "react-native-svg";
import Ionicons from "react-native-vector-icons/Ionicons";

import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

export function LogIn({ navigation }) {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#6f42c1",
        }}
      >
        <View style={{ paddingHorizontal: 25 }}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/signIn.png")}
              style={{
                height: 300,
                width: 300,
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 23,
              fontWeight: "500",
              color: "#f0f8ff",
              marginBottom: 30,
              letterSpacing: 2.5,
            }}
          >
            Hello There!
          </Text>

          <InputField
            label={"Email ID"}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            keyboardType="email-address"
          />

          <InputField
            label={"Password"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            inputType="password"
            fieldButtonLabel={"Forgot?"}
            fieldButtonFunction={() => {}}
          />

          <CustomButton
            label={"singup / signup"}
            onPress={() => {
              navigation.navigate("appstack");
            }}
          />

          <Text
            style={{ textAlign: "center", color: "#f0f8ff", marginBottom: 30 }}
          >
            OR
          </Text>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              backgroundColor: "#f0f8ff",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 8,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 44, height: 40 }}
                source={require("../../assets/google.png")}
              ></Image>
              <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 12 }}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

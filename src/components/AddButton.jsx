import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FloatingAction } from "react-native-floating-action";
export default function AddButton() {
  const actions = [
    {
      text: "ToDo List",
      icon: <FontAwesome5 name="clipboard-list" size={28} color="#ffff" />,
      name: "todo-list",
      color: "#6f42c1",
      position: 1,
      buttonSize: 45,
      distanceToEdge: 25,
    },
    {
      text: "Notes",
      icon: <FontAwesome name="stack-exchange" size={30} color="#ffff" />,
      name: "notes",
      color: "#6f42c1",
      distanceToEdge: 25,
      buttonSize: 45,
      position: 2,
    },
  ];

  return (
    <View>
      <FloatingAction
        color="#6f42c1"
        buttonSize={60}
        distanceToEdge={27}
        actions={actions}
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
        }}
      />
    </View>
  );
}

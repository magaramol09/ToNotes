import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Notes, Checklist } from "../screens";

const AppStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="Feed" component={Notes} />
      <Drawer.Screen name="Article" component={Checklist} />
    </Drawer.Navigator>
  );
};

export default AppStack;

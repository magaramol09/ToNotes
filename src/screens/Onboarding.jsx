import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";


export function OnboardingScreen({ navigation }) {
  return (
    <>
      <Onboarding
        onSkip={() => navigation.navigate("login")}
        onDone={() => navigation.navigate("login")}
        pages={[
          {
            backgroundColor: "#6f42c1",
            title: "Take Notes",
            image: (
              <Image
                source={require("../../assets/onboard1.png")}
                resizeMode="contain"
                style={{ width: 350, height: 300 }}
              />
            ),

            subtitle: "Take notes and access them from Anywhere Anytime",
          },
          {
            backgroundColor: "#6f42c1",
            image: (
              <Image
                source={require("../../assets/onboard2.png")}
                resizeMode="contain"
                style={{ width: 350, height: 300 }}
              />
            ),
            title: "Stay Organised",
            subtitle: "Group your Notes and keep them organised",
          },
          {
            backgroundColor: "#6f42c1",
            image: (
              <Image
                source={require("../../assets/onboard3.png")}
                resizeMode="contain"
                style={{ width: 350, height: 300 }}
              />
            ),
            title: "Access from Anywhere",
            subtitle: "Access and edit your notes from Anywhere",
          },
        ]}
      />
    </>
  );
}

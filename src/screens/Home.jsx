import { View, Text, StatusBar } from 'react-native'
import React from 'react'

export  function Home() {
    return (
      <>
            <View style={{ flex:1 , justifyContent:'center' , alignItems:'center' ,backgroundColor:'red'}}>
          <StatusBar  style={{backgroundColor:'black'}} />
          <Text>Home</Text>
        </View>
      </>
    );
}

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Facebook from './screens/fb';
import Instagram from './screens/ig';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{backgroundColor:"pink",width:600,textAlign:"center",fontSize:30,alignItems:"center",alignSelf:"center"}}>BUZZ</Text>
     <AppContainer/>
    </View>
  );
}
const appNavigator = createBottomTabNavigator({
  Instagram:{screen: Instagram},
  Facebook:{screen: Facebook}

})

const AppContainer=createAppContainer(
  appNavigator
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
});

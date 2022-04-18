import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import Tabs from './Navigation/tabs';
import Home  from './Screens/Home';
import Profile  from './Screens/Profile';
import Page3 from './Screens/Page3';

export default function App() {


  return (
    // <Home />
      // <NavigationContainer>
      //     <Tabs />
      // </NavigationContainer>
      <Profile/>
  );
}


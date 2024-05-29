import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import LoginNativeBase from './components/native-base/example1';
import SwipeListTeste from './components/native-base/example2';
import PresenceTransitionTeste from './components/native-base/example3';
import MyComponent from './components/native-paper/example1';
import LayoutLevelShowcase from './components/ui-kitten/HomeScreen';
import HomeScreen from './components/ui-kitten/HomeScreen';
import { TextCategoriesShowcase } from './components/ui-kitten/Text';
//import Animation from './components/lottie/example1';
//import Animation from './components/lottie/example1';
//import Animation from './components/lottie/example1';
//import {  LottieTeste } from './components/lottie/example1';
//import LottieTeste from './components/lottie/example1';

export default function App() {
  return (
    <>
      <HomeScreen/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*

############################# \\ RASCUNHO // #################################

<View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>

############################# \\ RASCUNHO // #################################

*/
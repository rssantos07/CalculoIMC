import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Content from './src/components/Content';
import Footer from './src/components/footer';
import Header from './src/components/Header';

export default function App() {
  return (
   
    <View style={styles.container}>
       <StatusBar style="auto" />
<Header/>
<Content/>
<Footer/>

    </View>
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

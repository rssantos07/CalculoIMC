import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default function Footer(){
    return(
        <View style={styles.container}>
            <Text>Site Desenvolvido por: Rodrigo santos</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%'
    },
  });
  
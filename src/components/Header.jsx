import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import bgimage from './imagem/oranges.jpg'


const image= './imagem/soul2.png'

export default function Header() {
    return (
        <View style={styles.container}>
            
                <Image
                    style={styles.tinyLogo}
                    source={require('./imagem/soul2.png')}
                />
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    
    },
    tinyLogo: {
        width: 340,
        height: 160,
        margin:10
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        
      }
});

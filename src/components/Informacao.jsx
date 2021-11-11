import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Informacao(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>  {props.titulo}</Text>
            <Text style={styles.conteudo}>  {props.conteudo}</Text>
            <Text style={styles.autor}> Autor: {props.autor}</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        margin: 10,
        borderRadius: 8,             
        backgroundColor:'#9EB3DB'
    },
    titulo: {
        display:'flex',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin:10
        
    },
    conteudo: {
        textAlign: 'justify',
        margin:10,
        flexWrap:'wrap'
        
    },
    autor: {
        fontStyle: 'italic',
        fontSize: 12,
        margin:10
    }

});

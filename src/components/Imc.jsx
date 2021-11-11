import React, { useState } from 'react';
import { _Text } from 'react-native';
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

export default function Imc() {
    const [imc, setImc] = useState({
        peso: '',
        altura: '',
        resultado: 0,


    })
    const handleInputChange = (name, valor) => {
        setImc({
            ...imc, [name]: valor
        })
    }
    const calculoImc = () => {
        let indice = (imc.peso / imc.altura ** 2).toFixed(2)

        if (indice < 18.5) {
            setImc({
                ...imc, resultado: `${indice} Magreza`
            })
        } else if (indice >= 18.5 && indice < 24.9) {
            setImc({
                ...imc, resultado: `${indice} peso Normal`
            })
        } else if (indice >= 24.9 && indice < 29.9) {
            setImc({
                ...imc, resultado: `${indice} Sobrepeso`
            })
        } else if (indice >= 29.9 && indice < 39.9) {
            setImc({
                ...imc, resultado: `${indice} Obesidade`
            })
        } else if (indice > 40) {
            setImc({
                ...imc, resultado: `${indice} Super Obesidade`
            })
        }

    }

    console.log(imc)
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.text}>IMC:</Text>
            </View>
            <View style={styles.container}>

                <TextInput style={styles.input}
                    placeholder="Digite o peso"
                    onChangeText={
                        (valor) => handleInputChange('peso', Number(valor))
                    } keyboardType="numeric"
                />
                <TextInput style={styles.input}
                    placeholder="Digite a altura"
                    onChangeText={
                        (valor) => handleInputChange('altura', Number(valor))
                    } keyboardType="numeric" />
            </View>
            <View style={styles.container}>
                <View>
                    <Text>Resultado:  {imc.resultado}</Text>

                    <TouchableOpacity style={styles.button}>

                        <View style={styles.button} >
                            <Text style={styles.buttonText} onPress={calculoImc}>Calcule</Text>
                        </View>
                    </TouchableOpacity>


                </View>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#9EB3DB',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',

    },
    input: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 20,
        backgroundColor: 'white',


    },
    button: {
        borderRadius: 8,
        
       
        backgroundColor: '#dadce0',
        width: 150,
        margin: 4,
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        backgroundColor: '#9EB3DB',


    },
});

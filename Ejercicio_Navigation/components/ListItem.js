import React from 'react'
import {Text, StyleSheet,View,TouchableOpacity } from 'react-native'
export default ({item}) => {
return (
    <View style={styles.container}>
        <Text style={styles.texto}>{item.nombre}</Text>
    </View>
     )
}

const styles = StyleSheet.create({
    container:{
        height:60,
        justifyContent:'center',
        borderBottomWidth: 1,
        borderBottomColor: "#eee"

    },
    texto:{
        textAlign:'center',
        fontSize:20
    }
})
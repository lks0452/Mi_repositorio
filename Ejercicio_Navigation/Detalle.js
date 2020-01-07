import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,FlatList,Image } from 'react-native';
import item from './Item';
import datos from './Datos';

import {createAppContainer} from 'react-navigation';
import {createStackNavigatior, createStackNavigator} from 'react-navigation-stack';

export default ({navigation}) => {
  const pokemon = navigation.getParam('miPokemon');
  const [loading , setLoading] = useState(false);
  const imagen = pokemon.src;     
  useEffect(() => {
    if(pokemon != null){
      setLoading(true);
       
    }
  })
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Pantalla de detalle</Text>
            <View style={styles.ficha}>
            {loading ?
            <View style={styles.FichaTecnica}>
            <Text style={styles.texto}>Numero :  { pokemon.id} </Text>
            <Text style={styles.texto}> NOMBRE : { pokemon.nombre}</Text> 
            <Text style={styles.texto}> TIPO : { pokemon.tipo} </Text>
            
            <Image  source={pokemon.src} style={{width: 200, height: 200}}/>
            </View>
            : <Text>Cargando...</Text>}
            </View>
            <View style={styles.botonera}>
            <Button
            title="volver"
             onPress={()=> navigation.push('Home')}/>
             </View>
             
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center' 
    },
    ficha: {
      alignSelf: "stretch",
      justifyContent:'center'
    },
    FichaTecnica: {
      
      justifyContent:'center',
      backgroundColor:'#ccc',
      alignSelf: "stretch",
      alignItems:"center",
      paddingBottom:20,
      paddingTop:20

    },
    titulo:{
      fontSize:35,
      textAlign:'center',
      color: "#fff",
      backgroundColor: "#000",
      alignSelf: "stretch"
    },
    texto:{
        fontSize:15,
        textAlign:'center',
        paddingBottom:15
    },
    botonera:{
        flex:1,
        paddingTop:20,
        justifyContent:"center",
        alignItems: 'center' 
    }
  });
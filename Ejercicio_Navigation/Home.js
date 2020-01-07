import React from 'react';
import { StyleSheet, Text, View,Button,FlatList } from 'react-native';
import Miitem from './Item';
import datos from './Datos';
import ListItem from './components/ListItem';
import {createAppContainer} from 'react-navigation';
import {createStackNavigatior, createStackNavigator} from 'react-navigation-stack';
export default ({navigation}) => {
  
    return(
        <View style={styles.container}>
        <Text style={styles.titulo}>Mis pokemons</Text>
        <FlatList data={datos}  
                  renderItem={({item}) => <Miitem onPress={ ()=> navigation.navigate('DetallePok',{miPokemon:item})} title={item}></Miitem>}
                  keyExtractor={x => x.id}
                  style={styles.lista} />
        <View style={styles.botonera}>
        <Button
        title="ir a detalle"
        onPress={()=> navigation.push('DetallePok')}/>
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
    titulo:{
      fontSize:35,
      textAlign:'center',
      color: "#fff",
      backgroundColor: "#000",
      alignSelf: "stretch"
    },
    lista:{
      flexGrow: 0,
      backgroundColor: "#eee",
      alignSelf: "stretch",
            
    },
    botonera: {
      paddingTop:50
    }
  });
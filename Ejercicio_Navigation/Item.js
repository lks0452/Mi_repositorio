import React from "react";
import {Text,StyleSheet,TouchableOpacity} from "react-native";
 
/*
export default ({ item }) => <Text style={styles.div}
 >{item.nombre}</Text>;
*/
 export default ({title,onPress}) => {
     return (
         <TouchableOpacity onPress={onPress}>
            <Text style={styles.div} >{title.nombre}</Text>
         </TouchableOpacity>
     )
 }
const styles = StyleSheet.create({
    div : {
      textAlign:"center",
      padding:15,
      fontSize:25
    },
  });
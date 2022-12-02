import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'



export default function ScreenB({navigation}) {
    const onPresshundler = () => {
    /* navigation.navigate('Screen_A') */
    navigation.goBack()
    }
     return(
       <View style={styles.body}>
         <Text style={styles.Text}>
           this is screen B
         </Text>
         <Pressable
         onPress={onPresshundler}
         style={({pressed}) => ({backgroundColor : pressed ? '#e35183' : '#38786a'})} >
         <Text style={styles.Text}>
           go back to screen a
         </Text>
         </Pressable>


         <Text style={styles.subp}>
         </Text>
         <Text style={styles.p}>{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         </Text>

         
       </View>
     )
   }

   const styles = StyleSheet.create({
    body :{
      flex:1,
      backgroundColor:'gray',
      justifyContent:'center',
      alignItems:'center',
    
    },
    Text:{
      color:'black',
      fontSize:30,
      margin:20,
    }
    
    })
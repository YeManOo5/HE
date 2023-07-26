import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const mynsar =[
  'Quizzes (1)',
  'Quizzes (2)',
  'Quizzes (3)',
  'Quizzes (4)',
  'Quizzes (5)',
  'Quizzes (6)',
  'Quizzes (7)',
]
 
 const go = [
 'Qa','Qb','Qc','Qd','Qe','Qf','Qg'
 ]
export default function Qu({navigation}) {
    const onPresshundlerone= (Go) => {
    
      navigation.navigate(go[Go])
    }
     return(
       <ScrollView  style={{backgroundColor:'#fff'}}>
         <View style={styles.body}>
        <Text style={styles.headtitle}>အသိဆန်းစစ်ခြင်း
  </Text>

        
        </View >

            {
                    mynsar.map((title,index) => (
                        <View style={{ flexDirection: 'row' ,alignSelf:'center',marginBottom:20 }}>
                        <Pressable
         onPress= {()=> onPresshundlerone (index)}
         style={[styles.radio , {backgroundColor:'#93BFCF'}]} >
         <Text style={styles.buttontx}>
         {title}
         </Text>
                        </Pressable>   
         
                          

             </View>
                        
                    ))}

       </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
      flex:1,
      backgroundColor:'#fff',
      marginBottom:10
    },
    body1 :{
        flex:5,
        backgroundColor:'#fff',
      },
    Text:{
      color:'black',
      fontSize:20,
      margin:20,
    },
    headtitle:{
       fontSize:25,
      color:'#070A18',
      justifyContent:'center',
      alignSelf:'center',
      margin:20,
      alignItems:'center',
      textAlign: 'center',
    },
    icon:{
        width:69,
        height:69,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        marginLeft:10,

       } ,
     buttontx :{
        color:'black',
      fontSize:16.5,
      textAlign: 'center',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
     }  ,
     radio:{
        elevation:7,
        width:'70%',
        height:69,
        borderRadius:15,
        justifyContent:'center',
      alignSelf:'center',
      textAlign: 'center',
      },
    
    })
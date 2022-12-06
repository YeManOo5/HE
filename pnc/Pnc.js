import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const mynsar =[
  '(က) မွေးဖွားပြီးစမိခင်များအတွက် အန္တရာယ်လက္ခဏာများ',
  '(ခ) သားဆက်ခြားခြင်း',
  '(ဂ) မိခင်နို့တိုက်ကျွေးခြင်း',
  ]
 const go = [
 'Pncone','Pnctwo','Pncthree'
 ]
export default function Pnc({navigation}) {
    const onPresshundlerone= (Go) => {
    
      navigation.navigate(go[Go])
    }
     return(
       <ScrollView  style={{backgroundColor:'#fff'}}>
         <View style={styles.body}>
        <Text style={styles.headtitle}>၄။ မွေးဖွားပြီးချိန်တွင် မိခင်အား {'\n'} စောင့်ရှောက်မှု
  </Text>

        
        </View >

            {
                    mynsar.map((title,index) => (
                        <View style={{ flexDirection: 'row' ,alignSelf:'center',marginBottom:20 }}>
                        <Pressable
         onPress= {()=> onPresshundlerone (index)}
         style={[styles.radio , {backgroundColor:'#E6CEFF'}]} >
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
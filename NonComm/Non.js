import { Pressable, StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const mynsar =[
  '၈။ မကူးစက်နိုင်သောရောဂါများအကြောင်း',
  '၈.၁	သွေးတိုးရောဂါ',
  '၈.၂	ဆီးချို၊ သွေးချိုရောဂါ',
  '၈.၃	နှလုံးသွေးကြောကျဉ်းရောဂါ',
  '၈.၄	လေဖြတ်ရောဂါ',
  '၈.၅	ကင်ဆာရောဂါ',
  '၈.၆	နာတာရှည် အဆုတ်ပွ လေပြွန်ကျဉ်းရောဂါ',
  '၈.၇	ပန်းနာရင်ကျပ်ရောဂါ',

  ]
 const go = [
 'noon','nona','nonb','nonc','nond','none','nonf','nong'
 ]

export default function Non({navigation}) {
  const onPresshundlerone= (Go) => {
    
    navigation.navigate(go[Go])
  }
     return(
      <ScrollView  style={{backgroundColor:'#fff'}}>
      <View style={styles.body}>
     <Text style={styles.headtitle}>၈။ မကူးစက်နိုင်သော ရောဂါများအကြောင်း
</Text>

     
     </View >

         {
                 mynsar.map((title,index) => (
                     <View style={{ flexDirection: 'row' ,alignSelf:'center',marginBottom:20 }}>
                     <Pressable
      onPress= {()=> onPresshundlerone (index)}
      style={[styles.radio , {backgroundColor:'#F8FFD7'}]} >
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
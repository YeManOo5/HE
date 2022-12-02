import { Pressable, StyleSheet, Text, ScrollView ,View } from 'react-native'
import React from 'react'


const mynsar =[
'(က) ကိုယ်ဝန်ဆောင်စဥ် လိုက်နာရမည့် အချက်များ',
'(ခ) မိခင် နှင့် ကလေး ကျန်းမာရေး စောင့်ရှောက်မှု လက်စွဲစာအုပ် အသုံးပြုပုံ',
'(ဂ) ကိုယ်ဝန်ဆောင်မိခင်အတွက် မွေးဖွားရန် ကြိုတင်စီစဥ်ခြင်း ၊ မွေးဖွားစဥ် အန္တရာယ်များအတွက် အစီအစဥ်များ ရေးဆွဲခြင်း',
'(ဃ) ကိုယ်ဝန်ဆောင်မိခင်များအတွက် အန္တရာယ် လက္ခဏာများ',
'(င) မိခင် မှ ကလေးသို့ ရောဂါကူးစက်ခြင်းမှ ကာကွယ်ခြင်း (PMTCT)',
]
const go = [
  'Ancone','Anctwo','Ancthree','Ancfour','Ancfive'
  ]
export default function Anc({navigation}) {
  const onPresshundlerone= (Go) => {
    navigation.navigate(go[Go])
  }
    
     return(
      <ScrollView contentContainerStyle={{margin:"2%"}} style={{backgroundColor:'#fff'}}>
      <View style={styles.body}>
     <Text style={styles.headtitle}>မိခင် ကိုယ်ဝန်စောင့်ရှောက်ခြင်း</Text>

     
     </View >

         {
                 mynsar.map((title,index) => (
                     <View style={{ flexDirection: 'row' ,alignSelf:'center',marginBottom:20 }}>
                     <Pressable
      onPress= {()=> onPresshundlerone (index)}
      style={[styles.radio , {backgroundColor:'#FFC1E3'}]} >
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
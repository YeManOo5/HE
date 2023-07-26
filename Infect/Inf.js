import { Pressable, StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const mynsar =[
  '၇.၁	ပြင်းထန် ဝမ်းပျက်ဝမ်းလျှောရောဂါ (ကာလဝမ်းရောဂါ)',
  '၇.၂	တီဘီရောဂါ',
  '၇.၃ 	အေအိုင်ဒီအက်စ်ရောဂါ \n(ခုခံအားကျဆင်းမှုကူးစက်ရောဂါ)',
  '၇.၄	ငှက်ဖျားရောဂါ',
  '၇.၅	သွေးလွန်တုပ်ကွေးရောဂါ',
  '၇.၆ 	ဇီကာရောဂါ',
  '၇.၇	ဂျပန်ဦးနှောက်ရောင်ရောဂါ',
  '၇.၈	ဆင်ခြေထောက်ရောဂါ',
  '၇.၉	ခွေးရူးပြန်ရောဂါ',
  '၇.၁၀	ကူးစက်မြန် အီဘိုလာဗိုင်းရပ်စ်ရောဂါ',
  '၇.၁၁	ကြက်ငှက်တုပ်ကွေးရောဂါ',
  '၇.၁၂	အရှေ့အလယ်ပိုင်းဒေသ \nအသက်ရှုလမ်းကြောင်းဆိုင်ရာ (မားစ်) \nကူးစက်မြန်ရောဂါ',
  '၇.၁၃	ကူးစက်မြန်ပြင်းထန်\n ဦးနှောက်အမြှေးရောင်ရောဂါ',
  '၇.၁၄	လက်ပ်တိုစပိုင်ရိုးစစ်ရောဂါ',
  '၇.၁၅	ပလိပ်ရောဂါ',
  '၇.၁၆	အနာကြီးရောဂါ',
  '၇.၁၇	အသည်းရောင်အသားဝါ (အေ) ရောဂါ',
  '၇.၁၈	အသည်းရောင်အသားဝါ (ဘီ)',
  '၇.၁၉	အသည်းရောင်အသားဝါ (စီ)',
  '၇.၂၀	အသည်းရောင်အသားဝါ (အီး)',
  '၇.၂၁	ရာသီတုပ်ကွေးရောဂါ',
  '၇.၂၂	မျက်မြှေးရောင်ရောဂါ/မျက်စိနာရောဂါ',

  ]
 const go = [
 'infa','infb','infc','infd','infe','inff','infg','infh','infi','infj',
 'infk','infl','infm','infn','info','infp','infq','infr','infs','inft',
 'infu','infv',
 ]

export default function Inf({navigation}) {
  const onPresshundlerone= (Go) => {
    
    navigation.navigate(go[Go])
  }
     return(
      <ScrollView style={{backgroundColor:'#fff'}}>
      <View style={styles.body}>
     <Text style={styles.headtitle}>၇။ ကူးစက်နိုင်သော ရောဂါများ အကြောင်း
</Text>

     
     </View >

         {
                 mynsar.map((title,index) => (
                     <View style={{ flexDirection: 'row' ,alignSelf:'center',marginBottom:20 }}>
                     <Pressable
      onPress= {()=> onPresshundlerone (index)}
      style={[styles.radio , {backgroundColor:'#D7FFD9'}]} >
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
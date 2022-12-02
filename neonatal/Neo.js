import { Pressable, StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const mynsar =[
  '(က) မိခင်နှင့်ကလေး ကျန်းမာရေး စောင့်ရှောက်မှု လက်စွဲ စာအုပ်တွင်  ပါဝင်သော လိုက်နာရမည့် အချက်များကို ရှင်းပြခြင်း',
  '(ခ) မွေးကင်းစကလေးငယ်များအတွက် အသက်အန္တရာယ်စိုးရိမ်ရသော လက္ခဏာများ',
  '(ဂ) ၅နှစ်အောက်ကလေး၏ အထွေထွေ အန္တရာယ်လက္ခဏာများ',
  '(ဃ) ကလေးတွင် အဖြစ်များသောရောဂါများကို အိမ်တွင်ပြုစုကုသပေးခြင်း',
  '(င) ကလေးဖွံ့ဖြိုးရေး',
  '(စ) ကလေးများ မတော်တဆထိခိုက်ဒဏ်ရာရခြင်းမှ ကာကွယ်နိုင်မည့် နည်းလမ်းများ',
  '(ဆ) ပုံမှန်ကာကွယ်ဆေးထိုးနှံတိုက်ကျွေးခြင်း (IMMUNIZATION)',
  '(ဇ) အာဟာရဖွံ့ဖြိုးရေး'
  ]
 const go = [
 'Neoone','Neotwo','Neothree','Neofour','Neofive','Neosix','Neoseven','Neoeight'
 ]

export default function Neo({navigation}) {
  const onPresshundlerone= (Go) => {
    
    navigation.navigate(go[Go])
  }
     return(
      <ScrollView  style={{backgroundColor:'#fff'}}>
      <View style={styles.body}>
     <Text style={styles.headtitle}>၅။ မွေးကင်းစကလေး {'\n'} ကျန်းမာ ဖွံ့ဖြိုးရေး
</Text>

     
     </View >

         {
                 mynsar.map((title,index) => (
                     <View style={{ flexDirection: 'row' ,alignSelf:'center',marginBottom:20 }}>
                     <Pressable
      onPress= {()=> onPresshundlerone (index)}
      style={[styles.radio , {backgroundColor:'#D1D9FF'}]} >
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
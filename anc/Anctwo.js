import { Pressable, StyleSheet, Text, View , ScrollView } from 'react-native'
import React from 'react'



export default function AncTwo({navigation}) {
    const onPresshundler = () => {
    navigation.goBack()
    }
     return(
      <ScrollView contentContainerStyle={{margin:"2%"}} style={{backgroundColor:'#FFC1E3'}}>
      <View style={styles.body} >
      <Text style={styles.headtitle}>
      (ခ) မိခင်နှင့် ကလေး ကျန်းမာရေးစောင့်ရှောက်မှုလက်စွဲစာအုပ် အသုံးပြုပုံ  
      </Text>
      <Text style={styles.p}>ဤကျန်းမာရေးမှတ်တမ်းစာအုပ်သည် မိခင်အတွက်ကိုယ်ဝန်ဆောင်စဉ်၊ မွေးဖွားစဉ်၊ မွေးဖွားပြီးအချိန်နှင့် မွေးဖွားလာသောရင်သွေးငယ်အတွက် အရေးပါသော ကျန်းမာရေးမှတ်တမ်းဖြစ်သည်။ {"\n"}
(ဤစာအုပ်ငယ်ကို ကိုယ်ဝန်ဆောင်ချိန်၊ မွေးဖွားချိန်၊ မီးတွင်းကာလနှင့် မိမိရင်သွေးငယ်ကို မည်သည့်ဆေးခန်း၊ ဆေးရုံသို့ လာရောက်ပြသသည်ဖြစ်စေ၊ မဖြစ်မနေယူဆောင်လာရမည်)
 </Text>
      
      </View>
    </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
      flex:1,
      backgroundColor:'#FFC1E3',
      marginBottom:10,
      marginBottom:20,
    },
  headtitle:{
    color:'#102027',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    fontSize:20,
    marginTop:10,
    
  },
  subtitle:{
    color:'#260e04',
    fontSize:18,
    textDecorationLine: 'underline',
    margin:10,
  },
  p:{
    margin:7,
    color:'#4e342e',
    fontSize:15,
    lineHeight: 26,
  },
  subp:{
    marginTop:10,
    color:'#4e342e',
    fontSize:15,
    backgroundColor:'#e5b7b6',
    textDecorationLine: 'underline',
  }
    
    })
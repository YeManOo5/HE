import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function mene({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#FFDDC1'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         သေကြောင်းကြံစည်ခြင်း
         </Text>
         <Text style={styles.p}>
         {"\n"}•	မိမိကိုယ်ကို သေကြောင်းကြံစည်ခြင်းသည် အရေးပေါ်စိတ်ကျန်းမာရေး အခြေအနေ ပင်ဖြစ်ပါသည်။
         {"\n"}•	သေကြောင်းကြံစည်လိုကြောင်း ပြောသူများကို လျစ်လျူရှုမထားပါနှင့်၊ သေကြောင်း ကြံစည်ရန် ကြိုးစားမှုများသည် မတော်တဆအောင်မြင်သွားတတ်ကြောင်း သတိပြု ပါ။
         {"\n"}•	ငြိမ်သက်လွန်းခြင်း၊ နှေးကွေးလေးလံခြင်း၊ ရှောင်ဖယ်နေတတ်ခြင်း၊ အားငယ်နေပြီး သေလိုသောဆန္ဒများကို ထုတ်ဖော်ပြောဆိုခြင်းများသည် မိမိကိုယ်ကိုသေကြောင်း ကြံစည်နိုင်ရန် အလားအလာများစွာရှိသူများ ဖြစ်ပါသည်။
         {"\n"}{"\n"}<Text style={styles.subp}>ပြုစုနည်း</Text>
         {"\n"}•	လူနာကို တစ်ယောက်တည်း မထားပါနှင့်။
         {"\n"}•	လူနာနှင့်အတူ မိသားစုထဲမှ တစ်ယောက်ယောက် အမြဲရှိပါစေ။
         {"\n"}•	လူနာ၏ခံစားချက်များကို ဖွင့်ဟပြောဆိုပါစေ။
         {"\n"}•	လူနာ၏ခံစားချက်များပြောပြခြင်းကို ဝေဖန်မှုမပါဘဲ ကြင်နာမှုဖြင့် နားထောင်ပါ။
         {"\n"}•	လူနာကို အားပေးကူညီပါ။
         {"\n"}•	လူနာ၏ မျှော်လင့်ချက်များကို ဖော်ထုတ်ပေးပါ။
         {"\n"}•	ထိရောက်သော အကြံပေးလမ်းညွှန်ခြင်းများဖြင့် စိတ်ကျန်းမာရေးစောင့်ရှောက်မှု ခံယူလာစေရန် ကြိုးစားပေးပါ။
         
         </Text>
         
         </View>
       </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
        flex:1,
        backgroundColor:'#FFDDC1',
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
      backgroundColor:'#e5c6ad',
      textDecorationLine: 'underline',
    }
    
    })
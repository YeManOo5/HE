import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'


export default function infh({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၇.၈	ဆင်ခြေထောက်ရောဂါ
         </Text>
         <Text style={styles.p}>
         ဆင်ခြေထောက်ရောဂါဆိုသည်မှာ သွေးကြောထဲတွင်နေသော သန်ကောင်အမျိုးအစား ပိုးတစ်မျိုးကြောင့် ဖြစ်ပွားသည်။ ရောဂါဖြစ်ပွားသည့် သန်ကောင်အမျိုးအစား ပိုးသယ်ဆောင်ထားသော ကျူးလက်(စ်)ခြင် ကိုက်ခြင်းဖြင့် ကူးစက်ပါသည်။

         {"\n"}<Text style={styles.subp}>ရောဂါနုနေစဉ် လက္ခဏာများ</Text>
{"\n"}•	ချမ်းတုန်ဖျားခြင်း
{"\n"}•	ယားယံ၍ အင်ပျဉ်ထွက်ခြင်း
{"\n"}•	ပန်းနာရင်ကျပ်ကဲ့သို့ ချောင်းဆိုးရင်ကျပ်ခြင်း
{"\n"}•	အကျိတ်များရောင်ခြင်း
{"\n"}•	ဝှေးစေ့များရောင်၍ အောင့်ခြင်း၊ နာခြင်း
{"\n"}•	ခြေ၊ လက်တစ်ဖက်/ နှစ်ဖက် နီရဲ၊ ပူလောင်၊ ရောင်ရမ်း၍နာခြင်း (မှင်ထခြင်း၊ ပင့်ကူရှပ်ခြင်းနှင့် ဆင်တူသော)
{"\n"}•	ကပ်ပယ်အိတ် (မုတ္တ) ကြီးခြင်း
{"\n"}•	ဆန်ဆေးရေကဲ့သို့ အဖြူရောင် ဆီးပျစ်ပျစ်သွားခြင်း
{"\n"}•	ဆီးထဲသွေးပါခြင်း
{"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}ရောဂါသက်ရင့်လာသည့်အခါ ခြေ၊ လက်၊ ရင်သား စသည့်တို့ တစ်ဖက်ထဲ(သို့) နှစ်ဖက်လုံးကြီးလာပြီး နောက်ဆုံးတွင် ဆင်ခြေထောက် အသွင်ဖြစ်လာပါသည်။

{"\n"}<Text style={styles.subp}>ဆင်ခြေထောက်ရောဂါကာကွယ်ခြင်း</Text>
{"\n"}၁။	ဆင်ခြေထောက်ရောဂါကင်းဝေးရေး သန်ချဆေးပေါင်းကို တစ်နှစ်လျှင် တစ်ကြိမ် (၅)နှစ် ဆက်တိုက် အသက်အရွယ်အပိုင်းအခြားအလိုက် သောက်သုံးရမည်။ ဆေးပမာဏအတိုင်း သောက်သုံးခြင်းဖြင့် ဆင်ခြေထောက်ရောဂါ ကူးစက်ခံရခြင်းမှ ကာကွယ်နိုင်ပါသည်။
{"\n"}၂။	ခြင်ပေါက်ပွားရာနေရာများဖြစ်သည့် ရေစီးရေလာမကောင်းသည့် ရေမြောင်းပုပ်များ၊ ရေဆိုးကျင်းများနှင့် မလုံခြုံသော အိမ်သာကျင်းများကို ရှင်းလင်းဖယ်ရှားခြင်းဖြင့် ကာကွယ်နိုင်ပါသည်။
{"\n"}၃။	ခြင်ကိုက်မခံရအောင် တစ်ကိုယ်ရေကာကွယ်ခြင်းကို စာမျက်နှာ (၉၄) ရှိ ကာကွယ်နှိမ်နင်းရေးလုပ်ငန်းများ တွင်ဖတ်ပါ။

           </Text>
         
         </View>
       </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
        flex:1,
        backgroundColor:'#D7FFD9',
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
      backgroundColor:'#c1e5c3',
      textDecorationLine: 'underline',
    }
    
    })
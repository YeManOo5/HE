import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function nonf({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView  style={{backgroundColor:'#F8FFD7'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၈.၆	နာတာရှည် အဆုတ်ပွ လေပြွန်ကျဉ်းရောဂါ
         </Text>
         <Text style={styles.p}>
         
             ဖြစ်ပွားရခြင်း အကြောင်းရင်းများ
         {"\n"}•	ဆေးလိပ်သောက်ခြင်း
         {"\n"}•	တခြားသူသောက်သော ဆေးလိပ်ငွေ့ကို တဆင့်ခံ ရှူရှိုက်ရခြင်း
         {"\n"}•	အိမ်တွင်း၊ အိမ်ပြင် လေထုညစ်ညမ်းခြင်း (မီးခိုငွေ့၊ ဖုန်မှုန့်၊ အငွေ့မျိုးစုံ)
         {"\n"}•	အဆုတ်နှင့် အသက်ရှုလမ်းကြောင်းကို ဉပါဒ်ဖြစ်စေသော လုပ်ငန်းခွင်ဆိုင်ရာ အခဲ၊ အရည်၊ အငွေ့ပစ္စည်းများကို ကိုင်တွယ်ရှူရှိုက်ထိတွေ့ခြင်း
         {"\n"}
         {"\n"}နာတာရှည် အဆုတ်ပွ လေပြွန်ကျဉ်းရောဂါ၏ လက္ခဏာများ
         {"\n"}•	ရေရှည်ချောင်းဆိုးခြင်း
         {"\n"}•	မောပန်းလျှင် ရွှီရွှီမြည်ခြင်း
         {"\n"}•	ချွဲသလိပ်များခြင်း
         {"\n"}•	ရောဂါရင့်လျှင် လှုပ်ရှားလိုက်သည်နှင့် မောခြင်း
         {"\n"}•	ပန်းနာရင်ကျပ်ရောဂါကဲ့သို့ ဖြစ်လိုက်ပျောက်လိုက်မဟုတ်ဘဲ နာတာရှည်ခြင်း
         {"\n"}•	ကာလကြာလျှင် နှလုံးပါထိခိုက်ခြင်း
         {"\n"}
         {"\n"}ကာကွယ်ကုသရေးနည်းလမ်းများ
         {"\n"}•	ဆေးလိပ်ဖြတ်ပါ။
         {"\n"}•	လေထုညစ်ညမ်းမှုကို ကာကွယ်တားဆီးပါ။
         {"\n"}•	ဖုန်၊ အမှုန့်၊ မီးခိုး၊ အငွေ့များကို တတ်နိုင်သလောက်ရှောင်ရှားပါ။
         {"\n"}•	ရောဂါဖြစ်လာလျှင် နားလည်တတ်ကျွမ်းသူများထံ စောစီးစွာပြသကုသပါ။
         {"\n"}•	ညွှန်ကြားသောဆေးဝါးများကို ပုံမှန်သုံးစွဲပါ။
         {"\n"}•	လိုအပ်လျှင် အောက်ဆီဂျင်ကုထုံးခံယူပါ။
         {"\n"}•	ကျန်းမာရေးနှင့် ညီညွှတ်အောင်နေထိုင်ပါ။

         </Text>
         
         </View>
       </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
        flex:1,
        backgroundColor:'#F8FFD7',
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
      backgroundColor:'#dfe5c1',
      textDecorationLine: 'underline',
    }
    
    })
import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'



export default function AncThree({navigation}) {
    const onPresshundler = () => {
    navigation.goBack()
    }
     return(
      <ScrollView contentContainerStyle={{margin:"2%"}} style={{backgroundColor:'#FFC1E3'}}>
      <View style={styles.body} >
      <Text style={styles.headtitle}>
      (ဂ) ကိုယ်ဝန်ဆောင်မိခင်အတွက် မွေးဖွားရန် ကြိုတင်စီစဥ်ခြင်း၊ မွေးဖွားစဥ် အန္တရာယ်များအတွက် အစီအစဥ်များရေးဆွဲခြင်း  
      </Text>
      <Text style={styles.p}>
      ၁။	ကလေးမွေးဖွားမည့်ခန့်မှန်းရက်ကို သိရှိထားရမည်။
      {"\n"}၂။	ကလေးမွေးဖွားရန် ကျွမ်းကျင်သော ကျန်းမာရေးဝန်ထမ်းတစ်ဉီးကို ရွေးချယ်ထားရမည်။
      {"\n"}၃။	မွေးဖွားခြင်းနှင့် အရေးပေါ်ကိစ္စရပ်များအတွက်သွားရန် ဆေးရုံ၊ ဆေးခန်းကို ရွေးချယ်ထားရမည်။
      {"\n"}၄။	ကိုယ်ဝန်ဆောင်စဉ်နှင့် မွေးဖွားစဉ်ကြုံတွေ့နိုင်သည့် အန္တရာယ်လက္ခဏာများကို သိရှိထားရမည်။
      {"\n"}၅။	အရေးပေါ်ဖြစ်ခဲ့ပါက ဆုံးဖြတ်ပေးနိုင်မည့်တစ်ဦးရှိရမည်။
      {"\n"}၆။	အရေးပေါ်အခြေအနေတွင် လိုအပ်သောငွေ မည်သို့ရရှိနိုင်မည်ကို သိရှိထားရမည်။
      {"\n"}၇။	အရေးပေါ်အခြေအနေတွင် ဆေးရုံ၊ ဆေးခန်းသို့သွားရန် သယ်ယူပို့ဆောင်မှုကို ကြိုတင်စီစဉ်ထားရမည်။
      {"\n"}၈။	မွေးဖွားရန်အတွက် အခြေခံအကျဆုံး လိုအပ်သောပစ္စည်းများကို စုဆောင်းထားရမည်။
      {"\n"}•	သန့်ရှင်းပြီးအနွေးဓာတ်ရှိသော အခန်းတစ်ခန်း (သို့) အခန်း၏ ထောင့်တစ်နေရာ
      {"\n"}•	ပိုးသန့်စင်ထားသည့် တစ်ခုသုံးမွေးဖွားအိတ်ငယ်တစ်ခု
      {"\n"}•	မိခင်နှင့်ကလေးအတွက် သန့်ရှင်းသော အဝတ်အစားများ
      {"\n"}•	သန့်ရှင်းသော အနှီးပိတ်များ၊ အိပ်ရာခင်း၊ အဝတ်စများ
      {"\n"}၉။	မွေးဖွားစဉ်နှင့် မွေးပြီး အနည်းဆုံး (၂၄)နာရီ ကြာသည်အထိ အနီးတွင် နေပေးမည့်သူရှိရန် ကြိုတင်စီစဉ်ထားရမည်။
      {"\n"}၁၀။	အိမ်မှုကိစ္စနှင့် အခြားကလေးကိစ္စများကို ကူညီစောင့်ရှောက်မည့်သူတစ်ဦး စီစဉ်ထားရမည်။
      {"\n"}၁၁။	နောက်တစ်ကြိမ် ကိုယ်ဝန်စောင့်ရှောက်မှုခံယူရန်အတွက် ရက်ချိန်းကို သိရှိရမည်။
      {"\n"}၁၂။	မိခင်ကလေးကျန်းမာရေးမှတ်တမ်း အဆင်သင့်ရှိရမည်။

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
import { Pressable, StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'



export default function Pncthree({navigation}) {
    const onPresshundler = () => {
    navigation.goBack()
    }
     return(
      <ScrollView style={{backgroundColor:'#E6CEFF'}}>
      <View style={styles.body} >
      <Text style={styles.headtitle}>
      (ဂ) မိခင်နို့တိုက်ကျွေးခြင်း 
      </Text>
      <Text style={styles.p}>
      <Text style={styles.subtitle}> မိခင်နို့ရည်၏ အာဟာရ </Text>
      {"\n"}
 {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
      မိခင်နို့သည် ကလေးငယ် ကျန်းမာစွာကြီးထွားပြီး ဖွံ့ဖြိုးမှုအတွက် အကောင်းဆုံး အာဟာရဖြစ်ပါသည်။ မွေးဖွားပြီး ပထမ (၆)လအတွင်း ကလေးငယ် လိုအပ်သော တစ်ခုတည်းသာ အာဟာရဖြစ်ပါသည်။ ကလေးငယ်အတွက် အစာကြေလွယ်ပြီး ကလေးငယ်ကို အာဟာရဓာတ်များ လျင်မြန်စွာပေးနိုင်ပါသည်။
      {"\n"}•	အာဟာရကြွယ်ဝပြီး ရောဂါကာကွယ်ပေးသည့်ဓာတ်များ ပါဝင်သော နို့ဦးရည်ကို တိုက်ဖြစ် အောင်တိုက်ပါ။
      {"\n"}•	မွေးဖွားပြီး (၁) နာရီအတွင်း စောနိုင်သမျှ စောစောတိုက်ပါ။
      {"\n"}•	ကလေးငယ်ကို မွေးဖွားပြီး အသက် (၆)လအထိ မိခင်နို့တစ်မျိုးတည်းသာ တိုက်ပါ။
      {"\n"}•	မိခင်နို့တစ်မျိုးတည်း တိုက်ကျွေးခြင်းဆိုသည်မှာ မိခင်နို့မှလွဲ၍ရေ၊ အခြားအရည်များ (သို့) အစားအစာများကို ပထမ (၆)လအတွင်း မကျွေးခြင်းကို ဆိုလိုပါသည်။
      {"\n"}  •	မိခင်နို့တွင် ရေဓာတ်အများအပြား ပါဝင်ပါသည်။ ကလေးငယ် နို့ဆာသည့်အခါတိုင်း တိုက်ပါ။ နို့စို့လိုသည့်အခါတိုင်း နို့စို့ခွင့်ရရှိပါက ပူပြင်းခြောက်သွေ့သော ရာသီဉတု များမှပင် ရေထပ်မံတိုက်ကျွေးရန် မလိုပါ။
      {"\n"}•	မိခင်နို့ကို ခဏခဏတိုက်ပါ။ အချိန်ကြာကြာ တိုက်ပါ။ ကလေးဆာတိုင်း တိုက်ပါ။
      {"\n"}•	မိခင်နို့တွင် အဆီဓာတ်၊ သကြားစက်၊ ဗီတာမင်နှင့် သတ္တုဓာတ်များ အလုံအလောက် ပါဝင်သည်။ 
      {"\n"}<Text style={styles.subtitle}> မိခင်နို့တစ်မျိုးတည်း တိုက်ကျွေးခြင်း၏{"\n"} အကျိုးကျေးဇူးများ </Text>
      {"\n"}•	နို့ဦးရည်နှင့် မိခင်နို့သည် ကလေးငယ် ရောဂါမဖြစ်ပွားစေရန်အတွက် မိခင်မှ ကလေး ကိုပေးနိုင်သည့် ပထမဆုံးနှင့် တန်ဖိုးအရှိဆုံးကာကွယ်ဆေး ဖြစ်ပါသည်။
      {"\n"}•	မိခင်နို့တိုက်ကျွေးခြင်းဖြင့် ကလေးငယ်တွင် ဝမ်းလျှော့ခြင်း၊ အသက်ရှုလမ်းကြောင်း ရောဂါ ကူးစက်ဝင်ရောက်ခြင်းနှင့် နာတာရှည်ရောဂါများ ဖြစ်ပွားမည့်အန္တရာယ်ကို လျှော့ချနိုင်ပါသည်။
      {"\n"}•	မိခင်နို့တိုက်ကျွေးခြင်းဖြင့် မိခင်နှင့် ကလေးငယ်တို့ကြား သံဃောဇဉ်တွယ်တာမှု ပိုမို ခိုင်မာစေပါသည်။
      {"\n"}<Text style={styles.subtitle}> မိခင်များအတွက် အကျိုးကျေးဇူးများ </Text>
      {"\n"}•	နောက်တစ်ကြိမ် ကိုယ်ဝန်ဆောင်ခြင်းကို နှောင့်နှေးကြန့်ကြာစေနိုင်သည်။
      {"\n"}•	မိခင်တွင် မမျိုးဉအိမ်ကင်ဆာ၊ ရင်သားကင်ဆာတို့ဖြစ်ပွားမည့် အန္တရာယ်ကို လျှော့ချ ပေးနိုင်သည်။
ကလေးကို မိခင်နို့ ခဏခဏတိုက်ပါ။
{"\n"}•	မိမိ၏ရင်သွေးကို နို့ဝအောင်တိုက်နိုင်သည်ဟုယုံကြည်စိတ်မွေးပါ။ နို့ထွက်များပါမည်။
{"\n"}•	အချိန်ကြာကြာ တိုက်ပါ။
{"\n"}•	အသက် (၆)လ မတိုင်မီ နေ့ရောညပါ မိခင်နို့တစ်မျိုးတည်း တိုက်ပါ။
{"\n"}•	မိခင်သည် အာဟာရပြည့်ဝစွာ စားသုံးပါက အမြွာပူးကလေးအတွက်လည်း မိခင်နို့ လုံလောက်စွာ တိုက်ကျွေးနိုင်ပါသည်။
{"\n"}•	(၆)လပြည့်ပြီးနောက် အာဟာရကြွယ်ဝသော ဖြည့်စွက်အစာများကို စတင်ကျွေးရင်း ကလေးငယ် (၂) နှစ်ကျော်သည်အထိ ဆက်လက်၍ တိုက်ကျွေးပါ။



      </Text>
      
      </View>
    </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
      flex:1,
      backgroundColor:'#E6CEFF',
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
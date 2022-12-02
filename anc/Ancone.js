import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'



export default function AncOne({navigation}) {
    const onPresshundler = () => {
    navigation.goBack()
    }
     return(
      <ScrollView contentContainerStyle={{margin:"2%"}} style={{backgroundColor:'#FFC1E3'}}>
      <View style={styles.body} >
      <Text style={styles.headtitle}>
      မိခင် ကိုယ်ဝန်စောင့်ရှောက်ခြင်း 
      </Text>
      <Text style={styles.subtitle}>(က) ကိုယ်ဝန်ဆောင်စဥ် လိုက်နာရမည့် အချက်များ </Text>
      <Text style={styles.subp}> ကိုယ်ဝန်ဆောင်မိခင်များလိုက်နာဆောင်ရွက်ရန်</Text>
      <Text style={styles.p}> 
      	ကိုယ်ဝန်ရှိကြောင်း သိလျှင်သိချင်း နီးစပ်ရာ ဆေးရုံ၊ ဆေးခန်း၊ ကျန်းမာရေးဌာနများတွင်ကိုယ်ဝန်အပ်ပါ။
      {"\n"}	ကိုယ်ဝန်ရှိနေပြီဟု သံသယရှိလျှင် စောစီးစွာ ဆေးခန်းသို့ ပြသပါက မိမိ နှင့် ရင်သွေးငယ်၏ ကျန်းမာရေး စောင့်ရှောက်မှုကို ပိုမိုကောင်းမွန်အောင် လုပ်ဆောင်ပေးနိုင်ပါသည်
      {"\n"}	ကျန်းမားရေးဝန်ထမ်းနှင့် ပြသ၍ ကိုယ်ဝန်ဆောင်စောင့်ရှောက်မှု အနည်းဆုံး(၄) ကြိမ်ခံယူပါ။
      {"\n"}	မေးခိုင်ကာကွယ်ဆေးနှစ်ကြိမ်ထိုးပါ။
      {"\n"}	သံဓာတ်၊ ဖောလိပ်ဓာတ် နှင့် ဗီတာမင်ဘီဝမ်း အားဆေးကို မှန်မှန်သောက်ပါ။
      {"\n"}	Iodine ဓါတ် ပါ၀င်သောဆားကို စားပေးပါ။
      {"\n"}	တတ်ကျွမ်းသော ကျန်းမာရေးစောင့်ရှောက်မှုပေးသူမှ ညွှန်ကြားသော ဆေးဝါးမှအပ အခြား
ဆေးများ သောက်သုံးရန် ရှောင်ကြည်ပါ။
{"\n"}	အာဟာရ ပြည့်ဝသောအစားအစာ စားပေးပါ၊ တက်စာ နှင့် အငံ များကိုလျော့စားပါ။
{"\n"}	နေ့စဉ်သင့်တော်သော ကိုယ်လက်လှုပ်ရှားမှု အသင့်အတင့်ပြုလုပ်ပါ။ အိပ်ရေးဝအောင် အိပ်ပါ။
နေ့လည်ပိုင်းတွင် အနားယူပါ။ အလေးအပင် မ သော အလုပ်များ မပြုလုပ်ပါနှင့်။
{"\n"}	ဆေးလိပ်၊ အရက်သောက်ခြင်း ရှောင်ကြည်ပါ။ ကွမ်းစားခြင်း ရှောင်ကြည်ပါ။ ဆေးလိပ်ငွေ့၊
မီးခိုးငွေ့အစရှိသည့် ညစ်ညမ်းသော လေထုပတ်ဝန်းကျင်မှ ရှောင်ရှားပါ။
{"\n"}	ငှက်ဖျားနှင့် သွေးလွန်တုပ်ကွေးရောဂါ ကာကွယ်နိုင်ရန်အတွက် ဘယ်အချိန်အိပ်အိပ် ဆေးစိမ်
ခြင်ထောင်ဖြင့်အိပ်ပါ။
{"\n"}	နေမကောင်းဖြစ်ပါက နီးစပ်ရာဆေးရုံ / ဆေးခန်း / ကျန်းမာရေးဌာနများသို့ အမြန်ဆုံးသွားရောက်၍ ဆေးကုသမှုခံယူပါ။
{"\n"}	လုံခြုံစိတ်ချစွာ မွေးဖွားရန်အတွက် ဖြစ်နိုင်ပါက ကျွမ်းကျင်သောဆေးဝန်ထမ်းနှင့် ဆေးရုံ၊ ဆေးခန်းတွင်သာ မွေးဖွားပါ။
{"\n"}	မွေးဖွားပြီး ပြီးလျှင်ပြီးချင်း ကလေးငယ်ကိုကာကွယ်ဆေး စောနိုင်သမျှစောအောင် ထိုးပေးပါ။
{"\n"}	မိမိ ရင်သွေးငယ်ကို ကာကွယ်ဆေးများအား သတ်မှတ်ထားသော အချိန်ဇယားအတိုင်း 
အကြိမ်ရေ ပြည့်အောင်ထိုးရန်။ (MOHS, 2016)

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
    backgroundColor:'#e5adcc',
    textDecorationLine: 'underline',
  }
    
    })
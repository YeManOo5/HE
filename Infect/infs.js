import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function infs({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.subtitle}>
         ၇.၁၉	အသည်းရောင်အသားဝါ (စီ)
         </Text>
         <Text style={styles.p}>
         {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         အသည်းရောင်အသားဝါရောဂါ (စီ) ပိုးကြောင့် ဖြစ်ပွားသော ရောဂါတစ်ခုဖြစ်သည်။ သာမန်ရောဂါလက္ခဏာများအား ရက်သတ္တပတ်အနည်းငယ်ခန့် ခံစားရနိုင်ခြင်းမှ နှစ်ပေါင်းများစွာ နာတာရှည်ရောဂါအဖြစ် ခံစားရနိုင်ခြင်းအထိ ဖြစ်ပွားနိုင်ပါသည်။ အသည်းခြောက်ပြီး အသည်းကင်ဆာ ဖြစ်နိုင်သည်။ ကျန်းမာရေးဌာနသို့ ဆေးဝါးကုသမှု ပေးနေပြီဖြစ်ပါသည်။ 
           </Text>
           <List.Accordion
        title="ရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•ဖျားခြင်း\n•အသားဝါ၊ မျက်လုံးဝါခြင်း၊ ဆီးအရောင်ရင့်ခြင်း\n•မောပန်းနွမ်းနယ်ခြင်း\n•အစားအသောက်ပျက်ခြင်း၊\n•ပျို့အန်ခြင်း၊ ဗိုက်အောင့်ခြင်း\n•အဆစ်အမြစ်များ နာကျင်ကိုက်ခဲခြင်း`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="ကူးစက်နိုင်သည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	အသည်းရောင်အသားဝါ (စီ) ပိုးပါသော သွေးသွင်းမိခြင်း
•	ရောဂါပိုးပါသော အပ်များဖြင့် ဆေးထိုးခြင်း၊ သွေဖောက်ခြင်း၊ နားဖောက်ခြင်း၊ အပ်စိုက်ခြင်း၊ ဆေးမင်ကြောင်ထိုးခြင်း 
•	ရောဂါပိုးရှိသော ဓားတစ်ချောင်းတည်းဖြင့် ဆက်တိုက် ခေါင်းရိတ်ခြင်း၊ မုတ်ဆိတ်ရိတ်ခြင်း
•	ရောဂါပိုးရှိသောသူနှင့် သွားတိုက်တံ၊ သွားကြားထိုးတံ၊ မုတ်ဆိတ်ရိတ်ဓား အတူတူသုံးခြင်း
•	ရောဂါပိုးရှိသူနှင့် လိင်ဆက်ဆံခြင်းမှသော်လည်းကောင်း၊ ရောဂါပိုးရှိသော မိခင်မှ မွေးဖွားလာသောကလေးသို့လည်းကောင်း ကူးစက်တတ်ပါသည်။ 
•	ရောဂါပိုးပါဝင်သော ကိုယ်ခန္ဓာအစိတ်အပိုင်းများ အစားထိုးကုသခြင်း
      ခုခံအားကျဆင်းမှု ကူးစက်ရောဂါရှိသူများ၊ ဆေးမင်ကြောင်ထိုးလေ့ရှိသူများ၊ နားဖောက်လေ့ရှိသူများ၊ ကျန်းမာရေးဝန်ထမ်းများတွင် ကူးစက်ခံရနိုင်ချေ ပိုမိုများပြားပါသည်။
      မိခင်နို့ရည်မှသော်လည်းကောင်း၊ အစားအစာ၊ ရေ၊ သာမန်ပွေ့ဖက်ခြင်း၊ နမ်းရှုံ့ခြင်း စသည်တို့မှ မကူးစက်တတ်ပါ။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ကာကွယ်နိုင်မည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	မလိုအပ်ဘဲ ဆေးထိုးခံခြင်းမှ ရှောင်ကြဉ်ပါ။
•	တစ်ခါသုံးဆေးထိုးအပ်များကိုသာ အသုံးပြုပါ။
•	လက်သန့်ရှင်းရေးနှင့် တစ်ကိုယ်ရေသန့်ရှင်းရေးကို အထူးဂရုပြုဆောင်ရွက်ပါ။
•	သွေးမလှူမီ သွေးလှူရှင်အား အိချ်အိုင်ဗွီ၊ ဆစ်ဖလစ်၊ အသည်းရောင်သားဝါရောဂါ (ဘီ) နှင့် (စီ) ရှိ/မရှိ စစ်ဆေးခြင်းများ ပြုလုပ်ရပါမည်။
•	လိင်ဆက်ဆံတိုင်း ကွန်ဒုံးကို စနစ်တကျ အသုံးပြုပါ။
•	သွားတိုက်တံ၊ မုတ်ဆိတ်ရိတ်ဓါးများကို မျှတသုံးစွဲခြင်း မပြုလုပ်ရပါ။`}
titleNumberOfLines={200}/><Text style={styles.subtitle}>{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}ကမ္ဘာပေါ်တွင် အသည်းရောင်အသားဝါရောဂါ (စီ) {"\n"} ပိုးကာကွယ်ဆေးမရှိသေးပါ။</Text>
        </List.Accordion>
         
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
    fontSize:30,
    marginTop:10,
    
  },
  subtitle:{
    color:'#260e04',
    fontSize:18,
    textDecorationLine: 'underline',
  },
  p:{
    margin:7,
    color:'#4e342e',
    fontSize:15,
    lineHeight: 26,
  },
  subp:{
    color:'#4e342e',
    fontSize:15,
    backgroundColor:'#c1e5c3',
    textDecorationLine: 'underline',
  }
    
    })
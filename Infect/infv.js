import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function infv({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.subtitle}>
         ၇.၂၂	မျက်မြှေးရောင်ရောဂါ/မျက်စိနာရောဂါ
         </Text>
         <Text style={styles.p}>{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         မျက်မြှေးရောင်ရောဂါ (သို့မဟုတ်) မျက်စိနာရောဂါသည် များသောအားဖြင့် ဗိုင်းရပ်စ် ပိုးများကြောင့်ဖြစ်ပွားပြီး အဖြစ်များသော မျက်စိရောဂါတစ်မျိုးဖြစ်သည်။ ရောဂါဖြစ်ပွားလျှင် (၇)ရက်မှ (၁၀)ရက်ခန့် အထိ ကြာမြင့်တက်ပြီး ရာသီမရွေး ဖြစ်ပွားနိုင်ပါသည်။</Text>
         <List.Accordion
        title="ရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	မျက်စိယားယံခြင်း
•	မျက်ရည်ယိုခြင်း
•	မျက်စိနီရဲခြင်း
•	မျက်ဝတ်များထွက်ခြင်း
•	မျက်စိနာကျင်ရောင်ရမ်းခြင်း
•	အလင်းရောင်မကြည့်နိုင်ခြင်းတို့ ဖြစ်နိုင်ပါသည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="ရောဂါကူးစက်ပုံ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	ရောဂါဖြစ်သူ၏ အဝတ်အစား၊ အသုံးအဆောင်များမှတဆင့် ကူးစက်နိုင်ပါသည်။
•	ကူးစက်မြန်သော ရောဂါဖြစ်သဖြင့် တစ်ဦးတစ်ယောက်ရောဂါစဖြစ်လျှင် အခြားသူများသို့ လျင်မြန်စွာ ကူးစက်ပြန့်ပွားသွားနိုင်ပါသည်။ ဥပမာအားဖြင့် ကျောင်းသားတစ်ဦးမှ စာသင်ခန်း တစ်ခန်းလုံး၊ တစ်ကျောင်းလုံးသို့ ကူးစက်နိုင်ပါသည်။
•	မျက်စိနာသူနှင့် နီးကပ်စွာ အတူနေထိုင်သူတို့တွင် ရောဂါကူးစက်လွယ်သဖြင့် အထူးသတိပြုရပါမည်။ မိခင်နှင့် ကလေးတို့မှာ အလွန်နီးစပ်သဖြင့် ကူးစက်နှုန်း မြန်ဆန်ပါသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ရောဂါကာကွယ်ကုသခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	ရောဂါဖြစ်ပွားပါက မျက်စိနာသူ၏ မျက်လုံးတစ်ဝိုက်ကို သန့်ရှင်းသော ဂွမ်းအစိုဖြင့် တစ်နေ့ (၂)ကြိမ် (၃)ကြိမ်ခန့် သန့်စင်ပေးရပါမည်။ သန့်စင်ပေးသူသည် လက်ကို ဆပ်ပြာဖြင့် သေချာစွာ ဆေးကြောရပါမည်။
•	မျက်စိဆရာဝန်ထံညွှန်းပို့ပြီး ညွှန်ကြားသည့်အတိုင်း ပဋိဇီဝဆေးပါဝင်သော မျက်စဉ်း ခပ်ရပါမည်။
•	မျက်စဉ်းမခပ်မီနှင့် ခပ်ပြီးတိုင်း လက်ဆေးရပါမည်။
•	ရောဂါဖြစ်သူ၏ အဝတ်အစား၊ အသုံးအဆောင် (အထူးသဖြင့် အမျိုးသမီးမျက်နှာ အလှပြင်ပစ္စည်းများ) စုပေါင်းအသုံးပြုခြင်းတို့မှ တစ်ဆင့်အခြားသူများသို့ လျင်မြန်စွာ ရောဂါကူးစက်နိုင်ပါသဖြင့် အတူသုံးစွဲခြင်း လုံးဝမပြုလုပ်ရပါ။ သီးသန့်လျှော်ဖွတ် သန့်စင်ရပါမည်။`}
titleNumberOfLines={200}/>
<Text style={styles.subtitle}>မျက်စိနာရောဂါကာကွယ်ရန် ပြည်သူများအနေဖြင့် တစ်ကိုယ်ရေ သန့်ရှင်းရေးကို အထူးဂရုပြု ဆောင်ရွက်ခြင်း၊ လက်ကိုဆပ်ပြာဖြင့် စင်ကြယ်စွာဆေးကြောခြင်းနှင့် ရောဂါဖြစ်ပွားလာပါက နီးစပ်ရာ ဆေးရုံ၊ ဆေးခန်းနှင့် ကျန်းမာရေးဌာနများတွင် ဆောလျင်စွာပြသ၍ စနစ်တကျဆေးကုသမှု ခံယူကြရန် လိုအပ်ပါသည်။</Text>
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
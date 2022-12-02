import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function infa({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.p}>
         <Text style={styles.subtitle}>၇.၁	ပြင်းထန် ဝမ်းပျက်ဝမ်းလျှောရောဂါ (ကာလဝမ်းရောဂါ)</Text>
         {"\n"} {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         ပြင်းထန်ဝမ်းပျက်ဝမ်းလျှောရောဂါသည် ဝမ်းရောဂါဖြစ်ပွားစေသော ကာလဝမ်း ရောဂါပိုး (Vibrio Cholerae) ကဲ့သို့သော ရောဂါပိုးများပါရှိသည့် မသန့်ရှင်းသောရေနှင့် အစားအစာများ စားသောက်မိခြင်းမှ တစ်ဆင့် ကူးစက်ဖြစ်ပွားစေသည်။
         {"\n"}•	ကာလဝမ်းရောဂါပိုးသည် ရောဂါဖြစ်သူထံမှ စွန့်ပစ်လိုက်သော မစင်တွင် ပါဝင်သည်။
         {"\n"}•	ဝမ်းလျှောရောဂါ ပြင်းထန်သောအခါ ခန္ဓာကိုယ်အတွင်းမှ ရေနှင့်ဓာတ်ဆားများ လျင်မြန်စွာ ကုန်ခမ်းသွားသောကြောင့် အရည်ခမ်းခြောက်ခြင်းကို ဖြစ်စေသည်။
         {"\n"}•	ရောဂါပြင်းထန်ပြီး အချိန်မီဆေးကုသမှုခံယူခြင်းမရှိက အသက်ဆုံးရှုံးနိုင်သည်။
          </Text>
          <List.Accordion
        title="ကူးစက်နိုင်သည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•မသန့်ရှင်းသောရေကို သောက်သုံးခြင်း\n•အိမ်သာတက်ပြီး လက်မဆေးခြင်း\n•ယင်လုံအိမ်သာဆောက်လုပ်သုံးစွဲမှုအားနည်းခြင်း\n•အစာမစားမီလက်ကိုစင်ကြယ်စွာမဆေးခြင်း\n•ယင်နားစာများနှင့်မသန့်ရှင်းသောအစားအစာများစားသုံးခြင်း\n•တစ်ကိုယ်ရေ သန့်ရှင်းမှုမရှိခြင်း\n•ပတ်ဝန်းကျင် သန့်ရှင်းမှုနည်းပါးခြင်း/ မရှိခြင်း\n•တစ်ကိုယ်ရည် သန့်ရှင်းမှုအားနည်းခြင်း`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="ရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	အရည်ဝမ်းသွားခြင်း
•	အော့အန်ခြင်း
•	ခန္ဓာကိုယ်အတွင်းရှိရေနှင့် ဓာတ်ဆားများလျင်မြန်စွာ ဆုံးရှုံး၍ အားအင်ကုန်ခမ်းခြင်း၊ ကြွက်တက်ခြင်း၊ သတိလစ်ခြင်း စသည်တို့ ဖြစ်ပွားပြီး အသက်သေဆုံးသည်အထိ ဖြစ်နိုင်ပါသည်။`}
titleNumberOfLines={200}/><Text style={styles.subtitle}>ပြင်းထန်သောလက္ခဏာရှိက အသက်ဆုံးရှုံးမှုမှ ကာကွယ်ရန် ရောဂါဖြစ်လျှင် ဖြစ်ပွားချင်း နီးစပ်ရာ ကျန်းမာရေးဌာနသို့ သွားရောက်၍ ကုသမှုခံယူပါ။</Text>
      </List.Accordion>

      <List.Accordion
        title="ပြင်းထန်ဝမ်းပျက်လျောရောဂါ မဖြစ်ပွားစေရန်" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	ရေကိုကျိုချက်၍သော်လည်းကောင်း၊ ကလိုရင်ဆေးခပ်၍ သော်လည်းကောင်း အသုံး ပြုပါ။
•	အစားအစာများကို ယင်မနားစေရန် ဖုံးအုပ်ထားပါ။
•	အစားအစာများကို ပူပူနွေးစားပါ။
•	မှိုတက်နေသော အစားအစာများ၊ ယင်နားစာများ၊ အမှည့်လွန်သော အသီးများကို မစားပါနှင့်။
•	သန့်ရှင်းသော ယင်လုံအိမ်သာများ ဆောက်လုပ်အသုံးပြုပါ။
•	အစာမစားမီနှင့် အိမ်သာမှဆင်းလျှင် လက်ကိုဆပ်ပြာဖြင့် စင်ကြယ်စွာ ဆေးကြောပါ။
•	လူနာ၏ အဝတ်အစားများကို သောက်သုံးရေကန်များအနီးတွင် မလျှော်ဖွပ်ရ။
(ဆေးရုံတက်လူနာများ ဆေးရုံတွင်သာ သီးသန့်လျှော်ဖွပ်ပါ။)
•	ကလေးငယ်များ၏ မစင်ကိုလည်း ယင်မနားအောင် စနစ်တကျစွန့်ပစ်ပါ။
•	အစားအစာမျာကို မကိုင်မီ၊ အစားအစာများကို မပြင်ဆင်မီ၊ အစာမစားမီနှင့် အိမ်သာ အသုံးပြုပြီးလျှင် လက်ကို ဆပ်ပြာဖြင့် စင်ကြယ်စွာဆေးကြောပါ။
•	ဝမ်းပျက်ဝမ်းလျှောပြင်းထန်ပါက နီးစပ်ရာကျန်းမာရေးဌာနသို့ သွားရောက်ပြသပါ။ ဓာတ်ဆားရည်သောက်ပါ။`}
titleNumberOfLines={200}/>
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
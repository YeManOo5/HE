import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function infq({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.subtitle}>
         ၇.၁၇	အသည်းရောင်အသားဝါ (အေ) ရောဂါ
         </Text>
         <Text style={styles.p}>
         {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         အသည်းရောင်အသားဝါ ဗိုင်းရပ်စ်ရောဂါ (အေ) ပိုးကြောင့် ဖြစ်ပွားသော ရောဂါတစ်ခု ဖြစ်ပါသည်။ နာတာရှည်အသည်းရောဂါဖြစ်ပွားပြီး မောပန်းနွမ်းနယ်ခြင်း၊ မအီမသာဖြစ်ခြင်းများ ခံစားရတတ်ပါသည်။ ရုတ်တရက် အသည်းရောင်ခြင်းများ ဖြစ်ပေါ်ပါက တစ်ခါတစ်ရံ အသက်သေဆုံးတတ်ပါသည်။
           </Text>
         
           <List.Accordion
        title="ရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•ဖျားခြင်း\n•ဆီးအရောင်ရင့်ခြင်း၊ အသားဝါခြင်း၊ မျက်လုံးဝါခြင်း\n•မောပန်းနွမ်းနယ်ခြင်း\n•ပျို့အန်ခြင်း\n•အစားအသောက်ပျက်ခြင်း\n•အဆစ်အမြစ်ကိုက်ခဲခြင်း`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="ကူးစက်နိုင်သည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	ရောဂါရှိသူ၏ ကိုယ်ခန္ဓာမှထွက်သော အရည်များနှင့် ထိတွေ့ကိုင်တွယ်မိခြင်း၊ မသန့်ရှင်းသော အစားအစာနှင့် ရေများအား စားသောက်မိခြင်းမှတဆင့် ကူးစက်နိုင်သည်။
•	ရောဂါပိုးရှိသူ၏ အညစ်အကြေး၊ မစင်တို့မှ တစ်ဆင့်ကူးစက်နိုင်သည်။
•	ရောဂါပိုးရှိသူနှင့် လိင်ဆက်ဆံခြင်းမှလည်း ကူးစက်နိုင်သည်။
     ဤရော၍သည် အလွယ်တကူ ကူးစက်တတ်ပြီး အထူးသဖြင့် ကလေးများတွင် ပိုမို၍ ဖြစ်ပွားတတ်သည်။ အသည်းရောင်အသားဝါရောဂါ (အေ) အဖြစ်များသော ဒေသတွင်နေထိုင်ခြင်း၊ ထိုဒေသသို့ ခရီးသွားခြင်း၊ အလုပ်သွားရောက်လုပ်ကိုင်ခြင်း၊ ပိုးရှိသူနှင့်အတူ နေထိုင်သူများတွင် ပိုမိုဖြစ်ပွားတတ်ပါသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ကာကွယ်နိုင်မည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	တစ်ကိုယ်ရေသန့်ရှင်းရေးဂရုစိုက်ပါ။ အစားအစာ မကိုင်တွယ်မီ၊ မချက်ပြုတ်မီ၊ အစာမစားမီနှင့် အိမ်သာအသုံးပြုပြီးတိုင်း လက်ကိုဆပ်ပြာဖြင့် စင်ကြယ်စွာ ဆေးကြောပါ။\n•	အစားအစာများအား သေချာစွာ ကျက်အောင်ချက်ပြုတ်၍ ပူပူးနွေးနွေးစားသုံးပါ။ အသား၊ ငါးနှင့် ပင်လယ်စာများအား မချက်ပြုတ်ဘဲ အစိမ်းစားသုံးခြင်းမှ ရှောင်ကြဉ်ပါ။
•	လက်သုပ်စာများ၊ ယင်နားစာများ စားသုံးခြင်းမှ ရှောင်ကြဉ်ပါ။ အစားအစာများအား ယင်မနားအောင် ဖုံးအုပ်ထားပါ။
•	အသီးအရွက်နှင့် အသားငါးများအား သန့်ရှင်းသောရေဖြင့် စင်ကြယ်စွာဆေးကြောပြီးမှ ချက်ပြုတ်စားသုံးပါ။ သစ်သီးဝလံများအား အခွံနွှာပြီးမှ စားသုံးပါ။
•	ရေကို ကျိုချက်သောက်သုံးပါ။
•	ယင်လုံအိမ်သာ ဆောက်လုပ်သုံးစွဲပါ။
•	ရောဂါဖြစ်ပွားသူလူနာများအနေဖြင့် အရေပြားနှင့် မျက်သားဝါပြီးနောက် (၁၀)ရက် ကြာသည်အထိ အစားအသောက် ကိုင်တွယ်ရောင်းချခြင်းအား ရပ်နားထားပါ။
•	အကိုက်အခဲပျောက်ဆေးများ မလိုအပ်ဘဲ သောက်သုံးခြင်းမှ ရှောင်ကြဉ်ပါ။
•	အရက်အလွန်အကျွံသောက်ခြင်းမှ ရှောင်ကြဉ်ပါ။
•	ဖျားခြင်း၊ အန်ခြင်း၊ ဗိုက်အောင့်ခြင်း၊ အစားအသောက်ပျက်ခြင်း၊ ကိုယ်လက်မအီ မသာဖြစ်ခြင်း၊ အရေပြားနှင့် မျက်သားဝါခြင်း စသည့် ရောဂါလက္ခဏာများ ဖြစ်ပေါ်လာပါက နီးစပ်ရာကျန်းမာရေးဌာနသို့ အမြန်ဆုံးသွားရောက်ပြသပါ။ အဆိုပါ ရောဂါလက္ခဏာဖြစ်ပွားသူ သံသယလူနာများအား တွေ့ရှိပါက နီးစပ်ရာကျန်းမာရေး ဌာနသို့ ချက်ချင်းသတင်းပို့ပါ။
•	အသက်(၁)နှစ်နှင့် အထက်လူများတွင် အသည်းအရောင်အသားဝါ (အေ) ကာကွယ် ဆေး(၂)ကြိမ် ထိုးနှံခြင်းဖြင့် အသည်းရောင်အသားဝါ ရောဂါ (အေ) ပိုးကူးစက်ခံရမှုမှ ကာကွယ်နိုင်သည်။`}
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
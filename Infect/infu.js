import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function infu({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၇.၂၁	ရာသီတုပ်ကွေးရောဂါ
         </Text>
         <Text style={styles.p}>{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         ရာသီတုပ်ကွေးရောဂါ (Seasonal Influenza) သည် တုပ်ကွေးရောဂါ ဗိုင်းရပ်စ်ပိုး ကြောင့်ဖြစ်ပွားပြီး ရောဂါပိုးသည် အသက်ရှုလမ်းကြောင်းမှတစ်ဆင့် အခြားလူများသို့ ကူးစက်နိုင်ပါသည်။</Text>
         <List.Accordion
        title="ရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•ဖျားခြင်း\n•နှာရည်ယိုခြင်း\n•နှာချေခြင်း\n•ချောင်းဆိုးခြင်း\n•လည်ချောင်းနာခြင်း\n•ကိုယ်၊ လက်ကိုက်ခဲခြင်း\n•ခေါင်းကိုက်ခြင်း\n•အစားအသောက်ပျက်ခြင်းတို့ဖြစ်နိုင်ပါသည်။
	ရောဂါပြင်းထန်လျှင် အဖျားကြီးခြင်း၊ ချောင်းအလွန်ဆိုးခြင်း၊ အသက်ရှူခက်ခဲခြင်း၊ မောခြင်း၊ ပင်ပန်းနွမ်းနယ်ခြင်း၊ ဂနာမငြိမ်ဖြစ်ခြင်းနှင့် သတိလစ်ခြင်းတို့ဖြစ်ပွားပြီး အသက်ဆုံးရှုံးနိုင်ပါသည်။
	အဆိုပါ ရောဂါသည် သာမန်အားဖြင့် အပြင်းထန်သော်လည်း ကလေးငယ်များ၊ ကိုယ် ဝန်ဆောင်မိခင်များနှင့် အသက်ကြီးသူများ၊ နာတာရှည်ရောဂါရှိသူများတွင် ဖြစ်ပွားပါက ရောဂါပိုမိုပြင်းထန်ပြီး တုပ်ကွေးရောဂါ၏ ဘေးထွက်ဆိုးကျိုးများကြောင့် အသက်ဆုံးရှုံးနိုင်ပါ သည်။`}
        titleNumberOfLines={200} /><Text style={styles.subtitle}>ရာသီတုပ်ကွေးရောဂါဖြစ်ပွားပါက ရောဂါလက္ခဏာပြင်းထန်းစွာ ခံစားနေရသူများ၊ အသက်ကြီးသူများ၊ နာတာရှည်ရောဂါသည်များအား နီးစပ်ရာဆေးရုံဆေးခန်းများနှင့် ကျန်းမာရေးဌာနများတွင် ဆောလျင်စွာပြသ၍ စနစ်တကျဆေးကုသမှုခံယူကြရန် နှင့် အခြားသူများသို့ ရောဂါကူးစက်မှုမရှိစေရေးအတွက် ဂရုပြုနေထိုင်ကြရန် လိုအပ်ပါသည်။</Text>
      </List.Accordion>

      <List.Accordion
        title="ကူးစက်နိုင်သည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`   ရာသီတုပ်ကွေးရောဂါသည် လူတစ်ဦးမှ တစ်ဦးသို့ ချောင်းဆိုးခြင်း၊ နှာချေခြင်းဖြင့် တိုက်ရိုက်သော်လည်းကောင်း၊ ရောဂါဖြစ်သူ၏ ချွဲ၊ သလိပ်၊ ခန္ဓာကိုယ်အရည်၊ အသုံး အဆောင်ပစ္စည်းများကို ကိုင်တွယ်ထိတွေ့ခြင်းမှသော်လည်းကောင်း ကူးစက်နိုင်ပါသည်။
	ရာသီတုပ်ကွေးရောဂါသည် လူတိုင်းတွင် ရောဂါဖြစ်ပွားနိုင်ပြီး မိုးတွင်းနှင့် ဆောင်းကာလများတွင် လူတစ်ဦးမှ တစ်ဦးသို့ လျင်မြန်စွာ ကူးစက်ကာ ကပ်အသွင် ပိုမိုဖြစ် ပွားနိုင်ပါသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ကာကွယ်နိုင်မည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	တစ်ကိုယ်ရေသန့်ရှင်းရေးကို အထူးဂရုပြုဆောင်ရွက်ခြင်း
•	နှာချေ၊ ချောင်းဆိုးလျှင် လက်ကိုင်ပုဝါဖြင့် ဖုံးအုပ်၍ ပြုလုပ်ခြင်း
•	လက်ကိုဆပ်ပြာဖြင့် စင်ကြယ်စွာဆေးကြောခြင်း
•	ကောင်းစွာ အိပ်စက်အနားယူခြင်း
•	အာဟာရ ပြည့်ဝသည့် အစားအစာများ စားသုံးခြင်း
•	လေကောင်းလေသန့်ရရှိအောင် ဆောင်ရွက်နေထိုင်ခြင်း
•	လူထူထပ်သောနေရာများနှင့် ပွဲလမ်းသဘင်များအား သွားရောက်ခြင်းမှ ရှောင်ကြဉ် ခြင်း
•	ရောဂါဖြစ်ပွားသူများကို အခြားသူများသို့ ကူးစက်ခြင်းမရှိစေရန် ဂရုပြု၍ နေထိုင်စေ ခြင်း
•	ရောဂါရှိသူ၏ နေအိမ်နှင့် ဆေးရုံများသို့ မလိုအပ်ဘဲ သွားရောက်ခြင်းမှ ရှောင်ကြဉ်ရန် လိုအပ်ပါသည်။ `}
titleNumberOfLines={200}/><Text style={styles.subtitle}>ကာကွယ်ဆေးထိုးနှံခြင်းဖြင့်လည်း ရာသီတုပ်ကွေးရောဂါဖြစ်ပွားမှုကို ကာကွယ်နိုင်ပါသည်</Text>
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
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'

export default function infi({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၇.၉	ခွေးရူးပြန်ရောဂါ
         </Text>
         <Text style={styles.p}>
         {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"} 
         ခွေးရူးပြန်ရောဂါဆိုသည်မှာ ခွေးရူးပြန်ရောဂါဖြစ်စေသော ဗိုင်းရပ်(စ်) ပိုးတစ်မျိုး ကြောင့် ဖြစ်ပွားပြီး၊ ကူးစက်ဖြစ်ပွားလျှင် ရာနှုန်းပြည့် သေဆုံးနိုင်သော ရောဂါ ဖြစ်ပါသည်။
           </Text>
           <List.Section title="" style={styles.headtitle}>
      <List.Accordion
        title="ရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`လူတွင် ခွေးရူးပြန်ရောဂါ ဖြစ်ပွားပါက ခေွး၊ ကြောင်စသည့် တိရစ္ဆာန်များ အကိုက်ခံရ ခြင်း၊ အကုတ်ခံရခြင်းရာဇဝင်နှင့် အောက်ပါရောဂါလက္ခဏာများကို တွေ့ရှိရနိုင်ပါသည်။\n(၁) ရောဂါဖြစ်ပွားသည့်အနာမှ နာခြင်း၊ ယားခြင်း\n(၂) လေကြောက်ခြင်း\n(၃) ရေကြောက်ခြင်း\n(၄) ရေနှင့် အစာမြိုရခက်ခဲခြင်း\n(၅) သွားရည်တစီစီကျခြင်း\n(၆) ဂနာမငြိမ်ဖြစ်ခြင်း\n(၇) တက်ခြင်း\n(၈) အသက်ဆုံးရှုံးခြင်း`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="ကူးစက်နိုင်သည့်နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	ခွေးရူးပြန်ရောဂါပိုးရှိသည့် ခွေး၊ ကြောင် စသည့် တိရစ္ဆာန်များ ကုတ်ခံရခြင်း၊ ကိုက်ခံ ရခြင်း
•	ခွေးရူးပြန်ရောဂါရှိသည့် တိရစ္ဆာန်များ၏ သွားရည်နှင့် မိမိတွင်ရှိသည့် အနာ၊ ဒဏ်ရာ များကိုထိမိခြင်း
•	ခွေးရူးပြန်ရောဂါဖြင့် သေဆုံးသူထံမှ ရရှိသည့် မျက်ကြည်လွှာနှင့် အခြားခန္ဓာကိုယ် အစိတ်အပိုင်းများအား အစားထိုးကုသမှု ခံယူခြင်း`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ခွေးရူးပြန်ရောဂါဖြစ်ပွားနေသည့် တိရစ္ဆာန်များသည်" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	ဒေါသအလွန်ကြီးပြီး ကိုက်တတ်ခြင်း
•	တုတ်ချောင်း၊ အမှိုက်စ၊ စက္ကူတို့အား စားခြင်း
•	အသံအက်ဖြင့် ဟောင်ခြင်း၊ အူခြင်း၊ သွားရည်တစီစီကျခြင်း၊ အမြီးကုတ်ခြင်း စသည့်လက္ခဏာများ တွေ့ရနိုင်ပါသည်။`}
titleNumberOfLines={200}/>
<Text style={styles.subtitle}>ခွေးရူးပြန်ရောဂါဖြစ်ပွားပါက ရာနှုန်းပြည့် သေဆုံးနိုင်ပါသည်။</Text>
        </List.Accordion>

        <List.Accordion
        title="ကာကွယ်နိုင်မည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	အိမ်မွေးခွေးနှင့် ကြောင်များအား တိရစ္ဆာန်ဆေးကုဆရာဝန်၏ ညွှန်ကြားချက်အတိုင်း ခွေးရူးပြန်ကာကွယ်ဆေး အကြိမ်ပြည့်ထိုးနှံပေးခြင်း။
•	ခွေး၊ ကြောင် တိရစ္ဆာန်များနှင့် အနီးကပ်ကိုင်တွယ်သူများအား ခွေးရူးပြန်ရောဂါ ကာကွယ်ဆေးကြိုတင် ထိုးနှံပေးခြင်းနှင့် လိုအပ်ပါက ထပ်မံထိုးနှံပေးခြင်း။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ခွေးကိုက်ခံရပါက ခွေးရူးပြန်ရောဂါ မဖြစ်အောင်ကာကွယ်ပုံ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	ခွေးကိုက်ခံရပါက ဒဏ်ရာအား ရေနှင့် ဆပ်ပြာတို့ဖြင့် အနည်းဆုံး(၅)မိနစ် ဆေးပါ။
•	အနာအား အရက်ပြန် (သို့) ဘီတာဒင်းကဲ့သို့သော ပိုးသန့်စင်ဆေးရည်ထည့်ပါ။
•	ဉီးခေါင်း၊ လည်ပင်းနှင့် လက်ချောင်းထိပ်တို့တွင် အကိုက်ခံရပါက ပိုမိုဂရုစိုက်၍ အရေးပေါ် ချက်ချင်းကုသမှုခံယူရန် လိုအပ်ပါသည်။
•	ခွေးရူးပြန်ရောဂါ မဖြစ်စေရန် တစ်ခုတည်းသော ကာကွယ်ရန်နည်းလမ်းမှာ ခွေးရူး ပြန်ရောဂါကာကွယ်ဆေး အမြန်ဆုံးနှင့် အကြိမ်ပြည့်ထိုးနှံရန် ဖြစ်ပါသည်။ ခွေးရူးပြန် ပိုးသတ်ဆေး (Anti rabies serum) ထိုးနိုင်ပါက ပိုကောင်းပါသည်။
•	သို့ဖြစ်ပါ၍ ခွေးကိုက်ခံရပါက နီးစပ်ရာဆေးရုံသို့ အမြန်ဆုံး သွားရောက်ကုသမှု ခံယူရန် လိုအပ်ပါသည်။`}
titleNumberOfLines={200}/>
<Text style={styles.subtitle}>အချိန်မီကာကွယ်ဆေးထိုးခြင်းဖြင့် ခွေးရူးပြန်ရောဂါ ဖြစ်ပွားမှုအား ကာကွယ်နိုင်ပါသည်။</Text>
        </List.Accordion>
</List.Section>
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
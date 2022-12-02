import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function nong({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView  style={{backgroundColor:'#F8FFD7'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၈.၇	ပန်းနာရင်ကျပ်ရောဂါ
         </Text>
         <Text style={styles.p}>{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         ပန်းနာရင်ကျပ်ရောဂါဆိုသည်မှာ အသက်ရှုလမ်းကြောင်းနှင့် လေပြွန်များရောင်ရမ်း ပြီး သာမန်ထက်ပို၍ တုန့်ပြန်မှု များပြားမြန်ဆန်နေခြင်းဖြစ်သည်။
         </Text>
         <List.Accordion
        title="ဖြစ်ပွားရခြင်း အကြောင်းရင်းများ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	မျိုးရိုးဗီဇဆိုင်ရာ အကြောင်းရင်းများ
•	ဓာတ်မတည့်မှုများ
•	အိမ်တွင်း၊ အိမ်ပြင် ဖုန်မှုန့် အခိုးအငွေ့များ
•	ဆေးလိပ်သောက်ခြင်း
•	လေထုညစ်ညမ်းမှုများ
•	ကပ်ပါးရောဂါနှင့် အခြားအသက်ရှုလမ်းကြောင်းဆိုင်ရာ ကူးစက်ရောဂါများ
•	ပန်းနာဖြစ်စေသော ဆေးဝါးသောက်သုံးမှုများ
`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="ပန်းနာရင်ကျပ်ရောဂါ၏ လက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	အသက်ရှုစဉ် ရွှီရွှီမြည်ခြင်း
•	ချောင်းခြောက်ဆိုးပြီး အသက်ရှုမဝခြင်း
•	မောပန်းလွယ်ခြင်း
•	စူးရှသော အနံ့ရလျှင်၊ စိတ်လှုပ်ရှားလျှင်၊ အားခွန်စိုက်၍ အလုပ်လုပ်လျှင်မောကျပ် ချောင်းဆိုးလာခြင်း
•	ဖြစ်နေကျအချိန်တွင် ပုံမှန်ဖြစ်ခြင်း၊ (ဉပမာ-နွေး၊ မိုး၊ ဆောင်း စသည်ဖြင့်)
•	ညအိပ်ပျော်နေစဉ် ချောင်းဆိုးခြင်း၊ ကျပ်ခြင်း
•	အကိုက်အခဲပျောက်ဆေး၊ သွေးတိုးကျဆေး အချို့သုံးစွဲလျှင် ရင်ကျပ်လာခြင်း`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ကာကွယ်ကုသရေး နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	ဆေးလိပ်သောက်တတ်လျှင် ဆေးလိပ်ဖြတ်ပါ။
•	ဓာတ်မတည့်သော အရာများ ရှောင်ရှားပါ။ (အိမ်မွေးတိရစ္ဆာန်များ၊ ဖုန်မှုန့်၊ အငွေ့၊ အနံ့ အသက်၊ ဆေးဝါး၊ အစားအစာ စသည်ဖြင့်)
•	တတ်ကျွမ်းနားလည်သူများနှင့် ပြသကာ ကုသမှုခံယူပါ။
•	ကျန်းမာရေးနှင့် ညီညွတ်အောင် နေထိုင်ပါ။
•	အခြားရောဂါများ (ဉပမာ-ဆီးချို၊ သွေးတိုး၊ အဝလွန်ရောဂါများ) ရှိနေပါက ပုံမှန် စစ်ဆေး ကုသမှုခံယူပါ။
•	ညွှန်ကြားသည့်အတိုင်း ဆေးဝါးမှန်ကန်စွာ သုံးစွဲပြီး အခြားရှောင်ရန်၊ ဆောင်ရန် အချက်များကို လိုက်နာပါ။
•	ပန်းနာရင်ကျပ်ရောဂါသည် နာတာရှည်ရောဂါဖြစ်၍ ကုသမှုခံယူရာတွင် စိတ်ရှည် သည်းခံရန်လိုပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

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
    backgroundColor:'#dfe5c1',
    textDecorationLine: 'underline',
  }
    
    })
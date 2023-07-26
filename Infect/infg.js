import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'

export default function infg({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၇.၇	ဂျပန်ဦးနှောက်ရောင်ရောဂါ
         </Text>
         <Text style={styles.p}>
         {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}ဂျပန်ဦးနှောက်ရောင်ရောဂါသည် ဖလာဗီဗိုင်းရပ်စ်ပိုးကြောင့် ဖြစ်ပွားသောရောဂါဖြစ်ပါသည်။ ဉီးနှောက်တစ်ရှူးများ ရောင်ရမ်းပျက်စီးခြင်းကို ဖြစ်စေပြီး ပြင်းထန်သော နောက်ဆက်တွဲဆိုးကျိုးများ ဖြစ်ပေါ်စေနိုင်ပြီး အသက်ဆုံးရှုံးသည်အထိ ဖြစ်စေနိုင်ပါသည်။
         </Text>
         <List.Section title="" style={styles.headtitle}>
         <List.Accordion
        title="ဂျပန်ဦးနှောက်ရောင်ရောဂါ ဗိုင်းရပ်စ်ရောဂါပိုးကူးစက်ပြန့်ပွားပုံ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	ဝက်နှင့် ရေတွင်ကျက်စားသည့် တောငှက်ရိုင်းများတွင် ဂျပန်ဦးနှောက်ရောင် ဗိုင်းရပ်စ်ပိုးများ ခိုအောင်းပေါက်ပွားပါသည်။
•	ဂျပန်ဦးနှောက်ရောင်ဗိုင်းရပ်စ်ပိုးပါသည့် ကျူးလက်(စ်)ခြင်ကိုက်ခံရခြင်းမှတဆင့် လူများအား ရောဂါကူးစက်ပြန့်ပွားနိုင်ပါသည်။
•	လူတစ်ယောက်မှ တစ်ယောက်သို့ မကူးစက်နိုင်ပါ။`}
titleNumberOfLines={200}/>
        </List.Accordion>
        <List.Accordion
        title="ဂျပန်ဦးနှောက်ရောင် ရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`ရောဂါကူးစက်ခံရသူအများစုသည် ရောဂါလက္ခဏာများ မပြကြပါ။ ပျှမ်းမျှအားဖြင့် ရောဂါပိုးကူးစက်ခံရသူ (၂၅၀) တွင် (၁) ဉီးသာ ရောဂါလက္ခဏာများရှိကြပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ကနဦးက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`- ရုတ်တရက်အဖျားကြီးခြင်း\n-ခေါင်းကိုက်ခြင်း	\n-မောပန်းပြီးနိုးခြင်း\n- ပျို့ခြင်း\n- အန်ခြင်း
	ရောဂါဖြစ်ပွားစတွင် ကလေးများသည် ဗိုက်နာခြင်းလက္ခဏာများကို ထင်ရှားစွာ ခံစားကြရပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="နောက်ဆက်တွဲလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`- လည်ပင်တောင့်တင်းခြင်း	\n- စိတ်ရှုပ်ထွေးခြင်း	\n- သတိလစ်ခြင်း\n- မူးဝေအိပ်ငိုက်ခြင်း		\n- လှုပ်ရှားမူမမှန်ခြင်းနှင့်
- တက်ခြင်း \nစသည်တို့ ဖြစ်နိုင်ပြီး အသက်ဆုံးရှုံးသည်အထိ ဖြစ်နိုင်ပါသည်။
  အသက် (၁၀) နှစ်အောက်ကလေးငယ်များတွင် ပြင်ထန်သော ရောဂါဖြစ်ပွားမှုများပြားပြီး သေဆုံးမှုနှုန်းများပါသည်။
  ဉီးနှောက်ရောင်ရောဂါဖြစ်ပွားသူ (၂၀) မှ (၃၀) ရာခိုင်နှုန်းထိ အသက်သေဆုံးနိုင်ပါသည်။ အသက်ရှင်ကျန်ရစ်သူများမှ ထက်ဝက်နီးပါးခန့်တွင် အကြောသေခြင်းနှင့် ဉီးနှောက်ပျက်စီးခြင်းများ ဖြစ်စေနိုင်ပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ရောဂါကူးစက်ပုံ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	ဂျပန်ဉီးနှောက်ရောင်ရောဂါပိုးသည် ငှက်များနှင့် အိမ်မွေးတိရစ္ဆာန်များ၊ အထူးသဖြင့် ရေတွင် နားခိုကျက်စားသည့် တောငှက်ရိုင်းများနှင့် ဝက်များကို ရောဂါပိုးကူးစက်ဝင်ရောက်သည်။ ဝက်များသည် ရောဂါပိုးလက်ခံသိုလှောင်ရာ တိရစ္ဆာန်ဖြစ်သည်။
•	ရောဂါပိုးသယ်ဆောင်သော ခြင်များမှတဆင့် ကူးစက်ပျံ့နှံ့သည်။
•	ဆည်မြောင်းရေသွင်း စိုက်ပျိုးသောနေရာများတွင် ခြင်ပေါက်ပွားသောကြောင့် တစ်နှစ်ပတ်လုံး ကူးစက်ဖြစ်ပွားနိုင်သည်။ သို့သော် မိုးရာသီကာလတွင် အများဆုံး ဖြစ်ပွားတတ်သည်။
•	ကျေးလက်နေလူထုများ အထူးသဖြင့် ဆန်စပါးစိုက်ပျိုးသူများတွင် ဖြစ်ပွားမှုများပြားသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

      <List.Accordion
        title="ကာကွယ်နိုင်မည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ကာကွယ်ဆေးထိုးခြင်းသည် တစ်ခုတည်းသော အရေးပါဆုံး ကာကွယ်ထိန်းချုပ်ရေးနည်းလမ်း ဖြစ်ပါသည်။
ဂျပန်ဉီးနှောက်ရောင် ရောဂါပိုးသယ်ဆောင်သောခြင်များသည် ညနေစောင်း နေဝင်ရီတရောတွင် ကိုက်လေ့ရှိသောကြောင့် ကလေးများကို ခြင်ထောင်ဖြင့် အိပ်စေခြင်းဖြင့် ရောဂါဖြစ်ပွားမှုကို ကာကွယ်နိုင်ပါသည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title=" ကာကွယ်ဆေးထိုးသင့်သူများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	ရောဂါကူးစက်ဖြစ်ပွားလွယ်သည့် နေရာများသို့ ခရီးသွားမည့်သူများသည် ခရီးမထွက်မီ (၁) လအလို ကြိုတင်ကာကွယ်ဆေး ထိုးနှံသင့်ပါသည်။ ကာလရှည်ခရီးထွက်သူများ၊ မကြာခဏ ခရီးသွားသူများ၊ ဂျပန်ဉီးနှောက်ရောင်ရောဂါ ကပ်အသွင်ဖြစ်ပွားနေသည့် နိုင်ငံများကို ခရီးသွားသူများနှင့် ကျေးရွာကို လည်ပတ်သူများမှာ အဓိကထိုးနှံသင့်ပါသည်။
•	အသက်(၉)လအရွက်မှစ၍ လူကြီးများ၊ လူငယ်များအားလုံး ကြိုတင်ကာကွယ်ဆေး ထိုးနှံနိုင်ပါသည်။`}
titleNumberOfLines={200}/>
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
    margin:10,
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
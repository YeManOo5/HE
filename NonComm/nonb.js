import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function nonb({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView  style={{backgroundColor:'#F8FFD7'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၈.၂	ဆီးချို၊ သွေးချိုရောဂါ
         </Text>
         <Text style={styles.p}>
         {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         ဆီးချို၊ သွေးချိုရောဂါသည် ဇီဝကမ္မဖြစ်စဉ်ချို့ယွင်း၍ ဖြစ်ပေါ်လာသည့် သွေးအတွင်း အချိုဓာတ်များနေသော ရောဂါတစ်ခုဖြစ်သည်။
         {"\n"}ဆီးချိုသွေးချိုရောဂါအဓိကအမျိုးအစားများ
         {"\n"}•	ဆီးချိုသွေးချိုရောဂါ အမျိုးအစား (၁)
         {"\n"}•	ဆီးချိုသွေးချိုရောဂါ အမျိုးအစား (၂)</Text>

         <List.Accordion
        title="ဆီးချိုသွေးချိုရောဂါ အမျိုးအစား (၁)" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	ပန်ကရိယဟုခေါ်သော ဂလင်းအကျိတ်မှ အင်ဆူလင်ဟော်မုန်းကို လိုအပ်သလောက် မထုတ်ပေးနိုင်ခြင်းကြောင့် ဖြစ်ပေါ်လာသော ဆီးချိုသွေးချိုရောဂါ ဖြစ်သည်။
•	ကလေးသူငယ်များနှင့် လူငယ်လူရွယ်များတွင် အဖြစ်များသည်။
•	ဆီးချိုသွေးချိုရောဂါရှင် စုစုပေါင်း၏ (၅%-၁၀%) မှာ ဆီးချိုသွေးချိုးရောဂါ အမျိုးအစား (၁) ဖြစ်ပါသည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="ဆီးချိုသွေးချိုရောဂါ အမျိုးအစား (၂)" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	ပန်ကရိယဟုခေါ်သော ဂလင်းအကျိတ်မှ ထွက်လာသော အင်ဆူလင်ဟော်မုန်းကို ခန္ဓာကိုယ်မှ အပြည့်အဝ အသုံးမပြုနိုင်ခြင်းကြောင့် ဖြစ်ပေါ်လာသော ဆီးချိုသွေးချိုရောဂါ ဖြစ်သည်။
•	အသက်အရွယ်ကြီးသူများတွင် အဖြစ်များသည်။
•	ဆီးချိုသွေးချိုရောဂါရှင် စုစုပေါင်း၏ (၉၅%) မှာ ဆီးချိုသွေးချိုရောဂါ အမျိုးအစား (၂) ဖြစ်ပါသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>
      <Text style={styles.subtitle}></Text>
      <List.Accordion
        title="ဆီးချိုသွေးချိုရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`၁။	ဆီးခဏခဏသွားခြင်း
၂။	ရေအလွန်ငတ်ခြင်း
၃။	ဆာလောင်မွတ်သိပ်နေခြင်း
၄။	ပိန်သွားခြင်း
၅။	နုံးချိနေခြင်း
၆။	ပတ်ဝန်းကျင်အား စိတ်ဝင်စားမှုမရှိခြင်း
၇။	စိတ်အာရုံစူးစိုက်မှုမရှိခြင်း
၈။	အန်ခြင်း
၉။	ဗိုက်နာခြင်း
၁၀။	ခြေလက်များထုံခြင်း/ကျဉ်ခြင်း
၁၁။	အမြင်အာရုံဝေဝါးခြင်း
၁၂။	အနာများမကြာခဏပေါက်ခြင်း
၁၃။	အနာကျက်ရန် ခက်ခဲခြင်း
၁၄။	ညတွင် ဆီးခဏခဏသွားခြင်း
၁၅။	မိန်းမကိုယ်ယားယံခြင်း`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ဆီးချိုသွေးချိုဖြစ်နိုင်ချေရှိသူများ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`၁။	မိသားစုဝင်ထဲ၌ ဆီးချိုသွေးချိုရောဂါရှိခြင်း
၂။	ကိုယ်အလေးချိန်များလွန်းခြင်း၊ အထူးသဖြင့် ဝမ်းတွင်းအဆီများလွန်းခြင်း
၃။	အသက် (၄၅) နှစ်အထက်ဖြစ်ခြင်း
၄။	ကိုယ်ကာလလှုပ်ရှားမှုနည်းပါးသည့် ဘဝနေထိုင်မှုဟန်ရှိခြင်း
၅။	ယခင်က ကိုယ်ဝန်ဆောင်စဉ် ဆီးချိုရောဂါရှိခဲ့ဖူးခြင်း
၆။	ယခင်က ဆီးချိုသွေးချိုရောဂါ ကနဦးအဆင့်များရှိခဲ့ခြင်း`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ဆီးချိုသွေးချိုရောဂါ၏ နောက်ဆက်တွဲ ဆင့်ပွားရောဂါများ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	‌ကျောက်ကပ်ပျက်စီးသောရောဂါ
•	မျက်စိအမြင်လွှာထိခိုက်၍ မျက်စိကွယ်သောရောဂါ
•	အာရုံကြောထိခိုက်သောရောဂါ
•	ဦးနှောက်သွေးကြောပိတ်၍ လေဖြတ်သောရောဂါ
•	နှလုံး၊ သွေးကြောကျဉ်းရောဂါ
•	ရောဂါပိုးဝင်လွယ်၍ အနာကျက်ရန် ခက်ခဲခြင်း
•	ခြေထောက်ပုပ်ခြင်း
•	ကိုယ်ဝန်ဆောင်ချိန်တွင် ဖြစ်ပေါ်လာသော နောက်ဆက်တွဲ ဆင့်ပွားရောဂါများကြောင့် မိခင်နှင့်ကလေး၏ ကျန်းမာရေးနှင့် အသက်အန္တရာယ်တို့ကို ထိခိုက်နိုင်ခြင်း။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ဆီးချိုသွေးချိုရောဂါရှိပါက လိုက်နာရန်အချက်များ" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	မိမိ၏ သွေးချိုဓာတ်ကို ပုံမှန်စစ်ဆေးပြီး မှတ်တမ်းပြုစုထိန်းသိမ်းထားရှိပါ။
•	မျက်စိကို အနည်းငယ်တစ်နှစ်လျှင် တစ်ကြိမ်စစ်ဆေးပါ။
•	ကျောက်ကပ်ထိခိုက်မှုကို စောစီးစွာဖော်ထုတ်နိုင်ရန် ဆီးတွင် အသားဓာတ်ပါဝင်မှုကို (၆)လ တစ်ကြိမ် စစ်ဆေးပါ။
•	ခြေထောက်နှင့် ခြေဖဝါးများကို နေ့စဉ်ကြည့်ရှုစစ်ဆေးပါ။
•	သွေးပေါင်ကို မကြာခဏပုံမှန်စစ်ဆေးပါ။
•	နှလုံးကို ပုံမှန်စစ်ဆေးပါ။
•	သွေးတွင်းအဆီဓာတ်များကို (၆)လတစ်ကြိမ် ပုံမှန်စစ်ဆေးပါ။
•	ကိုယ်ဝန်ဆောင်လိုသူအမျိုးသမီးများသည် ကျွမ်းကျင်သူဆရာဝန်များနှင့် တိုင်ပင်ပြီးမှ ကိုယ်ဝန်ယူပါ။
•	သွေးချိုဓာတ်၊ သွေးတိုးရောဂါနှင့် သွေးတွင်းအဆီဓာတ်များကို ဆရာဝန်များနှင့် ပုံမှန်ပြသ၍ ကုသမှုခံယူပါ။`}
titleNumberOfLines={200}/><Text style={styles.subtitle}>ဆီးချိုသွေးချိုရောဂါကို အမြစ်ပြတ်အောင် ကုသ၍မရပါ။ ဆရာဝန်နှင့်ပြသ၍ သွေးချိုမှန်မှန် စစ်ဆေးရန် လိုအပ်ပါသည်။ စနစ်တကျ နေထိုင်စားသောက်ပြီး ကျွမ်းကျင်သူများနှင့် ဆေးကုသမှုခံယူပါက သက်တမ်းစေ့နေထိုင်နိုင်ပါသည်။</Text>
        </List.Accordion>

        <List.Accordion
        title="ဆီးချိုသွေးချိုရောဂါရှိသူများ လိုက်နာရန်" titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`(၁)	အစားလျှော့စားပါ။ ချိုလွန်း၊ ငန်လွန်း၊ အဆီများလွန်းသော အစားအစာများကို လျှော့စားပါ။
(၂)	ရေများများသောက်ပါ။ ရေဆာလျှင် ရေကိုသာ သောက်ပါ။ (အချိုရည်များ သောက်သုံးခြင်းဖြင့် ရေငတ်ခြင်းကို မဖြေပါနှင့်။)
(၃)	အဝမလွန်အောင် ထိန်းထားပါ။
(၄)	လှုပ်ရှားမှုများသော လူနေမှုပုံစံနည်းခြင်းကို ရှောင်ပါ။
•	အထိုင်များခြင်း၊ လှုပ်ရှားမှုနည်းခြင်းကို ရှောင်ပါ။
•	တတ်နိုင်သမျှ လမ်းလျှောက်ပါ။
•	တတ်နိုင်သမျှ လှေကားဖြင့်သာ အတတ်အဆင်းလုပ်ပါ။
•	အိမ်အလုပ်ကို တက်ကြွစွာလုပ်ကိုင်ပါ။
•	ခြံထဲတွင် ပေါင်းမြက်သုတ်သင်ခြင်းဖြင့်လည်း လှုပ်ရှားမှုများ ပြုလုပ်နိုင်ပါသည်။
(၅)	နားနေချိန်မှာ ပုံမှန်လေ့ကျင့်ခန်းလုပ်ပါ။ တစ်နေ့လျှင် မိနစ် (၃၀) တစ်ပတ်လျှင် (၅) ရက် စုစုပေါင်းမိနစ် (၁၅၀) ထက်မနည်း ပုံမှန်လေ့ကျင့်ခန်းလုပ်ပါ။
(၆)	အမျှင်ဓာတ်များသော အစားအစာများများစားပါ။ ဟင်းသီးဟင်းရွက်နှင့် သစ်သီးဝလံများကို များများနှင့်စုံအောင်စားပါ။
(၇)	တိရစ္ဆာန်မှရသော အဆီများ (ဉပမာ-ကြက်အရေးပြား၊ ဘဲအရေပြား၊ ကလီစာ၊ ဝက်ဆီ၊ အမဲဆီ) စသည်တို့ကို ရှောင်ပါ။ ငါးမှရသော အဆီများ စားသုံးနိုင်ပါသည်။ (ဥပမာ-ငါးကြင်းဆီ၊ ငါးဘတ်ဆီ)
(၈)	စိတ်ဖိစီးမှုများကို လျော့ချနိုင်သမျှလျော့အောင် ကြိုးစားနေထိုင်ပါ။
•	အိပ်ချိန်၊ နားချိန်လုံလောက်အောင် ယူပါ။
•	အာဟာရ ပြည့်ဝအောင် စားပါ။
•	ပြဿနာများကို တစ်ယောက်တည်း မဖြေရှင်းနိုင်လျှင် တတ်သိနားလည်သူ များထံမှ အကြံဉာဏ်ယူ၍ ဖြေရှင်းပါ။
•	အရာရာကို အပြုသဘောနှင့် အကောင်းမြင်နိုင်အောင် ကြိုးစားပါ။
•	ယောဂကျင့်ပါ။ တရားထိုင်ပါ။`}
titleNumberOfLines={200}/><Text style={styles.subtitle}>ဆီးချိုသွေးချိုရောဂါရှိသူတိုင်း ကိုယ်လက်လှုပ်ရှားမှုကို ကုထုံးတစ်ခုအနေဖြင့် ပုံမှန် ဆောင်ရွက်သင့်ပါသည်။</Text>
        </List.Accordion>

        <List.Accordion
        title="ကိုယ်လက်လှုပ်ရှားပုံမှန် လေ့ကျင့်ခန်းလုပ်ခြင်း၏ အကျိုးကျေးဇူးများ " titleNumberOfLines={20} style={{backgroundColor:"#dfe5c1"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	သွေးချိုထိန်းသိမ်းမှု ပိုကောင်းစေပါသည်။
•	ဆီးချိုကြောင့် နှလုံးသွေးကြောရောဂါ ပိုမိုဖြစ်ပွားစေခြင်းကိုလည်း လျော့ကျစေပါသည်။
•	ခန္ဓာကိုယ်အလေးချိန်ကို လျော့ကျစေပါသည်။
•	ခန္ဓာကိုယ်ပေါ့ပါးလန်းဆန်းကာ နေထိုင်လှုပ်ရှားမှု ပိုကောင်းစေပါသည်။`}
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
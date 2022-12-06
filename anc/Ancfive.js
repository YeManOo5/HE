import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper'


export default function AncFive({navigation}) {
    const onPresshundler = () => {
    navigation.goBack()
    }
     return(
      <ScrollView contentContainerStyle={{margin:"2%"}} style={{backgroundColor:'#FFC1E3'}}>
      <View style={styles.body} >
      <List.Section title="မိခင်မှ ကလေးသို့ ရောဂါကူးစက်ခြင်းမှ ကာကွယ်ခြင်း (PMTCT)" style={styles.headtitle}>
      <List.Accordion
        title="အိတ်ချ်အိုင်ဗွီရောဂါအကြောင်း နှစ်သိမ့်ဆွေးနွေးအကြံပေးခြင်းနှင့် မစစ်ဆေးခင်အချက်အလက်များအား ကြိုတင်စစ်ဆေးခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#e5adcc"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`  ဝန်ဆောင်မှုခံယူသူ သို့မဟုတ် ဝန်ဆောင်မှုခံယူသူအုပ်စုများအား အိတ်ချ်အိုင်ဗွီ စစ်ဆေးရန် ကမ်းလှမ်းခြင်း သို့မဟုတ် အကြံပြုခြင်း၏ ရည်ရွယ်ချက်မှာ အောက်ပါအချက်များကို ရှင်းလင်းသေချာစွာ သိရှိစေရန်ဖြစ်သည်။
•	HIV စစ်ဆေးခြင်း၏ အကျိုးကျေးဇူးများ 
•	ပထမဆုံးသော တုံ့ပြန်မှု အမြန်စစ်ဆေးခြင်းနှင့် အတည်ပြု စစ်ဆေးနိုင်ရန်အတွက် စိစစ်/ စမ်းသပ်ခြင်း အကောင်အထည်ဖော်သော နေရာကို ချက်ချင်းလွှဲပြောင်းခြင်း၏ အရေးကြီးပုံကို နားလည်ခြင်း 
•	အတည်ပြုထားသော HIV-positive နှင့် HIV-negative ရောဂါကို နားလည်ခြင်း 
•	မရေရာသောရလဒ် နှင့် ၁၄ ရက်အကြာတွင်  ပြန်လည်စစ်ဆေးရန် အရေးကြီးပုံကို နားလည်ခြင်း 
•	HIV-positive လူနာများအတွက် အေအာတီ(ART) ဆေးပေးသော နေရာအပါအဝင် ရရှိနိုင်သော ဝန်ဆောင်မှုများကို သိရှိနားလည်ခြင်း 
•	မွေးကင်းစကလေးအား HIV ရောဂါ ကူးစက်နိုင်သည့် အလားအလာကို သိရှိနားလည်ခြင်း 
•	မိခင်မှ ကလေးသို့ HIV ကူးစက်မှုကို လျော့ချနိုင်ရန် ဆောင်ရွက်နိုင်သည့် အစီအမံများနှင့် ART ဆေးထောက်ပံ့မှုဖြင့် မိခင်မှ ကလေးသို့ HIV ကူးစက်မှုကို ကာကွယ်နိုင်ရန် သိရှိနားလည်ခြင်း
•	ဖြစ်နိုင်ချေရှိသော ရလဒ်ကို ထုတ်ဖော်ခြင်းနှင့် ထိုသို့ထုတ်ဖော်ခြင်း၏ အန္တရာယ်နှင့်  အကျိုးကျေးဇူးများကို ဆွေးနွေးခြင်း 
•	အထူးသဖြင့် HIV-positive ဖြစ်သူများအားလုံးကို မိမိ၏ အိမ်ထောင်ဖက် (ချစ်သူ) များကို HIV စစ်ဆေးရန် အားပေးခြင်း 

HIV ပိုးရှိနေသော ကိုယ်ဝန်ဆောင်နှင့် နို့တိုက်မိခင် အားလုံးအား ART(အေအာတီ) ဆေးပေးခြင်းအားဖြင့် 
(၁) မိခင်ကျန်းမာရေးကို တိုးတက်အောင်ပြုလုပ်ခြင်း 
(၂) မိခင်မှ ကလေးသို့ HIV ပိုးကူးစက်မှုကို ကာကွယ်ခြင်း 
(၃) မိခင်မှ မိမိ၏ လိင်ကြင်ဖော်သို့ HIV ပိုးကူးစက်မှုကို ကာကွယ်ခြင်း ဖြစ်စေသည်။
ထို့ကြောင့် မြန်မာနိုင်ငံတွင် ဤသို့ အကြံပြုထားပါသည်။ HIV ပိုးရှိနေသည့် ကိုယ်ဝန်ဆောင်များနှင့် နို့တိုက်မိခင်များအားလုံးတွင် မည်သည့် CD4 အရေအတွက်ကိုမဆို ART (အေအာတီ) ဆေးကို စတင်တိုက်ကျွေးရန်နှင့် တသက်တာလုံး တိုက်ကျွေးသွားရန်ဖြစ်သည်။`}
        titleNumberOfLines={100} />
      </List.Accordion>

      <List.Accordion
        title=" စစ်ဆေးမှုခံယူပြီးနောက် နှစ်သိမ့်ဆွေးနွေးအကြံပေးခြင်း " titleNumberOfLines={20} style={{backgroundColor:"#e5adcc" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`HIV ပိုးတွေ့သော ကိုယ်ဝန်ဆောင်အမျိုးသမီးများအတွက် နှစ်သိမ့်ဆွေးနွေးပညာပေးခြင်း`}
titleNumberOfLines={200}/>
<List.Item title={`ကိုယ်ဝန်ဆောင်နေစဉ်`}
titleNumberOfLines={200} style={styles.subp}/>
<List.Item title={`•	ART (အေအာတီ) ဆေးကို အမြန်ဆုံးစတင်ရန် (ဆေး ၃ မျိုး) 
•	ART ဆေးကို တသက်လုံးပေးခြင်းသည် ထိုအမျိုးသမီး၏ ကျန်းမာရေးနှင့် သူမ၏ ကလေးအနာဂါတ်အတွက် အကောင်းဆုံးဖြစ်သည်။ 
•	ART ဆေးကို သေချာစွာလိုက်နာစွဲမြဲစွာ စွဲသောက်ရန်အရေးကြီးပုံ (ဖြစ်ပေါ်လာသော ရောဂါများကို ကြိုတင်ကာကွယ်ခြင်းနှင့် ကုသခြင်းကို လိုက်နာရန်) 
•	ANC (ကလေးမမွေးခင် ကိုယ်ဝန်စောင့်ရှောက်မှု) ပုံမှန် ပြသရန် 
•	မိမိ၏ အိမ်ထောင်သည်/ကြင်ယာဖက်၏ ရောဂါစစ်ဆေးမှု လိုအပ်ခြင်း၏ အရေးကြီးပုံ (မစစ်ဆေးရသေးပါက) 
•	ထိုမိခင်၏ ကလေးများကို HIV စစ်ဆေးပေးရန် `}
titleNumberOfLines={200} />
<List.Item title={`မွေးဖွားစဥ်`}
titleNumberOfLines={200} style={styles.subp}/>
<List.Item title={`•	ဆေးရုံဆေးခန်းတွင် သို့မဟုတ် ကျွမ်းကျင်သော ဝန်ဆောင်မှုပေးသူများနှင့်သာ မွေးဖွားရန် 
•	ပိုမိုလုံခြုံစိတ်ချရသောနည်းလမ်းများဖြင့် မွေးဖွားရန်လိုအပ်ပြီး ကလေးကို သွေးများ၊ ခန္ဓာကိုယ်အရည်များဖြင့် ထိတွေ့မှုကို လျှော့ချရန် လိုအပ်ပါသည်။`}
titleNumberOfLines={200} />
<List.Item title={`မွေးဖွားပြီးနောက်`}
titleNumberOfLines={200} style={styles.subp}/>
<List.Item title={`	မိခင်နှင့် ကလေးအတွက် ART ဆေးပေးရန် 
•	မိခင်အား ART ဆေးကို တသက်လုံး သောက်ရန် 
•	မွေးကင်းစကလေးကို မွေးပြီးပြီးချင်း ARV ကာကွယ်ကုသခြင်းကို ၆ ပတ် အထိ ပေးရန် သို့မဟုတ် ကလေးအထူးကုများ၏ ညွှန်ကြားချက်အတိုင်းပေးပါ။`}
titleNumberOfLines={200} />
<List.Item title={`မွေးကင်းစကလေးငယ် ရောဂါစစ်ဆေးခြင်း (EID)`}
titleNumberOfLines={200} style={styles.subp}/>
<List.Item title={`•	HIV ထိတွေ့မှုရှိသော မွေးကင်းစကလေးများအားလုံးကို မွေးကင်းစ အသက် ၆ ပတ်တွင် သို့မဟုတ် ၆ ပတ်အပြီး စောနိုင်သမျှစောစော HIV ပိုးစစ်ဆေးခြင်းကို ပြုလုပ်ရမည်ဖြစ်သည်။ 
•	HIV ပိုးစစ်ဆေးခြင်း၏ အဖြေမှာ ပိုးမတွေ့ဟု ဖြစ်ပါက သွေးထဲ၌ HIV ပိုး ပဋိပစ္စည်း စစ်ဆေးခြင်းကို အသက် ၉ လတွင် တစ်ကြိမ် စစ်ဆေးရမည်။ ထို့နောက် ၁၈ လ (၁နှစ်ခွဲ) တွင် တစ်ကြိမ် (သို့မဟုတ်) မိခင်နို့ဖြတ်ပြီး ၃ လအကြာတွင် တစ်ကြိမ် ထပ်မံစစ်ဆေးရမည် ဖြစ်သည်။`}
titleNumberOfLines={200} />
<List.Item title={`မွေးကင်းစကလေး အစာကျွေးမွေးခြင်း`}
titleNumberOfLines={200} style={styles.subp}/>
<List.Item title={`• မိခင်အား မွေးကင်းစကလေး အစာကျွေးမွေးခြင်း နည်းလမ်းများကို ပညာပေးရမည်ဖြစ်ပြီး မိခင်နို့တစ်မျိုးတည်း တိုက်ကျွေးခြင်း သို့မဟုတ် နို့မှုန့်ဖြင့် နို့ဗူးတိုက်ကျွေးခြင်းများ၏ အန္တရာယ်များ အကျိုးရှိပုံများကို ရှင်းပြပေးရမည်ဖြစ်သည်။ 
•	မိခင်နို့တိုက်ကျွေးမည်ဟု ရွေးချယ်ပါက မိခင်နို့တစ်မျိုးတည်းသာ ကလေးအသက် ၆ လအထိ တိုက်ကျွေးရမည်ဖြစ်ကြောင်း၊ ၆ လ ကျော်လျှင် ဖြည့်စွက်စာ ဖြည့်ကျွေးရမည်ဖြစ်ပြီး ကလေး အသက် ၂ နှစ်အထိ မိခင်နို့တိုက်ကျွေးနိုင်ကြောင်းနှင့် ပြီးလျှင် တစ်လအတွင်း တဖြည်းဖြည်းချင်း နို့ဖြတ်ရမည်ဖြစ်သည်`}
titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="မွေးကင်းစကလေး အစာကျွေးမွေးခြင်း၏ အန္တရာယ်များနှင့် အကျိုးကျေးဇူးများ" titleNumberOfLines={20} style={{backgroundColor:"#e5adcc"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`မိခင်နို့ တစ်မျိုးတည်းသာ တိုက်ကျွေးခြင်း`}
titleNumberOfLines={200} style={styles.subp}/>
<List.Item title={`•	မိခင်မှ ကလေးသို့ HIV ပိုး ကူးစက်နိုင်ချေ ပိုမိုမြင့်တက်နိုင်ပါသည်။ ဒါပေမယ့် မိခင်သည် ART ဆေးသောက်သုံးနေပါက HIV ပိုးကူးစက်နိုင်ချေကို လျော့ချနိုင်ပါသည်။ 
•	မိခင်နို့ရည်တွင် ကလေးများကို ဝမ်းပျက်ဝမ်းလျှောရောဂါ၊ အဆုပ်ရောင်ရောဂါနှင့် အခြားသော ရောဂါများမှ ကာကွယ်ပေးနိုင်သော ပဋိပစ္စည်းများစွာ ပါဝင်ပါသည် ။ 
•	မိခင်နို့ရည်သည် အလွန်အာဟာရပြည့်ဝသောကြောင့် ကလေးအား အာဟာရချို့တဲ့မှု အန္တရာယ်ကို လျှော့ချပေးနိုင်သည်။ 
•	မိခင်နို့တိုက်ကျွေးခြင်းမှာ ငွေကုန်ကြေးကျ အလွန်နည်း၍ မပင်ပန်းပါ။ 
•	မိခင်နို့တိုက်ကျွေးခြင်းသည် အမေနှင့် ကလေး ကြားမှ သံယောဇဥ်နှောင်ကြိုးကို ပိုမိုခိုင်မာစေပါသည်။`}
titleNumberOfLines={200} />
<List.Item title={`နို့မှုန့်ဖြင့် နို့ဗူးတိုက်ကျွေးခြင်း`}
titleNumberOfLines={200} style={styles.subp}/>
<List.Item title={`•	မိခင်မှ ကလေးအား HIV ပိုး ကူးစက်ခြင်း မရှိပါ။ 
•	မိခင်နို့ထံမှ ရနိုင်သော ပဋိပစ္စည်းများ မပါဝင်သောကြောင့် ကလေးအား ဝမ်းပျက်ဝမ်းလျှောရောဂါ ၊ အဆုပ်ရောင်ရောဂါ စသည့် အခြားသောရောဂါကူးစက်ခြင်းများ ဖြစ်စေနိုင်ပါသည်။ 
•	မိခင်နို့တွင်ပါဝင်သော အာဟာရများနှင့် မိခင်နို့ဦးရည်မှ ရရှိနိုင်သော အကျိုးကျေးဇူးများ မရရှိခြင်း။
•	နို့ဗူးဖျော်ရာတွင် အသုံးပြုသောရေမှ ဘက်တီးရီးယားပိုးများ ပါဝင်နိုင်ပြီး အလွန်အန္တရာယ်ရှိပါသည်။ 
•	စျေးကြီးပြီး အကုန်အကျများသည်။ 
•	အထူးအခြေအနေများ/ စက်ကိရိယာများ လိုအပ်ခြင်း (ဥပမာ။ ။ ရေသန့်၊ ရေကို ကျိုချက်ရန်အတွက် လျှပ်စစ်မီး၊ ဂက်စ်မီးဖိုများ၊ နို့ဗူးနှင့် အခြားသော အသုံးအဆောင်များ)
•	မိခင်နို့မတိုက်ကျွေးခြင်းကြောင့် မိခင်များထံတွင် ဖြစ်ပေါ်နိုင်သော စိတ်ပိုင်းဆိုင်ရာပြဿနာများ 
•	HIV ပိုးကူးစက်ခံရခြင်းကြောင့် မိခင်မှာ ခွဲခြား ဆက်ဆံခြင်း ခံရနိုင်ပါသည်။ (MOHS, 2018)`}
titleNumberOfLines={200} />
        
      </List.Accordion>


    </List.Section>

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
    backgroundColor:'#e5adcc',
    textDecorationLine: 'underline',
  }
    
    })
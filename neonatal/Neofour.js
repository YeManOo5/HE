import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function Neofour({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D1D9FF'}}>
         <View style={styles.body} >
         <Text style={styles.subtitle}>
         (ဃ) ကလေးတွင် အဖြစ်များသောရောဂါများကို {"\n"} အိမ်တွင်ပြုစုကုသပေးခြင်း
         </Text>
         <Text style={styles.p}> {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}မွေးကင်းစကလေးတွင် အဖြစ်များသောရောဂါများကို အိမ်တွင်ပြုစုကုသပေးခြင်း </Text>
         <Text style={styles.subtitle}>
         မွေးကင်းစ ကလေး 
         </Text>
         <Text style={styles.p}>{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"} ကလေးငယ်ကို မကိုင်တွယ်မီ လက်ကို သန့်ရှင်းသောရေ၊ ဆပ်ပြာတို့ဖြင့် စင်ကြယ်အောင်
ဆေးကြောပါ။ နေမကောင်းဖြစ်၍ ကျန်းမာရေး စောင့်ရှောက်မှု ပေးသူနှင့် မပြသသေးမီ အိမ်တွင်
အောက်ပါအတိုင်း ပြုစုစောင့်ရှောက်မှု ပေးနိုင်ပါသည်။ </Text>
<List.Section title="ရောဂါဖြစ်လျှင် လုပ်ဆောင်ပေးရန်" style={styles.headtitle}>     
<List.Accordion
        title="မျက်ဝတ် ထွက်ခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ကလေးငယ်များသည် ပုံမှန်အားဖြင့် မျက်ဝတ် ထွက်နိုင်ပါသည်။သန့်ရှင်း ခြောက်သွေ့သော သီးသန့် အဝတ် (သို့) ပုဝါဖြင့် မျက်လုံးကို သန့်စင်ပေးပါ။ (ရေကျက်အေးကို အသုံးပြုနိုင်ပါသည်။)`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="မျက်စိရောင်ရမ်း၍ ပြည်ထွက်ခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`မျက်လုံးထဲမှ ပြည်များကို အဝတ်စိုကိုသုံး၍ အသာအယာ ဖယ်ရှားပေးပါ။ ဆေးရုံ၊ ဆေးခန်းသို့ အမြန်ဆုံး ပြသပါ။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ချက်စိုခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`ချက်သည် ပုံမှန်အားဖြင့် တပတ်အတွင်း ခြောက်ပြီး ကြွေသွားပါမည်။ ချက်တိုင်ကို မည်သည့်အရာ၊ မည်သည့်ဆေးမှ ထည့်ရန်မလိုပါ။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ချက်မှ ပြည်ထွက်ခြင်း ချက်ပတ်လည်နီခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`သန့်ရှင်းသော (သို့) ပေါင်းထားသော ဆေးဂွမ်းကို အရက်ပျံဆွတ်ပြီး ပြည်များကို ဖယ်ရှားပြီး သန့်စင်ပေးပါ။ ခြောက်အောင်ထားပါ။ ဆေးရုံ၊ ဆေးခန်း၊ ကျန်းမာရေး ဌာနသို့ အမြန်ဆုံး ပြသပါ။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="အရေပြား ပြည်တည်နာပေါက်ခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`သန့်ရှင်းသော (သို့) ပေါင်းထားသော ဆေးဂွမ်းကို အရက်ပျံဆွတ်ပြီး ပြည်ဖုများပေါ် ညင်သာစွာ ဖိပြီး ဖယ်ရှားပေးပါ။ နီးစပ်ရာဆေးရုံ၊ ဆေးခန်း၊ ကျန်းမာရေး ဌာနသို့ အမြန်ဆုံး ပြသပါ။`}
titleNumberOfLines={200}/>
      </List.Accordion>

  <List.Accordion
        title="အသားဝါခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`မိခင်နို့ပါ တိုက်ပေးပါ။ နို့စို့ ခက်ခဲလျှင် နို့ညှစ်ပြီး ခွက်ဖြင့် တိုက်ပါ။ကလေးသည် နို့စို့ နည်းခြင်း၊ မှိန်းခြင်း ရှိပါက နီးစပ်ရာ ဆေးရုံ၊ဆေးခန်း၊ ကျန်းမာရေး ဌာနသို့ အမြန်ဆုံး ပြသပါ။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ဖျားခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`မိခင်နို့တိုက်ပေးပါ။ ကိုယ်ပူကြီးလျှင် ရေပတ် တိုက်ပေးနိုင်ပါသည်။(ရေခဲရေ မသုံးရပါ။) သန့်ရှင်းခြောက်သွေ့သော အနှီးဖြင့်ချောင်ချောင် ထွေးပတ်ထားပါ။ နွေးနွေး ထွေးထွေးထားပါ။`}
titleNumberOfLines={200}/>
        </List.Accordion>
</List.Section>
<Text style={styles.subtitle}>၅ နှစ်အောက်ကလေးတွင် အဖြစ်များသောရောဂါများကို အိမ်တွင်ပြုစုကုသပေးခြင်း</Text> 
         
<List.Accordion
        title="၅ နှစ်အောက်ကလေးများကို အိမ်တွင် ပြုစုကုသခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	ကလေးငယ်များ နေမကောင်းဖြစ်သည့်အခါ အစားမကျွေးခြင်း၊ အစားအစာ လျှော့ကျွေးခြင်းမပြုရပါ။
•	နို့စို့ကလေးများကို မိခင်နို့ ဆက်တိုက်ပါ။ အရည် ပိုတိုက်ပါ။
•	နလန်ထချိန် တွင်လည်း အနည်းဆုံး (၂) ပတ်ခန့် ကျွေးနေကျထက် တစ်ကြိမ်ပို ကျွေးရန်လိုပါသည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="အအေးမိချောင်းဆိုးသော ကလေးငယ်ကိုအိမ်တွင်ပြုစုခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	အထက်ဖော်ပြပါ အချက်အလက်များအတိုင်း လိုက်နာပါ။
•	နှာခေါင်းပိတ်သဖြင့် နို့စို့ရန်၊ အစာစားရန် အခက်အခဲ ရှိပါက သန့်ရှင်းသော ပိတ်စနုနုကိုကန်တော့ပုံ ကျစ်၍ နှာခေါင်းကို သန့်စင်ပေးပါ။
•	သို့သော် အရက်၊ ဆေးလိပ်နှင့် ဘိန်းမှ ထုတ်သော မူးယစ်ဆေး (သို့) ဘိန်းပါသော ချောင်းဆိုးပျောက်ဆေး များမှာမူ အန္တရာယ်ရှိသဖြင့် ရှောင်ကြဉ် သင့်ပါသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ဖျားနာသော ကလေးကို အိမ်တွင်ပြုစုခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	အမြဲ လိုက်နာရန် အချက်များအပြင် ကိုယ်အပူချိန် များပါက ရေစိုဝတ် (ရေရိုးရိုး)ဖြင့်တကိုယ်လုံးရေပတ်တိုက်ပေးပါ။
•	အဝတ်ပါးပါး ၀တ်ပေးပါ။
•	လေကောင်း လေသန့် ရသော၊ လေဝင် လေထွက် ကောင်းသော နေရာတွင် ထားပါ။ မက်ကလောင် မဖေါက်ပါနှင့်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

<List.Accordion
        title="ဝမ်းပျက်ဝမ်းလျှောဖြစ်နေသော ကလေးကို အိမ်တွင် ပြုစုခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	အမြဲလိုက်နာရန် အချက်များအပြင် ကလေးအား ခါတိုင်းထက် အရည်ပိုတိုက်ပါ။
•	ဓာတ်ဆားရည်၊ ထမင်းရည်၊ ဆန်ပြုတ်၊ စွပ်ပြုတ်၊ လတ်ဆတ်သော သစ်သီး ဖျော်ရည်၊ရေနွေးကြမ်း၊ ရေ၊ အုန်းစိမ်းရည် တိုက်ကျွေးနိုင်သည်။
•	ကလေးသောက်နိုင်သမျှ ၀မ်းရပ်သွားသည်အထိအရည်ဆက်တိုက် နေရန်လိုပါသည်။
•	(၆) လအောက် ကလေးများအား မိခင်နို့မကြာခဏ တိုက်ပါ။
•	မိခင်နို့မတိုက်သော ကလေးဖြစ်ပါက တိုက်နေကျ နို့ဆက်တိုက်ပါ။
•	ဓာတ်ဆားရည် (သို့) ရိုးရိုးရေ တိုက်ပါ။
•	(၆) လ အထက်ကလေးများအား ထမင်းပျော့ပျော့ ကျွေးပါ။ အစားအစာကို နူးနပ်စွာ ချက်ကျွေးပါ။
•	အသား၊ ငါး၊ ပဲ၊ ဥ အမျိုးမျိုးနှင့် အသီးအရွက် တို့ကို ရော၍ ကျွေးပါ။ တစ်နေ့ (၆) ကြိမ် ကျွေးပါ။
•	လတ်ဆတ်သော သစ်သီးရည် (သို့) ငှက်ပျောသီးကို ချေ၍ ကျွေးပါ။
•	၀မ်းရပ်သွားသော်လည်း ပုံမှန်ထက် တစ်နေ့ တစ်ကြိမ် ပို၍ ကျွေးပါ။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="ဓာတ်ဆားရည်ဖျော်နည်း။ တိုက်ကျွေးနည်း။" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	ဓာတ်ဆားရည် မဖျော်ခင် လက်ကို ဆပ်ပြာနှင့် စင်ကြယ်အောင် ဆေးပါ။
•	ဓာတ်ဆားထုပ်အတွင်းမှ ဓာတ်ဆားမှုန့်အားလုံးကို သန့်စင်သော ပုလင်း၊ ရေခွက် အကြီးထဲတွင် ထည့်ပါ ။ 
•	ဓာတ်ဆားထုပ် အပေါ်ပါအညွှန်းအတိုင်း ရေပမာဏ (ရေကျက်အေး၊ ရေသန့်) ကို ထည့်၍ဓာတ်ဆားမှုန့်အားလုံးကို သမစွာ ပျော်ဝင်အောင် ဖျော်ပါ။
•	ဖျော်ထားသော ဓာတ်ဆားရည်ကို (၂၄) နာရီအတွင်း သုံးပါ။ ပိုသော ဓာတ်ဆားရည်ကို လွှင့်ပစ်ပါ။
•	၂ နှစ်အောက်ကလေးကို အရည်ဝမ်းတစ်ကြိမ်သွားတိုင်း ဓာတ်ဆားရည် ၅၀ cc အသက် ၂ နှစ် မှ ၅ နှစ် ကလေးကို ဓာတ်ဆားရည် ၁၀၀ ccတိုက်ပါ။ 
•	အကယ်၍ အန်ပါက ၁၅မိနစ်ခန့်နားပြီး အထက်ဖော်ပြပါ ပမာဏ ကုန်စေရန် ခဏ ၊ ခဏ ခွဲတိုက်ပေးပါ။
•	အကယ်၍ ဓာတ်ဆားထုပ်မရှိပါက ရေကျက်အေး ၁လီတာတွင် ဆား လဘက်ရည်ဇွန်း တစ်ဝက်ခန့် နှင့် သကြား လဘက်ရည်ဇွန်း ၈ ဇွန်း ( ဇွန်းတွင်မောက်နေအောင် မထည့်ရပါ ) ထည့်ပြီး သမအောင် မွှေပြီး အထက်ဖော်ပြပါအတိုင်း တိုက်ကျွေးနိုင်ပါသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ဝမ်းပျက်ဝမ်းလျှောတွင် ဇင့်ဆာလ်ဖိတ်ဖြည့်စွက်ပေးခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	ကလေး ၀မ်းပျက်ဝမ်းလျှောသည့်အခါ ဇင့်ဆာလ်ဖိတ် ဆေးပြားကို (၁၀) ရက် (သို့) (၁၄) ရက်အထိ ဆက်လက် တိုက်ကျွေးရမည်။ (WHO, 2019)`}
titleNumberOfLines={200}/>
        </List.Accordion>

         </View>
       </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
      flex:1,
      backgroundColor:'#D1D9FF',
      marginBottom:10,
      marginBottom:20,
    },
  headtitle:{
    color:'#102027',
    fontSize:30,
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
    backgroundColor:'#bcc3e5',
    textDecorationLine: 'underline',
  }
    
    })
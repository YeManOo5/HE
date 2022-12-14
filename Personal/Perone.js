import { Pressable, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function Perone({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView  style={{backgroundColor:'#B2FEF7'}}>
         <View style={styles.body} >
         <Text style={styles.subtitle}>
         (က) စနစ်တကျ လက်ဆေးခြင်း 
         </Text>
         <Text style={styles.headtitle}>
         သန့်ရှင်းသောလက် ဆေးတစ်ခွက်
         </Text>
         <List.Section title="သန့်ရှင်းသောလက် ဆေးတစ်ခွက်" style={styles.headtitle}>
    
  <List.Accordion
        title="ဘာကြောင့်လက်ကို စင်ကြယ်အောင် ဆေးသင့်သလဲ။" titleNumberOfLines={20} style={{backgroundColor:"#a0e4de"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`လက်တွင်ကပ်ပါလာနိုင်သည့် မစင်အညစ်အကြေးအနည်းငယ် (တစ်ဂရမ်)တွင်ပင် လူတို့ကိုရောဂါဖြစ်၍ သေစေနိုင်သော-
	ဗိုင်းရပ်စ်ရောဂါပိုး	            -	၁ဝ သန်းခန့်
	ဘက်တီးရီးယားရောဂါပိုးပေါင်း	    -	၁ သန်းခန့်	
	ကပ်ပါးရောဂါပိုးပေါင်း     (ဉပမာ - သန်ကောင်၊ ဝမ်းကိုက်ပိုး)	-	၁ဝဝဝ ခန့်
	ကပ်ပါးရောဂါပိုးဉပေါင်း    (ဉပမာ - သန်ဉ)	-	၁ဝဝ ခန့် ပါဝင် နေပါသည်။
  ကလေးမစင်သည်လည်း လူကြီးမစင်နည်းတူ ရောဂါပိုးများပါဝင်နေသည်။ လက်တွင် သာမက ငွေစက္ကူ၊ တံခါးလက်ကိုင်၊ တယ်လီဖုန်းဟန်းဆက်နှင့် ပန်းကန်ခွက်ယောက်များတွင်ပင် လူ့မစင်မှ ရောဂါပိုးများစွာ ကပ်ငြိနေနိုင်ပါသည်။ ထိုပိုးများကြောင့် မိမိကိုယ်တိုင် ရောဂါကူးစက်ခံရနိုင်သကဲ့သို့ မိမိကြောင့် သူတစ်ပါးကိုလည်း ရောဂါရရှိစေနိုင်ပါသည်။ ဗိုင်းရပ်စ်၊ ဘက်တီးရီးယားစသော ရောဂါပိုးများ ထိတွေ့ထားသောလက်ဖြင့် နှာခေါင်း၊ ပါးစပ်၊ မျက်လုံးများဝန်းကျင်ကို ထိမိကိုင်မိပါက အသက်ရှုလမ်းကြောင်းဆိုင်ရာနှင့် မျက်စိနာခြင်းစသောရောဂါများ ဖြစ်ပွားစေနိုင်ပါသည်။ အထူးသဖြင့် အစားအစာ ချက်ပြုတ်ပြင်ဆင်သူ အိမ်ရှင်မအများစုနှင့် အစားအသောက်ရောင်းချသူများသည် လက်မသန့်ရှင်းမှုကြောင့် လူထောင်ပေါင်းများစွာ ရောဂါရပြီး ကပ်ရောဂါအသွင်ကူးစက်ကာ သေဆုံးနိုင်ကြောင်း သတိ ပြုသင့်ပါသည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="လက်ကို စင်အောင်ဆေးလျှင် ဘယ်လိုအကျိုးရှိမလဲ။" titleNumberOfLines={20} style={{backgroundColor:"#a0e4de" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	အစာနှင့် ရေထဲသို့ ရောဂါပိုးများဝင်ရောက်မှုမှ ကာကွယ်ပေးသည်။
•	အလွယ်ကူဆုံးနှင့် စရိတ်အသက်သာဆုံးနည်းလမ်းဖြစ်သည်။
•	ဝမ်းပျက်ဝမ်းလျှောရောဂါများနှင့် အသက်ရှုလမ်းကြောင်းဆိုင်ရာရောဂါများ ကူးစက်ဖြစ်ပွားမှုမှ လျှော့ချနိုင်သည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="လက်ဆေးနည်း" titleNumberOfLines={20} style={{backgroundColor:"#a0e4de"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	လက်ကို ဆပ်ပြာနှင့် ရေသုံးစွဲ၍ သေချာစွာပွတ်တိုက်ဆေးပါ။
•	လက်ဖဝါး၊ လက်ဖမိုး၊ လက်သည်းကြား၊ လက်မ၊ လက်ကောက်ဝတ်တို့ကို ဆပ်ပြာဖြင့် သေချာစွာပွတ်တိုက်ဆေးပါ။
•	သုံးရေသန့်ဖြင့် လက်ကိုလောင်း၍ ဆေးပါ။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="မှတ်သားရန်မှာ" titleNumberOfLines={20} style={{backgroundColor:"#a0e4de"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	လက်ကို ရေဇလုံထဲမှာ နှစ်၍ မဆေးပါနှင့်။
•	တစ်ယောက်လက်ဆေးထားပြီးသော ရေဖြင့် နောက်တစ်ယောက် ထပ်မဆေးပါနှင့်။
လက်ကို စင်အောင်ဆေးခြင်းဆိုသည်မှာ လက်ကို ဆပ်ပြာ (သို့မဟုတ်) ဆပ်ပြာအစားထိုးပစ္စည်း နှင့် သုံးရေသန့်ဖြင့် ပွတ်တိုက်၍ စင်ကြယ်အောင် ဆေးခြင်းကို ဆိုလိုပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="လက်ဆေးသင့်သည့်အချိန် " titleNumberOfLines={20} style={{backgroundColor:"#a0e4de"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	အစာမစားခင်နှင့် စားပြီးချိန်တွင် လက်ကို ဆပ်ပြာဖြင့် စင်အောင်ဆေးပါ။
•	အစားအစာမကိုင်တွယ်မီနှင့် မချက်ပြုတ်မီ လက်ကို ဆပ်ပြာဖြင့် စင်အောင်ဆေးပါ။
•	အိမ်သာအထွက် လက်ကို ဆပ်ပြာဖြင့် စင်အောင်ဆေးပါ။
•	ကလေးအညစ်အကြေး၊ အခြားသောအညစ်အကြေးနှင့် အမှိုက်သရိုက်များ ကိုင်တွယ်ပြီး လက်ကိုဆပ်ပြာဖြင့် စင်အောင်ဆေးပါ။`}
titleNumberOfLines={200}/>
        </List.Accordion>
        <Text style={styles.subtitle}>အိမ်သာထဲနှင့် ရှေ့ဘက်အနီးအနားတွင် လက်ဆေးဖို့ ဆပ်ပြာနှင့်ရေအမြဲရှိရန်လို၏။
လက်ကိုဆပ်ပြာဖြင့် စင်ကြယ်အောင် ဆေးကြောပါ။
သန့်ရှင်းသောလက် ဆေးတစ်ခွက်
ကိုယ်တိုင်လက်ကို ဆပ်ပြာနှင့်ဆေးဖို့ သတိအမြဲရှိပါ။
သူတစ်ပါးအားလက်ကိုစင်အောင်ဆေးရန် သတိပေးခြင်းဖြင့် ကုသိုလ်ယူပါ။
လက်ကို ဆပ်ပြာဖြင့် စင်ကြယ်အောင် ဆေးကြောရန် အမြဲသတိရှိပါ။</Text>

        <List.Accordion
        title="စနစ်မှန်သွားတိုက်နည်း" titleNumberOfLines={20} style={{backgroundColor:"#a0e4de"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`၁။ သွားပွတ်တံသုံး၍ ဖလိုရိုဒ်သွားတိုက်ဆေးနှင့် တစ်နေ့နှစ်ကြိမ် (နံနက်စာ စားပြီးချိန်နှင့် ညအိပ်ယာ မဝင်မီ) သွားတိုက်ခြင်းဖြင့် သွားပိုးစားရောဂါနှင့် သွားဖုံးရောဂါများကို ထိရောက်စွာ ကာကွယ်နိုင်သည်။
၂။ သွားတိုက်ရာတွင် သွားပွတ်တံအမျှင်များကို သွားဖုံးစပ်မှနေ၍ သွားဖက်သို့ဆွဲတိုက်၍ အပေါ်သွား၊ အောက်သွား၊ ရှေ့သွား၊ နောက်သွား အတွင်းအပြင်သွားမျက်နှာပြင်နှင့် သွားကြိုသွားကြားမကျန် သွားတိုက်ဆေးနှင့် ထိစပ်ရန် အရေးကြီးသည်။
၃။ သွားတိုက်လေ့မရှိသေးသူများ သွားစတိုက်သည့်အခါ သွေးထွက်လေ့ရှိသည်။ တစ်နေ့နှစ်ကြိမ် ဆက်၍သွားတိုက်ခြင်းဖြင့် တစ်ပတ်အတွင်း သွားဖုံးမှသွေးထွက်ခြင်း ပျောက်ကင်းနိုင်သည်။
၄။ ဖလိုရိုဒ်သွားတိုက်ဆေး အာနိသင်လျော့မသွားစေရန် သွားတိုက်အပြီး ရေနှင့်ပလုပ်ကျင်းရန်မလိုဘဲ ပိုနေသော
သွားတိုက်ဆေးအမြုပ်များကို ထွေးပစ်ရန်သာဖြစ်သည်။
၅။ အသက်ခြောက်နှစ်အောက်ကလေးများ သွားတိုက်ရာတွင် ဖလိုရိုဒ်သွားတိုက်ဆေးကို ကုလားပဲစေ့တစ်ခြမ်းခန့်သာ ထည့်ပါ။အသက်ခြောက်နှစ်အောက်ကလေးများ သွားတိုက်ခြင်းကို မိဘ၊ အုပ်ထိန်းသူများက ပြုလုပ်ပေးပါ။ သို့မဟုတ် ကြီးကြပ်ပေးပါ။
၆။ အသက်သုံးနှစ်အောက်ကလေးများ တစ်နေ့တစ်ကြိမ် သွားတိုက်စေ၍ အသက်သုံးနှစ်ကျော်လျင် တစ်နေ့နှစ်ကြိမ်
သွားတိုက်ပါ။ လျှာကိုပါ တိုက်ပေးပါ။
၇။ သွားတိုက်တံကို မျှဝေမသုံးရ။`}
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
      backgroundColor:'#B2FEF7',
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
    backgroundColor:'#a0e4de',
    textDecorationLine: 'underline',
  }
    
    })
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function infn({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၇.၁၄	လက်ပ်တိုစပိုင်ရိုးစစ်ရောဂါ
         </Text>
         <Text style={styles.p}>
         {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         လက်ပ်တိုစပိုင်ရိုးစစ်ရောဂါသည် ဘက်တီးရီးယားရောဂါပိုးကြောင့် ဖြစ်ပွားစေပြီး တိရစ္ဆာန်များမှတဆင့် ကူးစက်တတ်သောရောဂါဖြစ်သည်။ ကပ်အသွင်ဖြစ်ပွားနိုင်သော ကူးစက်ရောဂါဖြစ်ပြီး လူအများအပြား အသက်ဆုံးရှုံးနိုင်ပါသည်။
         {"\n"}<Text style={styles.subp}>စောစီးထိရောက်စွာ ဆေးကုသခြင်းမရှိပါက အသက်ဆုံးရှုံးနိုင်ပါသည်။</Text>
         </Text>
         <List.Section title="" style={styles.headtitle}>
      <List.Accordion
        title="ရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	ဖျားခြင်း၊ ချမ်းခြင်း၊ ခေါင်းကိုက်ခြင်း၊ ကြွက်သားများနာကျင်ကိုက်ခဲခြင်း၊ မျက်လုံးနီ ရဲခြင်း၊ အသားဝါခြင်း၊ အရေးပြားတွင် အနီစက်၊ အနီကွက်များထွက်ခြင်း၊ ချောင်းဆိုး သွေးပါခြင်း၊ ရင်ဘတ်‌အောင့်ခြင်း၊ သတိလစ်ခြင်း၊ တက်ခြင်း စသည်တို့ ဖြစ်တတ်သည်။ 
•	လက်ပ်တိုစပိုင်ရိုးစစ်ရောဂါလက္ခဏာများသည် သွေးလွန်တုပ်ကွေးရောဂါ၊ ငှက်ဖျားရောဂါ၊ တုပ်ကွေးရောဂါ၊ အသည်းအရောင်အသားဝါရောဂါ၊ တိုက်ဗွိုက်ရောဂါတို့၏ လက္ခဏာများနှင့် ရောထွေးမှားယွင်းတတ်သည်။
•	လက်ပ်တိုစပိုင်ရိုးစစ်ရောဂါဟု အတည်ပြုနိုင်ရေးအတွက် ဓာတ်ခွဲစစ်ဆေးရန် လိုအပ်သည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="ကူးစက်နိုင်သည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	ရောဂါပိုးကူးစက်ခံထားရသည့် အိမ်မွေးတိရစ္ဆာန်များ အပါအဝင် အခြားတိရစ္ဆာန်များ (ကြက်၊ နွား၊ ဝက်၊ ခွေး၊ မြင်း၊ ကျွဲ၊ သိုး၊ ဆိတ် စသည်) ၏ ကျင်ငယ်ရည်အား ထိတွေ့ကိုင်တွယ်မိခြင်းမှတဆင့် ရောဂါကူးစက်ဖြစ်ပွားနိုင်သည်။
•	အထူးသဖြင့် လယ်ယာလုပ်ငန်း၊ တိရစ္ဆာန်မွေးမြူရေးနှင့် ရေလုပ်ငန်းလုပ်ကိုင်သူများတွင် အဖြစ်များသည်။
•	မိုးရာသီနှင့် ကောက်ရိတ်သိမ်းချိန် ကာလများတွင် ရောဂါဖြစ်ပွားမှု ပိုမိုများပြားသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ကာကွယ်နိုင်မည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	လက်ပ်တိုစပိုင်ရိုးစစ်ရောဂါ ကူးစက်ဖြစ်ပွားမှု မရှိစေရန် မိုးရာသီနှင့် ကောက်ရိတ်သိမ်းချိန် ကာလများအတွင်း ရေလျှံနေသော နေရာများရှိ ရေအိုင်များ၌ ဆော့ကစားခြင်း၊ ရေချိုးခြင်း၊ ရေကူးခြင်း၊ မသန့်ရှင်းသော ရေများအား သောက်သုံးခြင်း၊ သုံးစွဲခြင်းတို့အား ရှောင်ကြဉ်ပါ။
•	လယ်ယာလုပ်ငန်းများ၊ တိရစ္ဆာန်မွေးမြူရေးနှင့် ရေလုပ်ငန်းလုပ်ကိုင်သူများအနေဖြင့် လည်ရှည်ဖိနပ်၊ လက်အိပ် စသည့် အကာအကွယ်များ ဝတ်ဆင်ပြီးမှသာ လုပ်ငန်းခွင် ဝင်သင့်ပါသည်။
•	တစ်ကိုယ်ရေသန့်ရှင်းမှုကို အထူးဂရုပြုပါ။`}
titleNumberOfLines={200}/>
<Text style={styles.subtitle}>လက်ပ်တိုစပိုင်ရိုးစစ်ရောဂါဟု သံသယရှိပါက နီးစပ်ရာ ကျန်းမာရေးဌာနသို့ ချက်ချင်း သတင်းပို့ အချိန်မီဆေးကုသမှုခံယူပါ။ စောစီးစွာ သိရှိပြီး နီးစပ်ရာ ကျန်းမာရေးဌာနတွင် အချိန်မီဆေးကုသမှုခံယူရန် လိုအပ်ပါသည်။ ဆေးကုသမှု နောက်ကျပါက အသက်ဆုံးရှုံး နိုင်သည်။</Text>
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
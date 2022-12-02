import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function infm({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.subtitle}>
         ၇.၁၃	ကူးစက်မြန်ပြင်းထန် ဦးနှောက်အမြှေးရောင်ရောဂါ
         </Text>
         <Text style={styles.p}>{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         ဦးနှောက်အမြှေးရောင်ရောဂါ (Meningococcal Meningitis) သည် အများအားဖြင့် ဘက်တီးရီးယားပိုကြောင့် ဖြစ်ပွားပြီး ကူးစက်မြန်ရောဂါတစ်ခု ဖြစ်သည်။ ကျား/မ အသက်အရွယ်မရွေး ဖြစ်ပွားနိုင်ပြီး အသက်(၇)နှစ်မှ (၁၄)နှစ်အတွင်းရှိ ကလေးများတွင် ပိုမို ဖြစ်ပွားလေ့ရှိပါသည်။
           </Text>
         
           <List.Section title="" style={styles.headtitle}>
      <List.Accordion
        title="ရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	လတ်တလော ပြင်းထန်စွာဖျားခြင်း\n•	အန်ခြင်း၊ မှိန်းခြင်း၊ သတိလစ်ခြင်း
•	ပြင်းထန်စွာခေါင်းကိုက်ခြင်း\n•	သွေးလန့်ခြင်း၊ တက်ခြင်း\n•	ဇက်တောင့်ခြင်း\n•	အရေပြားတွင် သွေးခြေဥများ ထွက်ခြင်း\n•	ကြွက်သားများနာကျင်ခြင်း\n•	ငယ်ထိပ်မပိတ်သေးသော(၁)နှစ်အောက်ကလေး များတွင် ငယ်ထိပ်ဖောင်းခြင်း၊ တင်းခြင်း`}
        titleNumberOfLines={200} />
        <Text style={styles.subtitle}>{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
          အထက်ပါ ရောဂါလက္ခဏာဖြစ်ပွားလာပါက (၂)နာရီမှ (၄၈) နာရီအတွင်း ရောဂါပြင်း ထန်လာကာ အသက်သေဆုံးသည်အထိ ဖြစ်တတ်ပါသည်။
          {"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
ရောဂါဖြစ်ပွားပြီး အသက်ရှင်သူများတွင် ရောဂါ၏ နောက်ဆက်တွဲ ဆိုးကျိုးအဖြစ် ဦးနှောက်ချို့ယွင်း၍ အကြားအာရုံဆုံးရှုံးခြင်း၊ ပညာသင်ကြားရန် အခက်အခဲရှိခြင်း တို့ဖြစ်တတ်ပါသည်။
</Text>
      </List.Accordion>

      <List.Accordion
        title="ကူးစက်နိုင်သည့်နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	လူသည် တစ်ခုတည်းသော ရောဂါပိုး သိုလှောင်ရာဌာနဖြစ်သည်။
•	ရောဂါပိုးသည် ရောဂါပိုးရှိသူလူနာ ချောင်းဆိုးခြင်း၊ နှာချေခြင်းမှ ထွက်သော သလိပ် မှုန်များမှတဆင့် တိုက်ရိုက်ကူးစက်သည်။
•	ရောဂါဖြစ်ပွားသူ၏ ချွဲ၊ သလိပ်၊ ခန္ဓာကိုယ်မှ ထွက်သော အရည်နှင့်အသုံးအဆောင် ပစ္စည်းများကို ထိတွေ့မိခြင်းတို့ မှလည်းကူးစက်နိုင်သည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ကာကွယ်နိုင်မည့် နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	အောက်ဖော်ပြပါ အခြေအနေများကို ဆောင်ရွက်ပြီးတိုင်း လက်ကို ဆပ်ပြာဖြင့် စင်ကြယ်စွာ ဆေးကြောရမည်။
	အစာမစားမီနှင့် အစာစားပြီးချိန်
	အစားအစာမပြင်ဆင်မီနှင့် ပြင်ဆင်ပြီးချိန်
	ကြက်၊ ငှက်အသားများနှင့် ကြက်၊ ငှက် စွန့်ပစ်ပစ္စည်းများ ကိုင်တွယ်ပြီးချိန်
	လူနာအသုံးအဆောင်ပစ္စည်းများ ကိုင်တွယ်ပြီးချိန်နှင့် လူနာကို ပြုစုပြီးချိန် 
	နှပ်ညှစ်ပြီးချိန်၊ နှာချေ၊ ချောင်းဆိုးပြီးချိန်
•	နှာချေ၊ ချောင်းဆိုးသောအခါ ပါးစပ်နှင့် နှာခေါင်းစည်း အသုံးပြုခြင်း၊ တစ်ရှူး၊ လက်ကိုင်ပဝါ (သို့မဟုတ်) မိမိလက်အား တံတောင်ဆစ်ကွေး၍ နှာခေါင်းနှင့် ပါးစပ်ကို အုပ်ပေးခြင်းပြုလုပ်ပါ။
•	တံတွေး၊ သလိပ်များကို စည်းကမ်းမဲ့ထွေးခြင်းမှ ရှောင်ကြဉ်ပါ။
•	ပွဲလမ်းသဘင်၊ လူစည်ကားသောနေရာနှင့် ဖုန်ထူထပ်သော နေရာများကို တတ်နိုင် သမျှ ရှောင်ကြည့်ပါ။
•	ရောဂါဖြစ်ပွားသူများ၊ ရောဂါရှိသည်ဟု ယူဆရသူများနှင့် တွေ့ဆုံရန် လိုအပ်ပါက ရောဂါမကူးစက်စေရန် နှာခေါင်းနှင့် ပါးစပ်ဖုံးအုပ်ထားသော မျက်နှာဖုံး အကာအ ကွယ်နှင့် အခြားအကာအကွယ်ပစ္စည်းကို အသုံးပြုပါ။
•	ယုံကြည်စိတ်ချရသော ကြိုတင်ကာကွယ်ဆေး (Meningococcal Vaccine) ထိုးခြင်း ဖြင့်လည်း ကာကွယ်နိုင်ပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ကြိုတင်ကာကွယ်ဆေးတိုက်ကျွေးခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	ကြိုတင်ကာကွယ်ဆေးတိုက်ကျွေးခြင်းကို ရောဂါဖြစ်သူနှင့် အနီးကပ်အတူနေ မိသား စုဝင်များ၊ အခန်းဖော်များ၊ ရောဂါဖြစ်ပွားသူအား ထိတွေ့ကိုင်တွယ်သူများကိုသာ တိုက်ကျွေးသင့်ပါသည်။
•	အုပ်စုလိုက် ရပ်ကွက်/ ရွာလုံးကျွတ် ကာကွယ်ဆေးတိုက်ကျွေးခြင်း မပြလုပ်ပါနှင့်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="သိမှတ်ဖွယ်ရာအချက်များ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	ခြောက်သွေ့အေးမြသော၊ ပူပြင်းသော၊ ရာသီများတွင် ရောဂါပိုမိုဖြစ်ပွားသည်။
•	လေထုစိုထိုင်းမှုနည်း၍ ခြောက်သွေ့ခြင်း၊ ဖုန်ထူခြင်းနှင့် ပွဲလမ်းသဘင်များသည် ရောဂါဖြစ်ပွားစေသည့် ရောဂါကူးစက်ခံရနိုင်ခြေပိုများသည့် အခြေအနေများ ဖြစ်သည်။
•	လူစုလူဝေးနှင့် နေထိုင်မှုသည် ရောဂါပိုမိုပျံ့နှံ့လွယ်သည်။`}
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
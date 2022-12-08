import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'

export default function infp({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၇.၁၆	အနာကြီးရောဂါ
         </Text>
         <Text style={styles.p}>
         {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         အနာကြီးရောဂါသည် ဘက်တီးရီးယားရောဂါပိုးကြောင့်ဖြစ်ပြီး ကူးစက်တတ်သော နာတာရှည် ရောဂါတစ်မျိုးဖြစ်သည်။ ကုသ၍ ပျောက်ကင်းပါသည်။ ရှက်စရာ၊ ကြောက်စရာ ရောဂါမဟုတ်ပါ။ အဓိကအားဖြင့် အရေပြားနှင့် အာရုံကြောကို ထိခိုက်ပါသည်။
         </Text>
         
         <List.Accordion
        title="ရောဂါလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`အနာကြီးရောဂါသည် များသောအားဖြင့် ထုံနေသောအကွက်ဖြင့် ခန္ဓာကိုယ်မည်သည့် နေရာမဆို စတင်ပေါ်လာတတ်ပါသည်။ အချို့လူနာများသည် အဖုအသီးများ၊ အာရုံကြောကြီးခြင်းများ၊ အာရုံကြောပျက်စီးသည့် လက္ခဏာများဖြင့်လည်း စတင်ဖြစ်ပေါ်လာတတ်ပါသည်။`}
        titleNumberOfLines={200} /><Text style={styles.subtitle}>မသင်္ကာဖွယ် ရောဂါလက္ခဏာများတွေ့ရှိပါက နီးစပ်ရာကျန်းမာရေးဌာန (သို့မဟုတ်) ကျန်းမာရေးဝန်ထမ်းကို အမြန်ဆုံး ပြသဆွေးနွေးရန် အရေးကြီးပါသည်။</Text>
      </List.Accordion>

      
      <List.Accordion
        title="အနာကြီးရောဂါ၏ ကနဦးလက္ခဏာများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	အရောင်ဖျော့သော၊ နီသော၊ ကြေးနီရောင်ပေါက်နေသော အကွက်များပေါ်လာခြင်း
•	ယားယံမှုနှင့် နာကျင်မှု မရှိခြင်း
•	ထိ၊ နာ၊ ပူ၊ အေး မသိခြင်း
•	အရေးပြားတွင် မည်သည့်နေရာတွင်မဆို နေရာမရွေးဖြစ်တတ်ခြင်းတို့ ဖြစ်ပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ရောဂါကူးစက်ပုံ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	ဆေးကုသမှုမခံယူရသေးသော အနာကြီးရောဂါရှိသူနှင့် အချိန်ကာလကြာမြင့်စွာ အတူနေထိုင်ခြင်းမှ ကူးစက်နိုင်ပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ရောဂါမကူးစက်နိုင်သောနည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`•	သာမန်ထိတွေ့နေထိုင်ရုံဖြင့် မကူးစက်နိုင်ပါ။ (ဥပမာ-အတူကစားခြင်း၊ အလုပ်အတူ လုပ်ခြင်း)
•	လိင်ဆက်ဆံခြင်း၊ အပျော်အပါးလိုက်စားခြင်းဖြင့် မကူးစက်နိုင်ပါ။
•	မျိုးရိုးမလိုက်ပါ။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ရောဂါကာကွယ်ကုသနည်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	အနာကြီးရောဂါကို ကျန်းမာရေးဌာနများ၌ ပြသ၍ ဆွေးနွေးတိုင်ပင်ခြင်း၊ ကုသခြင်းများကို အခမဲ့ဆောင်ရွက်ပေးပါသည်။•	MDT ဆေးဝါးဖြင့် ကုသလျှင် (၆)လမှ (၁)နှစ်အတွင်း လုံးဝပျောက်ကင်းနိုင်ပါသည်။ ဆေးဝါးကုသမှုခံယူခြင်းဖြင့် အခြားသူများသို့ မကူးစက်တော့ပါ။
•	စောစီးစွာကုသမှုခံယူခြင်းဖြင့် ကိုယ်အင်္ဂါချို့ယွင်းမှု၊ မသန်မစွမ်းဖြစ်မှုများကို ကာကွယ်နိုင်ပါသည်။
•	အတူနေအိမ်သားများသည် ရောဂါပိုးကူးစက်နိုင်သဖြင့် ရောဂါရှိ/ မရှိကို စမ်းသပ်စစ် ဆေးသင့်ပါသည်။
အနာကြီးရောဂါသည် ‌ရှေးအကျဆုံးရောဂါများအနက် တစ်ခုအပါအဝင်ဖြစ်ပြီး ရောဂါနှင့် ပတ်သက်၍ လွဲမှားသော အယူအဆများ၊ လူ့အသိုင်းအဝိုင်းတွင် ဝင်ဆံ့ရန် ရှက်ကြောက်သိမ်ငယ်ခြင်း (social stigma) နှင့် လူမှုရေးခွဲခြားဆက်ဆံခြင်း (discrimination ) များ ယနေ့တိုင် ရှိနေဆဲဖြစ်ပါသည်။ ထို့ကြောင့် အနာကြီးရောဂါနှင့် ပတ်သက်သော မှန်ကန်သည့် ဗဟုသုတအသိပညာများအား ပြည်သူလူထုအတွင်း ပြန့်နှံ့အောင် ကျန်းမာရေးပညာပေး လုပ်ငန်းများကို ပိုမိုအရှိန်အဟုန်မြှင့် ဆောင်ရွက်သွားရမည်ဖြစ်ပါသည်။`}
titleNumberOfLines={200}/><Text style={styles.subtitle}>အနာကြီးရောဂါဖြစ်ဖူးသူများသည်လည်း အခြားသူများနည်းတူ သာမန်ဘဝဖြင့် နေထိုင်နိုင်ပါသည်။</Text>
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
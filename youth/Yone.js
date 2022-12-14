import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function YOne({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView  style={{backgroundColor:'#FFCCCB'}}>
         <View style={styles.body} >
         <ScrollView style={{backgroundColor:'#FFCCCB'}}>
         <View style={styles.body} >
         <List.Section title="အရွယ်မတိုင်မီ ကိုယ်ဝန်ဆောင်ခြင်းနှင့် နောက်ဆက်တွဲဆိုးကျိုးများ" style={styles.headtitle}>
      <List.Accordion
        title="အရွယ်မတိုင်မီ ကိုယ်ဝန်ဆောင်ခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title="        ဆယ်ကျော်သက်အရွယ်ရောက်ရှိလာသောအခါ မျိုးပွားအင်္ဂါများဖွံ့ဖြိုးလာပြီး သန္ဓေအောင်နိုင်သော အနေအထားသို့ ရောက်ရှိလာကြသည်။ ရုပ်ပိုင်းဆိုင်ရာ ဖွံ့ဖြိုးမှုများအရ ကိုယ်ဝန်ဆောင်နိုင်သည် ဆိုသော်လည်း ဆယ်ကျော်သက်လူငယ်တစ်ဦးအနေဖြင့် စိတ်ပိုင်းဆိုင်ရာ အသိဥာဏ်၊ ဗဟုသုတ၊ အတွေ့အကြုံ ရင့်ကျက်မှုများအရ ကိုယ်ဝန်အား တာဝန်ယူစောင့်ရှောက်ရန် အသင့်မဖြစ်သေးပေ။ အိမ်ထောင်မပြုမီ လိင်ဆက်ဆံခြင်းကြောင့်လည်းကောင်း၊ အရွယ်မတိုင်မီ အိမ်ထောင်ပြုခဲ့ခြင်းကြောင့်လည်းကောင်း ကိုယ်ဝန်ရရှိလာခဲ့လျှင် ကာယကံရှင်ကိုယ်တိုင် ရှုထောင့်ပေါင်းစုံမှ လူမှုဒုက္ခပေါင်းစုံ ခံစားရနိုင်သည်။ ထို့အပြင် မိဘအသိုင်းအဝိုင်းများအနေဖြင့်လည်း ပတ်ဝန်းကျင်မှ ပစ်ပယ်ကဲ့ရဲ့ခြင်းကို ခံရနိုင်သည်။ မလိုလားအပ်သော ကိုယ်ဝန်အား ဖျက်ချခဲ့လျှင်လည်း အသက်သေဆုံးသည်အထိ အဆိုးရွားဆုံး ခံစားရနိုင်သည်။ သို့ဖြစ်၍ ဆယ်ကျော်သက်လူငယ်များအနေဖြင့် ကိုယ်ဝန်ဆောင်ခြင်း၏ နောက်ဆက်တွဲဆိုးကျိုးများ မခံစားရစေရန် အထူးသတိပြုရှောင်ကြဉ်သင့်ပေသည်။"
        titleNumberOfLines={100} />
      </List.Accordion>

      <List.Accordion
        title=" အရွယ်မတိုင်မီ ကိုယ်ဝန်ဆောင်ခြင်း၏ နောက်ဆက်တွဲဆိုးကျိုးများ" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title="၁။ လူမှုရေးပြဿနာ"
titleNumberOfLines={50} style={styles.subp}/>
<List.Item title="- ပတ်ဝန်းကျင်၏ ကဲ့ရဲ့မှုကိုခံရခြင်း 
- အရှက်ရခြင်း 
- စိတ်ဓာတ်ကျလာခြင်း 
- သိမ်ငယ်လာခြင်း 
- ယုံကြည်မှုနည်းလာခြင်း 
- ပတ်ဝန်းကျင်၏ ရိုက်ခတ်မှုကြောင့် မိခင်စိတ်  ပျောက်ဆုံးလာခြင်း 
- မိမိကိုယ်မိမိ သတ်သေရန် ကြိုးစားခြင်း "
titleNumberOfLines={50} />
<List.Item title="၂။ ပညာရေးပြဿနာ "
titleNumberOfLines={50} style={styles.subp} />
<List.Item title="- ပညာသင်ကြားမှုအပေါ် စိတ်ဝင်စားမှု နည်းလာနိုင်ခြင်း 
- ထူးချွန်အောင် စွမ်းဆောင်နိုင်မှု စွမ်းအားကျဆင်းလာနိုင်ခြင်း 
- ပညာရေးဆုံးခန်းတိုင်အောင် သင်ကြားနိုင်ရန် အခွင့်အလမ်းနည်းပါးလာခြင်း  "
titleNumberOfLines={50} />
<List.Item title="၃။ စီးပွားရေးပြဿနာ"
titleNumberOfLines={50} style={styles.subp}/>
<List.Item title="- ပညာမပြည့်မီသည့်အတွက် အလုပ်ရှာဖွေရာတွင် အခက်အခဲတွေ့ရခြင်း  
- ဗဟုသုတ မပြည့်စုံသေးသည့်အတွက် အလိမ်ခံရမှုများ ကြုံတွေ့နိုင်ခြင်း  "
titleNumberOfLines={50} />
<List.Item title="၄။ အိမ်ထောင်ရေးပြဿနာ  "
titleNumberOfLines={50} style={styles.subp}/>
<List.Item title="- အိမ်ထောင်ကို ကောင်းစွာမထိန်းသိမ်းနိုင်ခြင်း 
- တည်မြဲမှု မရနိုင်ခြင်း 
- အိမ်ထောင်ရေးဖောက်ပြန်ခြင်း 
- သာယာမှု မရနိုင်ခြင်း 
- သားသမီးများအား ပြုစုပျိုးထောင်ရာတွင် အခက်အခဲရှိခြင်း"
titleNumberOfLines={50} />
<List.Item title="၅။ ကျန်းမာရေးပြဿနာ  "
titleNumberOfLines={50} style={styles.subp}/>
<List.Item title="- သားအိမ်ဖွံ့ဖြိုးမှု မပြည့်စုံသေးသည့်အတွက် သန္ဓေသားဖွံ့ဖြိုးမှုကို ထိခိုက်နိုင်ပြီး ကိုယ်ဝန်ပျက်ကျနိုင်ခြင်း 
- လ မစေ့ဘဲ ကလေးမွေးခြင်း၊ မွေးဖွားသောကလေး ပေါင်မပြည့်ခြင်း၊ ဥာဏ်ရည်မမီခြင်း
- မလိုချင်ဘဲ ရသွားသော ကိုယ်ဝန်ကို တိတ်တိတ်ပုန်း ဖျက်ချဖို့ ကြိုးစားရာမှ သားအိမ်ပျက်စီးခြင်း ၊ ရောဂါပိုးဝင်ခြင်းနှင့် အသက်သေဆုံးရခြင်း
- သားအိမ်ခေါင်းကင်ဆာ ဖြစ်နိုင်ချေရှိခြင်း "
titleNumberOfLines={50} />
      </List.Accordion>

      <List.Accordion
        title="မလိုလားအပ်သော ကိုယ်ဝန်ဆောင်ခြင်းမှ ကာကွယ်ခြင်း  " titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6"}} theme={{colors:{primary:'#8e61ff'}}} >
<List.Item title="၁။ လိင်ကိစ္စကို ရှောင်ကြဉ်ခြင်း"
titleNumberOfLines={50} style={styles.subp}/>
<List.Item title="   လိင်ကိစ္စကို လုံးဝရှောင်ကြဉ်ခြင်းသည် ကိုယ်ဝန်ဆောင်ခြင်းမှ ရာနှုန်းပြည့် ထိရောက်စွာ ကာကွယ်ပေးနိုင်သကဲ့သို့ လိင်မှတစ်ဆင့် ကူးစက်သောရောဂါများကိုပါ တပါတည်း ကာကွယ်ပေးနိုင်သည်။ လိင်ကိစ္စကို ရှောင်ကြဉ်ခြင်းသည် ကုန်ကျစားရိတ်မရှိသကဲ့သို့ အခြားမလိုလားအပ်သော ဆိုးကျိုးများလည်း မရှိပါ။ မိမိ၏ အဖော်ကိုလည်း သင့်တော်သော အချိန်အထိ စောင့်ဆိုင်းရန်နှင့် ပွင့်လင်းစွာ ဆွေးနွေးအသိပေးရန် လိုအပ်သည်။ မရှင်းလင်းသောအချက်များ၊ ကိစ္စများကိုလည်း မိဘများ၊ အခြားလူကြီးများ၊ ဖြေရှင်းပေးနိုင်သောသူများနှင့် ဆွေးနွေးတိုင်ပင်၍ အကြံဥာဏ်ရယူရန် လိုအပ်သည်။ 
"
titleNumberOfLines={50} />
<List.Item title="၂။ မူးယစ်ဆေးဝါးနှင့် အရက်ကို ရှောင်ကြဉ်ခြင်း"
titleNumberOfLines={50} style={styles.subp}/>
<List.Item title="    လေ့လာတွေ့ရှိချက်များအရ ဆယ်ကျော်သက်ကိုယ်ဝန်ဆောင် ကိစ္စများတွင် အရက်နှင့် ဆေးဝါး တစ်မျိုးမျိုး သုံးစွဲခြင်းကြောင့် ပြဿနာကို ပိုမိုကြီးထွားစေကြောင်း တွေ့ရသည်။ အရက်နှင့် မူးယစ်ဆေးဝါးများ၊ စိတ်ကိုပြောင်းလဲစေတတ်သော ဆေးဝါးများသည် လူတစ်ဦ၏ ထိန်းသိမ်းနိုင်မှုစွမ်းရည်၊ ဆုံးဖြတ်နိုင်မှု စွမ်းရည်များကို ပြောင်းလဲစေနိုင်သောကြောင့် ထိုအရာများကို ရှောင်ကြဉ်ခြင်းဖြင့် အန္တရာယ်ရှိသော အပြုအမူများ ဖြစ်ပေါ်လာခြင်းကို ကာကွယ်နိုင်သည်။"
titleNumberOfLines={50} />
<List.Item title="၃။ သားဆက်ခြားနည်းလမ်းများ အသုံးပြုခြင်း"
titleNumberOfLines={50} style={styles.subp}/>   
<List.Item title="    သားဆက်ခြားနည်းလမ်းများမှာ ကိုယ်ဝန်မရရှိစေရန် တားဆီးပေးသော နည်းလမ်းများဖြစ်သည်။ ဇနီးမောင်နှံများအနေဖြင့် သားသမီးမလိုချင်သေးသောအခါ (သို့မဟုတ်) သားသမီးယူရန် အဆင်သင့်မဖြစ်သေးသောအခါ အသုံးပြုကြသည်။ အိမ်ထောင်မရှိသေးသူများပါ အသုံးပြုနိုင်သော်လည်း လိင်ကိစ္စကို လုံးဝ ရှောင်ကြဉ်ခြင်းသည်သာ အကောင်းဆုံးဖြစ်သည်။ မရှောင်ကြဉ်နိုင်ပါက အကာအကွယ်သုံးပြီး လိင်ဆက်ဆံခြင်း (အမျိုးသား ၊ အမျိုးသမီး ကွန်ဒုံး) ကို အထူးအလေးထားကာ အသုံးပြုသင့်ပါသည်။ သို့မှသာ လိင်မှတစ်ဆင့် ကူးစက်သောရောဂါများကို ကာကွယ်နိုင်သည့်အပြင် ကိုယ်ဝန်မရအောင်ပါ တားဆီးနိုင်မည်ဖြစ်သည်။ အကယ်၍ အကာအကွယ်မဲ့ လိင်ဆက်ဆံမှုပြုခဲ့ပါက နီးစပ်ရာ ကျန်းမာရေးစောင့်ရှောက်မှုပေးသူထံ သွားရောက်၍ အကူအညီတောင်းခံသင့်ပါသည်။ (UNFPA, 2018)" 
titleNumberOfLines={50}/> 
      </List.Accordion>
    </List.Section>

         </View>
       </ScrollView>
         
         </View>
       </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
      flex:1,
      backgroundColor:'#FFCCCB',
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
    backgroundColor:'#e5b7b6',
    textDecorationLine: 'underline',
  }

    
    })
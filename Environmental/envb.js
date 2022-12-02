import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function envb({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
      <ScrollView style={{backgroundColor:'#FFFFB0'}}>
      <View style={styles.body} >
      <Text style={styles.subtitle}>
      (ခ) ပတ်ဝန်းကျင်သန့်ရှင်းရေး
      </Text>
      <Text style={styles.p}>{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
      ကျန်းမာရေးနှင့်ညီညွတ်သည့် ယင်လုံအိမ်သာဆိုသည်မှာ လူ့မစင် အညစ်အကြေး အား‌ ရေ၊ မြေ၊ လေ၊ ပိုးမွှား၊ တိရစ္ဆာန်တို့ကြောင့် လူတို့ထံ ပြန်လည်မရောက်ရှိစေရန် စနစ်တကျ စွန့်ပစ်သိုလှောင် ဖုံးအုပ်ထားရှိ အသုံးပြုသောအိမ်သာမျိုးဖြစ်သည်။
      </Text>
      <Text style={styles.subtitlel}>
      ကျန်းမာရေးနှင့်ညီညွတ်သော ယင်လုံအိမ်သာတစ်လုံးတွင် {"\n"} ပါဝင်သင့်သည့်အစိတ်အပိုင်းများ
      </Text>
      
    <List.Accordion
        title="၁။	အိမ်သာအဆောက်အဉီး" titleNumberOfLines={20} style={{backgroundColor:"#e5e59e"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`လေဝင်လေထွက်နှင့် အလင်းရောင်ကောင်းစွာရရှိမည်။ သုံးစွဲသူ သက်တောင့်သက် သာရှိရပါမည်။ တတ်နိုင်ပါက အခိုင်အခန့်ဆောက်နိုင်ပါသည်။ ဒေသထွက်ပစ္စည်းနှင့်လည်း ဆောက်နိုင်ပါသည်။ အရှက်လုံပါမည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title=" ၂။	အိမ်သာခွက်" titleNumberOfLines={20} style={{backgroundColor:"#e5e59e" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ဘိုထိုင်အို။ အိမ်သာကြွေခွက်၊ ပလတ်စတစ်အိမ်သာခွက်များကို သုံးစွဲရပါမည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="၃။	အိမ်သာခွက်အဖုံး" titleNumberOfLines={20} style={{backgroundColor:"#e5e59e"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`အိမ်သာခွက်မျက်နှာပြင်အား ယင်မနားစေရန်နှင့် အိမ်သာကျင်းအတွင်း ယင်မဝင်စေ ရန် အိမ်သာခွက် အဖုံးသည် အံကျဖြစ်နေရမည်။ အဖုံး၏ လက်ကိုင်အရိုးသည် နှစ်တောင် (သုံးပေ) ခန့်ရှိရမည်။ အိမ်သာတက်ပြီးတိုင်း ပြန်လည်ဖုံးအုပ်ထားရန်လိုပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="၄။	အိမ်သာကျင်း" titleNumberOfLines={20} style={{backgroundColor:"#e5e59e"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`မိသားစုသုံးအိမ်သာအတွက် ၅နှစ်ခန့်အသုံးပြုနိုင်စေရန် လူကြီးလက်ခုတ်တစ်ဖောင် ကျော် (၈ ပေ) ခန့်၊ အချင်း နှစ်တောင် (၃ပေ) ခန့်တူးရပါမည်။ မြေအောက်ရေနီးပါက အနက်ကို ရေကြောနှင့် ခွာ၍ လျှော့တူးနိုင်ပါသည်။ မြေမာလွန်း၍ အနက်မတူးနိုင်ပါက ကျင်းခပ်ကျယ်ကျယ် အလျားလိုက် တူးနိုင်သည်။ အနက် (၄ပေ) ခန့်ရှိသင့်ပါသည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title=" ၅။	အိမ်သာကျင်းအကာအရံ" titleNumberOfLines={20} style={{backgroundColor:"#e5e59e" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`နှစ်ထပ်ကျင်းဝါးခွေကို သုံးနိုင်ပါသည်။ အတွင်းဝါးခွေသည် အချင်းနှစ်တောင် (၃ ပေ) ရှိ၍ အမြင့်မှာ မြေကျင်းအောက်ခြေမှ မြေပြင်အထက် အမြင့်တစ်တောင်ကျော် (ရေလွှမ်း သော ဒေသများတွင် အမြင့်ဆုံးရေပြင်၏ အထက်တစ်တောင်ခန့်) ရှိရပါမည်။ အပြင်ဝါးခွေ မှာ မြေပြင်အောက်အနက်နှစ်ပေခန့်နှင့် မြေပြင်အထက်အမြင့် တစ်တောင်ကျော် (ရေလွှမ်း သော‌ဒေသများတွင် အမြင့်ဆုံး ရေပြင်၏အထက် တစ်တောင်ခန့်) ရှိရပါမည်။ ဝါးခွေနှစ်ခွေ ကြားတွင် ဖို့‌မြေအား သိပ်နေအောင် ဖြည့်ပေးရပါမည်။ ဝါးတူးသရွတ်ကွန်ကရစ်ကိုလည်း ကောင်း၊ ရေတွင်းကာ ကွန်ကရစ်ခွေကိုလည်းကောင်း တတ်နိုင်သလို အသုံးပြုနိုင်ပါသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="၆။	ဖို့မြေနှင့် အိမ်သာကျင်းအဖုံး" titleNumberOfLines={20} style={{backgroundColor:"#e5e59e"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`ဝါးခွေနှစ်ထပ်ကာရံထားသော အိမ်သာကျင်းအတွက် အဆိုပါ ဝါးခွေနှစ်ထပ်ပေါ်တွင် သစ်/ဝါးလုံးတန်းများကို ခိုင်မြဲ၍စိနေအောင် ချည်နောင်ပါ။ အထက်မှပလတ်စတစ်စ (သို့) ပီနံအိတ်ခွဖြင့် လုံခြုံအောင်ဖုံးအုပ်ပါ။ ထို့နောက်မြေကြီးကို အထက်မှအောက်သို့ လျှော့စောင်ဖြစ်အောင်ဖို့ရပါမည်။ ဝါးကူသရွတ်ကျံကွန်ကရစ်ခွေနှင့် ရေတွင်းကာကွန်ကရစ် ခွေတို့အတွက် ကွန်ကရစ်ဖြင့် အဖုံးပြုလုပ်၍ ဖုံးအုပ်ရပါမည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="မြေဆွေးကျင်းအိမ်သာ" titleNumberOfLines={20} style={{backgroundColor:"#e5e59e"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	မစင်စွန့်ပစ်ပြီးတိုင်း မြေကြီး (သို့မဟုတ်) ပြားဖြင့် လုံအောင် ဖုံးအုပ်ရပါမည်။
•	ဤသို့တစ်လွှာစီ ဖုံးအုပ်ပြီး ၁၀ လမှ ၁၂လအကြာတွင် မြေဆွေးအဖြစ် အသုံးပြုနိုင်ပါ သည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="ရေလောင်းအိမ်သာ" titleNumberOfLines={20} style={{backgroundColor:"#e5e59e" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ရေရရှိသောနေရာများအတွက် သင့်လျော်ပါသည်။
•	သို့သော် သန့်ရှင်းရေးမှန်မှန်ပြုလုပ်ရန် လိုအပ်ပါသည်။
•	ရေများများသုံးနိုင်လေလေ အနံ့သက်သာလေဖြစ်ပါသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ရေသိုးကန် (Septic Tank) အိမ်သာ" titleNumberOfLines={20} style={{backgroundColor:"#e5e59e"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`ဤအိမ်သာမျိုးသည် မိလ္လာရေတွင်ပါဝင်သော ညစ်ညမ်းသည့် အရာဝတ္ထုများအား အနည်ထိုင်စေရန် လေမလိုသော ဗက်တီးရီးယားများမှ ချေဖျက်စေရန်နှင့် အနည်းရည်များ သိုလှောင်ရန်တို့အတွက် ရေလုံ၊ လေလုံကန် (အုတ်၊ ကွန်ကရစ်) တစ်ခုနှင့် အရည်စစ်ကန် တစ်ခုတို့ပါရှိပါသည်။
	အထူးသတိပြုရန်မှာ - အနှစ်ရည်များ မိလ္လာအဝင်ပိုက်အောက် ကန်အနက်၏ သုံးပုံ တစ်ပုံခန့်ရှီလာလျှင် စုပ်ထုတ်၍ စနစ်တကျစွန့်ပစ်ရန် လိုအပ်ပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>
        <List.Accordion
        title="အကောင်းဆုံးအိမ်သာသည်" titleNumberOfLines={20} style={{backgroundColor:"#e5e59e"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`-ယင်လုံရမည်။\n-အနံ့လုံရမည်။\n-အရှက်လုံရမည်။\n-သန့်ရှင်းရမည်။\n-မစင်မှ ရောဂါမပြန့်ပွားစေရန် တားဆီးနိုင်ရမည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <Text style={styles.subtitlel}>
      ဆောက်လုပ်ပြီးအိမ်သာ တာရှည်သုံးစွဲနိုင်ရန် မိသားစုတိုင်းတွင် တာဝန်ရှိပါသည်။
      </Text>

<Text style={styles.p}>
•	မသုံးစွဲမီ ရေအနည်းငယ်လောင်းချပါ။
{"\n"}•	သုံးပြီးလျှင် ရေဖြင့်သန့်ရှင်းအောင် ဆေးချပါ။ (ရေဇလုပ်မပါသော ပလတ်စတစ် အိမ်သာခွက်ဖြစ်ပါက အသုံးပြုပြီး ပြန်လည်ဖုံးအုပ်ပါ။)
{"\n"}•	အိမ်သာကျင်းအပေါ်ရေများ စီးကျမှုမရှိအောင် ဆောင်ရွက်ထားပါ။
{"\n"}•	အိမ်သာကျင်းပေါ် တိရိစ္ဆာန်များ မနင်းမိအောင် ကာကွယ်ပေးပါ။

<Text style={styles.subp}>
ယင်လုံအိမ်သာ သုံးစွဲပါက
      </Text>
{"\n"}•	ယင်ကောင်နှင့် မစင်ထိတွေ့နိုင်ခြင်း မရှိတော့ပါ။
{"\n"}•	မစင်မှရောဂါပိုးများ ယင်ကောင်တွင်ကပ်ပါလာကာ ယင်နားသောအစာထဲသို့ ဝင်ရောက်နိုင် ခြင်း မရှိတော့ပါ။
{"\n"}•	အိမ်သာတွင်းထဲတွင် ယင်ပေါက်ပွားနိုင်ခြင်း မရှိတော့ပါ။
{"\n"}•	ယင်လုံသည်နှင့်အမျှ အနံ့လည်းလုံသွားမည်ဖြစ်ပါသည်။
{"\n"}•	မစင်အညစ်အကြေးများကို မမြင်ရေတော့သဖြင့် စိတ်ချမ်းသာရပါသည်။

</Text>

      </View>
    </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
      flex:1,
      backgroundColor:'#FFFFB0',
      marginBottom:10,
      
    },
  headtitle:{
    color:'#102027',
    fontSize:30,
    marginTop:10,
    List:'2'
  },
  subtitle:{
    color:'#260e04',
    fontSize:17,
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
    backgroundColor:'#e5e59e',
    textDecorationLine: 'underline',
  }
  ,
  subpp:{
    color:'#4e342e',
    fontSize:18,
  },
  subtitlel:{
    color:'#260e04',
    fontSize:16,
    backgroundColor:'#ffffcf',
  },
    
    })
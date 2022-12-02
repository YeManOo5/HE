import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function info({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D7FFD9'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၇.၁၅	ပလိပ်ရောဂါ
         </Text>
         <Text style={styles.p}>
         {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         ပလိပ်ရောဂါသည် တိရစ္ဆာန်မှ တစ်ဆင့် လူသို့ ကူးစက်သော ရောဂါတစ်မျိုးဖြစ်ပြီး ဘက်တီးရီးယားပိုးကြောင့် ဖြစ်ပွားရခြင်းဖြစ်သည်။ မြန်မာနိုင်ငံ၌ လူတွင် နောက်ဆုံးပလိပ် ရောဂါဖြစ်ပွားမှုမှဦ (၁၉၉၄) ခုနှစ်သည် နောက်ဆုံးဖြစ်သော်လည်း ပလိပ်ရောဂါသည် အချိန် မရွေး ဖြစ်ပွား၍ ကူးစက်ပျံ့နှံ့နိုင်ပြီး အသက်သေဆုံးနိုင်ပါသည်။
         {"\n"}<Text style={styles.subpu}>ပလိပ်ရောဂါအမျိုးအစားများနှင့်{"\n"} ၎င်းတို့၏ ရောဂါလက္ခဏာများ</Text>
  </Text>
  
      <List.Accordion
        title="၁။	အကျိတ်ပလိပ်" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`•	ဖျားခြင်း\n• ခေါင်းကိုက်ခြင်း\n•	ချမ်းတုန်ခြင်း\n•	ပေါင်ခြံ၊ ချိုင်းနှင့် လည်ပင်းတို့တွင် အကျိတ်များ ထွက်ခြင်း၊ နာကျင်ခြင်းနှင့် ပြည်တည်ခြင်း
`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title=" ၂။	သွေးပလိပ်" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`အကျိတ်ပလိပ်ရောဂါ ပြင်းထန်ပါက ရောဂါပိုးသည် လျင်မြန်စွာ သွေးထဲရောက်ရှိပြီး သွေးပလိပ်ရောဂါဖြစ်ပွား၍\n•	သွေးဆိပ်တက်ခြင်း\n•	တစ်ကိုယ်လုံးရှိသွေးကြောများအတွင်းတွင် သွေးခဲခြင်း\n•	ကိုယ်တွင်းကလီစာများ ထိခိုက်ပျက်စီးခြင်းတို့ ဖြစ်နိုင်ပါသည်။
`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="၃။	အဆုပ်ပလိပ်" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`သွေးထဲမှ ရောဂါပျံ့နှံ့ပြီး အဆုတ်သို့ ရောက်ရှိလာလျှင်သော်လည်းကောင်း၊ အဆုပ်ပလိပ်လူနာထံမှ ရောဂါပိုးများ အသက်ရှုလမ်းကြောင်းမှတဆင့် တိုက်ရိုက်ကူးစက်ခံ ရခြင်းဖြင့်သော်လည်းကောင်း ရောဂါဖြစ်ပွားပြီး 
•	ချောင်းဆိုးသွေးပါခြင်း
•	ပြာနှမ်းခြင်း
•	အသက်ရှုမြန်ခြင်းစသည့် လက္ခဏာများတွေ့ရှိရရတတ်ပြီး သေဆုံးမှုမြင့်မားတတ် သည်။
`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="ကူးစက်နိုင်သည့်နည်းလမ်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`ပလိပ်ရောဂါပိုးသည် ပထမဆုံး ကြွက်တွင် ရောဂါကူးစက်ပြန့်ပွားနိုင်ပြီး ပလိပ်ရောဂါ ဖြစ်နေသော ကြွက်၏ ခန္ဓာကိုယ်ပေါ်မှ ကြွက်လှေးများမှ ရောဂါရှိသော ကြွက်၏ သွေးကို  စုပ်ယူစားသုံးရာမှတစ်ဆင့် ကြွက်လှေးများတွင် ရောဂါကူးစက်မှု ဖြစ်လာပါသည်။
        ရောဂါရှိသော ကြွက်များပလိပ်ရောဂါကြောင့် သေဆုံးသောအခါ ကြွက်လှေးများသည် ၎င်းတို့အတွက် အစာသွေးမရနိုင်သောကြောင့် သေဆုံးသောကြွက်၏ ခန္ဓာကိုယ်ပေါ်မှ စွန့်ခွာ ကြပြီး အဆိုပါကြွက်အား ထိတွေ့ကိုင်တွယ်သည့် လူနှင့် အခြားကြွက်များကို ကိုက်ခြင်းအား ဖြင့် ပိလိပ်ရောဂါကူးစက်ပျံ့နှံ့ခြင်း ဖြစ်သည်။ အဆုပ်ပလိတ်ရောဂါဖြစ်ပွားပါက လေမှတဆင့် ပင်ကူးစက်နိုင်ပါသည်။`}
titleNumberOfLines={200}/>
        </List.Accordion>
        <Text style={styles.subpu}>ကပ်ရောဂါအသွင်မဖြစ်ပွားစေရန် သတိပြုရမည့်အချက်များ</Text>
        <List.Accordion
        title="၁။	ကြွက်ကျခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ကြွက်သတ်ဆေးတစ်မျိုးမျိုး သုံးစွဲထားခြင်းမရှိဘဲ ကြွက်သေများကို တစ်အိမ်တွင် အနည်းဆုံးကြွက်သေတစ်ကောင်နှင့် တစ်ရပ်ကွက်တွင် အနည်းဆုံးတစ်အိမ်တွင် ကြွက်သေ တွေ့ရှိခြင်းကို ကြွက်ကျခြင်းဟုခေါ်သည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title=" ၂။	သံသယလူနာရှိခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`သံသယ ပလိပ်ရောဂါလက္ခဏာများရှိသော လူနာအားတွေ့ရှိလျှင် နီးစပ်ရာကျန်းမာ ရေးဌာနသို့ အမြန်ပြသ၍ သတင်းပေးပို့ရပါမည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <Text style={styles.subpu}>ကာကွယ်နိုင်မည့် နည်းလမ်းများ</Text>
      
      <List.Accordion
        title="၁။	ကြွက်နှိမ်နင်းရေး" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ကြွက်လုံသော အဆောက်အဦးဖြစ်အောင် ပြုပြင်မွမ်းမံခြင်း (အိမ်တွင်းမှ ရေထွက် ပေါက်များ၊ ခေါင်တိုင်အပေါက်များအား (၁/၄) လက်မ အရွယ်အစားဖြင့် ပြုလုပ်ခြင်း နှင့် ထို့ထက်ကြီးပါက အဝများကို ပတ္တာပါသည့် အပိတ်ရှင်များ (သို့မဟုတ်) (၁/၄) လက်မထက် မကျယ်သော သံဇကာကွက်များကို အရှင်တပ်ဆင်ခြင်း)
•	ကြွက်များအား ဖမ်းဆီးနှိမ်နင်းခြင်း (ကြွက်သတ်ဆေး၊ ကြွက်ထောင်ချောက်၊ ကြွက်ကပ်ကော် ဆေးဘူးနှင့် တိပ်ပြားတို့အား အသုံးပြု၍ နှိမ်နင်းခြင်း)
•	ကြွက်ကျခြင်း ဖြစ်ပွားနေချိန်နှင့် ကြွက်ပလိပ်ရောဂဟု သံသယဖြစ်နေချိန်တွင် ကြွက် နှိမ်နင်းရေး မပြုလုပ်သင့်ပါ။ ကြွက်သေမှ ကြွက်လှေးများ လွတ်ထွက်ပြီး ရောဂါပျံ့နှံ့ ကူးစက်နိုင်ချေ ရှိသောကြောင့် ဖြစ်သည်။ ၎င်းအချိန်တွင် ပတ်ဝန်းကျင်သန့်ရှင်းရေး နှင့် စေျးသန့်ရှင်းရေးကို ဆောင်ရွက်ရမည်။
•	ကြွက်ကျချိန်တွင် ကြွက်လှေးနိမ်နင်းခြင်းကို ပထမဦးစွာ ဆောင်ရွက်ပြီးမှ ကြွက်နှိမ်နင်း ရေးအား ဆက်တိုက် ဆောင်ရွက်ရမည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="၂။	ကြွက်ကျခြင်းကို စောင့်ကြည့်ကြပ်ရှုထောက်လှမ်းခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ကြွက်သတ်ဆေးတစ်မျိုးမျိုး သုံးစွဲထားခြင်း မရှိဘဲ မိမိဒေသပတ်ဝန်းကျင် ကြွက်သေများတွေ့ရှိပါက နီးစပ်ရာ ကျန်းမာရေးဌာနသို့ ချက်ချင်းသတင်းပို့ဆောင်ရွက်ရန် လိုအပ်ပါသည်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="၃။	ပတ်ဝန်းကျင် သန့်ရှင်းရေးလုပ်ငန်းများ" titleNumberOfLines={20} style={{backgroundColor:"#c1e5c3" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`မြို့၊ ရွာများအတွင်းရှိ လမ်းများ စေျးများနှင့် အခြားအများပြည်သူနေထိုင်ရာ နေရာများ၌ ကြွက်များရှင်သန်ပေါက်ဖွားမှု မရှိစေရေးအတွက် အညစ်အကြေးနှင့် အမှိုက်သ ရိုက်များအား စနစ်တကျ စွန့်ပစ်ရမည်။`}
titleNumberOfLines={200}/>
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
  },
    subpu:{
      marginTop:10,
      color:'#4e342e',
      fontSize:17,
      backgroundColor:'#d3ecd5',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
    },
    
    })
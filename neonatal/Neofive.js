import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function Neofive({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView  style={{backgroundColor:'#D1D9FF'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         (င) ကလေးဖွံ့ဖြိုးရေး
         </Text>
         <Text style={styles.p}>
         •	ကလေးများသည် မွေးစကပင် အသိဉာဏ်ရှိပါသည်။
         {"\n"}•	ဉာဏ်ရည်ဖွံ့ဖြိုးတိုးတက်ရန်အတွက် ချစ်ခင်ကြင်နာမှုလိုအပ်ပါသည်။
         {"\n"}•	ကာယ၊ ဉာဏဖွံ့ဖြိုး၍ ဉာဏ်ရည်ထက်မြက်သော ကလေးငယ်ဖြစ်ရန်အတွက် ပျော်ရွှင်ဖွယ်ရာ ပတ်ဝန်းကျင်နှင့် ချစ်ခင်ကြင်နာမှုလိုအပ်ပါသည်။
         {"\n"}•	မိဘ (သို့မဟုတ်) ကလေးထိန်းသူမှ ကလေးအား ဂရုတစိုက်ပြုံး၍ ချော့မြူခြင်း၊ စကားပြောခြင်း၊ ချစ်ခင်ကြင်နာသည့် အပြုအမူများ ပြုလုပ်ပေးရန် လိုအပ်ပါသည်။
         {"\n"}•	ထိုကဲ့သို့ ပြုမူပေးခြင်းဖြင့် ကာယ၊ ဉာဏဖွံ့ဖြိုး၍ ဉာဏ်ရည်ထက်မြက်သော ကလေးငယ်များ ဖြစ်လာမည်ဖြစ်သည်။
         {"\n"}•	ကလေး၏ တုန့်ပြန်မှုကိုလည်း ဂရုပြုပါ။ ဂရုစိုက်ပါ။
         {"\n"}•	ကလေးပတ်ဝန်းကျင်တွင် ရောင်စုံကစားစရာများ၊ အရုပ်များ၊ ရုပ်ပုံများ ထားရပါမည်။
         {"\n"}•	ကလေးများအား အန္တရာယ်ကင်းသော ကစားစရာများ ပေး၍ ကစားစေရပါမည်။
         {"\n"}•	ကစားခြင်းဖြင့် မိမိတို့၏ ပတ်ဝန်းကျင်အကြောင်းကို သိရှိနားလည်နိုင်သည်။ ကစားခြင်းဖြင့် ကလေး၏ ခန္ဓာကိုယ်နှင့် စိတ်ဓာတ်ကို ကြီးထွားဖွံ့ဖြိုးစေရုံသာမက ပြောဆိုဆက်ဆံရေးကိုလည်း တိုးတက်စေသည်။
         {"\n"}•	ကလေးသည် တစ်ဦးတည်းဖြစ်စေ၊ အခြားကလေးများနှင့်ဖြစ်စေ ကစားနိုင်သည်။ ကလေးကစားနိုင်ရန် တန်ဖိုးကြီးသောအရုပ်များ ဝယ်ပေးရန် မလိုပါ။ မိမိအိမ်တွင် ပြုလုပ်သော ကစားစရာများနှင့်ဖြစ်စေ၊ အိမ်အသုံးအဆောင် ပစ္စည်းများနှင့်ဖြစ်စေ ကစားနိုင်ပါသည်။
         {"\n"}•	ကလေးကစားရာတွင် ဘေးအန္တရာယ်ကင်းရန် အရေးကြီးသဖြင့် ကလေးကစားသည့် အနီးတဝိုက်တွင် ထိခိုက်ဒဏ်ရာရစေနိုင်သောပစ္စည်းများ မရှိစေရန် ရှင်းလင်းထားရမည်။
         {"\n"}•	မိဘများသည် ကလေးကို အန္တရာယ်ကင်းသော ကစားစရာများဖန်တီးပေးခြင်း၊ ကလေးနှင့် အတူကစားခြင်း၊ ကလေးကိုယ်တိုင် ကြိုးစားရန် အခြေအနေဖန်တီးပေးခြင်းတို့ကို ဆောင်ရွက်ပေးရမည်။
</Text><Text style={styles.subtitle}>
အောက်ပါအချက်များမှ တစ်ခုရှိပါကဆေးရုံ/ဆေးခန်း/ကျန်းမာရေးဌာနများသို့ အမြန်ဆုံး သွားရောက်ပြသပါ။
         </Text>
         <List.Section title="အသက် နှင့် အမြန်ဆုံးသွားရောက်ပြသရမည့်အချက်များ" style={styles.headtitle}>
    
    <List.Accordion
          title="၁-၃လ" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}}
          >
          <List.Item title={`မိခင်မျက်နှာ (သို့) အရာဝတ္ထုတို့ကို လိုက်၍မကြည့်ခြင်း၊ အသံပေးသော်လည်း အပြုအမူ မပြောင်းလဲခြင်း၊ မြှူလျှင် ပြုံးမပြတက်ခြင်း၊ ကိုယ်ခန္ဓာ လွန်စွာ တောင့်ခြင်း (သို့) ပျော့ခြင်း။`}
          titleNumberOfLines={200} />
        </List.Accordion>
  
        <List.Accordion
          title="၆-လ" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5" }}  theme={{colors:{primary:'#8e61ff'}}}
          >
          <List.Item title={`လက်သီးအမြဲဆုပ်ထားခြင်း။ ခေါင်းမခိုင်ခြင်း။ အရုပ်တစ်ခုခုကို မကိုင်နိုင်ခြင်း။`}
  titleNumberOfLines={200}/>
        </List.Accordion>
  
        <List.Accordion
          title="၉-လ" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}} >
          <List.Item title={`အမှီအတွယ်မရှိလျှင် မထိုင်နိုင်ခြင်း (လက်ထောက်၍ပင် မထိုင်နိုင်ခြင်း။) မရယ်မောတတ်ခြင်း။`}
  titleNumberOfLines={200}/>
          </List.Accordion>

          <List.Accordion
          title="၁-နှစ်" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}} >
          <List.Item title={`ကလေးသဘာဝ ဝူးဝူးဝါးဝါး မပြုလုပ်ခြင်း၊ တာ့တာမပြုလုပ်နိုင်ခြင်း၊ ခေါင်းညိမ့်/ခေါင်းခါ မပြုလုပ်တတ်ခြင်း၊ လက်ညှိုးမထိုးတက်ခြင်း။`}
  titleNumberOfLines={200}/>
          </List.Accordion>

          <List.Accordion
          title="၁နှစ်ခွဲ" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}} >
          <List.Item title={`မတ်တပ် မစမ်းခြင်း။`}
  titleNumberOfLines={200}/>
          </List.Accordion>

          <List.Accordion
          title="၂နှစ်" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}} >
          <List.Item title={`ဖေဖေ၊ မေမေ မခေါ်တတ်ခြင်း၊ လမ်းကောင်းစွာမလျှောက်နိုင်ခြင်း။`}
  titleNumberOfLines={200}/>
          </List.Accordion>

          <List.Accordion
          title="၃နှစ် " titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}} >
          <List.Item title={`မပြေးနိုင်ခြင်း၊ မကြာခဏလဲကျခြင်း၊ ဝါကျအတိုများမပြောနိုင်ခြင်း၊ မျက်လုံး ချင်းဆိုင်မကြည့်ခြင်း။`}
  titleNumberOfLines={200}/>
          </List.Accordion>

          <List.Accordion
          title="၄နှစ်" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}} >
          <List.Item title={`စကားပြောသော်လည်း အခက်အခဲများစွာဖြင့် ပြောရသောကြောင့် အခြားသူ များနားမလည်ခြင်း၊ အခြားကလေးများနှင့် မကစားဘဲ တစ်ဦးတည်း သီးသန့် နေခြင်း။`}
  titleNumberOfLines={200}/>
          </List.Accordion>

          <List.Accordion
          title="မည်သည့် အသက်မဆို" titleNumberOfLines={20} style={{backgroundColor:"#bcc3e5"}} theme={{colors:{primary:'#8e61ff'}}} >
          <List.Item title={`ယခင်ရှိပြီးတက်ပြီးသား ကလေးဖွံ့ဖြိုးတိုးတက်မှုများ ပျောက်ဆုံးသွားခြင်း (သို့) ဆုတ်ယုတ်လာခြင်း၊ ယခင်ပြောတတ်သောစကားများ ပြန်ပျောက်သွားခြင်း။`}
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
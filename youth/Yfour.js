import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function YFour({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView  style={{backgroundColor:'#FFCCCB'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         (ဃ) လူပျိုဖော် ၊ အပျိုဖော် ဝင်ခြင်း 
         </Text>
         <Text style={styles.p}>
         လူပျိုဖော်၊ အပျိုဖော်ဝင်ခြင်းသည် အသက် (၉)နှစ်မှ (၁၆)နှစ်အတွင်း လူတိုင်းဖြတ်သန်းရမည့် ကာလအပိုင်းအခြားတစ်ခုဖြစ်သည်။ ထိုကာလသည် ကလေးဘ၀မှ လူကြီးဘဝသို့ ဖွံ့ဖြိုးပြောင်းလဲသော ကာလဖြစ်သည့်အတွက် ဖွံ့ဖြိုးပြောင်းလဲနှုန်းသည် တစ်ဉီးနှင့်တစ်ဉီး မတူနိုင်ပါ။ 
         {"\n"}
         ယောကျ်ားလေးများတွင်ဖြစ်သောပြောင်းလဲမှုများ {"\n"}
- အရေပြားပေါ်တွင် အဆီဓါတ်ပိုမိုများပြားလာခြင်း	 {"\n"}
- ဝက်ခြံအနည်းငယ်ထွက်လာခြင်း {"\n"}
- ချွေးဂလင်းများ အလုပ်ပိုမိုလုပ်ခြင်း	 {"\n"}
- ခန္ဓာကိုယ်အနံ့ပြောင်းလာခြင်း {"\n"}
- အရပ်ရှည်လာခြင်း		 {"\n"}
- အမွေးအမှင်များပေါက်လာခြင်း 
မိန်းကလေးများတွင်ဖြစ်သောပြောင်းလဲမှုများ
{"\n"}- ချွေးဂလင်းများအလုပ်ပိုမိုလုပ်ခြင်း	
{"\n"}- ခန္ဓာကိုယ်အနံ့ပြောင်းလာခြင်း
{"\n"}- အရပ်ရှည်လာခြင်း	
{"\n"}- အမွေးအမှင်များပေါက်လာခြင်း
{"\n"}- ဝက်ခြံအနည်းငယ်ထွက်လာခြင်း

{"\n"}အပျိုဖော်၊ လူပျိုဖော်ဝင်ချိန် စိတ်ခံစားမှုဆိုင်ရာပြောင်းလဲမှုများ
{"\n"}•	ကျား၊မ ကွဲပြားခြင်းကို စတင်သတိထားမိလာပြီး ဆန့်ကျင်ဘက်လိင်ကို စတင်စိတ်ဝင်စားမိ လာသည်။
{"\n"}•	တစ်ကိုယ်တော် ကာမစိတ်ဖြေမှုကို စတင်ပြုလုပ်နိုင်သည်။
{"\n"}•	စူးစမ်းလိုစိတ်၊ စွန့်စားလိုစိတ်များဖြစ်ပေါ်လာတတ်သည်။ စိတ်စေစားရာနောက်ကို လိုက်ပြီး လုပ်တတ်သည်။ စိတ်အတက်အကျအပြောင်းအလဲမြန်တတ်ပါသည်။
{"\n"}•	ကိုယ်ခန္ဓာဖွံ့ဖြိုးမှုနှင့်အလှအပကို တခြားရွယ်တူများနှင့် နှိုင်းယှဉ်ကာ အလွန်စိတ်ဝင် စား လာသည်။
{"\n"}•	မိသားစုနှင့်နေလိုစိတ်လျော့ပါးလာပြီး ကိုယ်ပိုင်လွတ်လပ်ခွင့်ကို ပို၍လိုလားလာကြ သည်။ မိသားစုနှင့်စာလျှင် သူငယ်ချင်းများကို ပိုမိုခင်တွယ်လာတတ်သည်။
{"\n"}•	သူငယ်ချင်းများလုပ်သည့်အတိုင်း လိုက်လုပ်တတ်လာသည်။
{"\n"}•	မိမိခြေထောက်ပေါ်မိမိရပ်တည်ချင်လာသည်။ မိမိလုပ်သောလုပ်ရပ်မျာအပေါ် အမှန်၊ အမှား ခွဲခြားတတ်လာသည်။
{"\n"}•	ဘဝအတွက် ကိုယ်ပိုင်ရည်မှန်းချက်၊ ရည်ရွယ်ချက်များ စတင်ချမှတ်လာတတ်သည်။
{"\n"}•	ကိုယ့်ကိုကိုယ်လူကြီးဖြစ်ပြီအထင်နှင့် ကိုယ်ပိုင်ဆုံးဖြတ်ချက်များနှင့် လုပ်ဆောင်လို စိတ်များရှိသည်။
{"\n"}•	စည်းမျဉ်းစည်းကမ်းများကို အရွဲ့တိုက်ပြီးဆန့်ကျင်ဖက်လုပ်ကြည့်တတ်လာသည်။
{"\n"}လိုက်နာသင့်သောအချက်များ
{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}ဘဝတစ်သက်တာပတ်လုံး ခန္ဓာကိုယ်အားမှန်မှန်ကန်ကန်ပြုစုပျိုးထောင်သွားရန် အရေးကြီးပါသည်။ ၎င်းအချိန်သည် ဖွံ့ဖြိုးသောအချိန်ဖြစ်သဖြင့် စိတ်ကသိကအောက်ဖြစ်နိုင် ပါသည်။ ထို့ကြောင့် အပျိုဖော်ဝင်ကာစ မိန်းကလေးများကို ကူညီစောင့်ရှောက်သင့်ပါသည်။ (ဥပမာ-ရေချိုးလျှင် ရင်လျားဖို့ သင်ပြခြင်း၊ ရှင်မီးဝတ်ခိုင်းခြင်း)
{"\n"} {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
ရာသီပေါ်ခြင်းနှင့် ပတ်သက်၍ (တစ်ကိုယ်တော်ရေသန့်ရှင်းခြင်း၊ ရာသီပေါ်ခြင်း၏ လစဉ်စက်ဝန်းတို့ကို) မိခင်မှ သေချာစွာရှင်းပြသင့်သည်။ ရာသီပေါ်စမှာ မှန်မှန်မပေါ်ဘဲ နှစ်လသုံးလတစ်ခါမှ ဖြစ်တတ်ပါသည်။ တခါတလေ အချိန်ကြာမြင့်စွာ ရာသီသွေးပေါ်နေ တတ်ပါသည်။ ဆရာဝန်နှင့်တိုင်ပင်သင့်ပါသည်။
{"\n"} {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
ကျန်းမာရေးနှင့်ညီညွတ်သော စားသောက်ပုံ အလေ့အထများနှင့် ဆောင်ရန်၊ ရှောင်ရန်များကို လိုက်နာနိုင်ရန်ကြိုးစားပါ။ ရေများများသောက်ခြင်း၊ အသီးအနှံ၊ ဟင်းသီး ဟင်းရွက်များ စားရန်နှင့် အချိုရည်၊ သကြားလုံးကဲ့သို့ သကြားဓါတ်များသော သရေစာများ ကို ရှောင်ခြင်းတို့ဖြစ်ပါသည်။
         </Text>
         
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
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      fontSize:20,
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
      marginTop:10,
      color:'#4e342e',
      fontSize:15,
      backgroundColor:'#e5b7b6',
      textDecorationLine: 'underline',
    }
    
    })
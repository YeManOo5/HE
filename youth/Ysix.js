import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function YSix({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView  style={{backgroundColor:'#FFCCCB'}}>
         <View style={styles.body} >
         <List.Section title="(စ) ဘေးကင်းလုံခြုံသော ကိုယ်ဝန်ဖျက်ချခြင်း " style={styles.headtitle}>
      <List.Accordion
        title="ကိုယ်ဝန်မဖျက်ချခင် နှင့် ဖျက်ချပြီးခြင်းအတွက် နှစ်သိမ့်ဆွေးနွေးပညာပေးခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title="ဘေးကင်းလုံခြုံစွာ ကိုယ်ဝန်ဖျက်ချထားသည့် အမျိုးသမီးအများစုသည် အကျိုးဆက် အနေဖြင့် ၎င်းတို့၏ ယေဘုယျ သို့မဟုတ် မျိုးဆက်ပွားကျန်းမာရေးအပေါ် မည်သည့် ရေရှည်သက်ရောက်မှုများ ခံစားရလိမ့်မည်မဟုတ်ပါ။  (ဥပမာ။ ။ နောက်ဆက်တွဲကိုယ်ဝန်ဆောင်ခြင်းအတွက်ဆိုးကျိုးများ ၊ မကောင်းသော စိတ်ပိုင်းဆိုင်ရာအကျိုးဆက်များ ၊ ရင်သားကင်ဆာ) "
        titleNumberOfLines={100} />
      </List.Accordion>

      <List.Accordion
        title=" အန္တရာယ်ရှိသော ကိုယ်ဝန်ဖျက်ချသည့် နည်းများမှာ " titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title="သားအိမ်အတွင်းသို့ အရာဝတ္ထု သို့မဟုတ် ပစ္စည်းတစ်ခု ( ဥပမာ။ အမြစ် ၊ သစ်ကိုင်း သို့မဟုတ် ဓလေ့ထုံးစံအရ ) ထည့်သွင်းခြင်း 
မကျွမ်းကျင်သော လက်သည်များမှ သားအိမ်ခြစ်၍ ကုသခြင်း
ကိုယ်ဝန်ပျက်ကျစေနိုင်သည့် အန္တရာယ်ရှိသော အရာများအား စားသုံးခြင်း
ပြင်ပမှ အင်အားဖြင့် ဝမ်းဗိုက်ကို ထုခြင်း ဖိခြင်း များ ပါဝင်သည်။" 
titleNumberOfLines={20}/>
      </List.Accordion>

      <List.Accordion
        title="အန္တရာယ်ရှိသော ကိုယ်ဝန်ဖျက်ချခြင်း၏ နောက်ဆက်တွဲ ဆိုးကျိုးများမှာ " titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title="သွေးလွန်ခြင်း ၊ သွေးဆိပ်ပျံ့နှံ့ခြင်း ၊ ဝမ်းတွင်းအမြှေးရောင်ခြင်း(ဗိုက်နာခြင်း) နှင့် သားအိမ်ခေါင်း ၊ သားအိမ်လမ်းကြောင်း ၊ သားအိမ် နှင့် ဝမ်းတွင်းအဂ်ါ အစိတ်အပိုင်းများကို ထိခိုက်ဒဏ်ရာ ရရှိစေခြင်း
ကျွမ်းကျင်သော ဝန်ဆောင်မှုပေးသူများနှင့် ကျန်းမာသန့်ရှင်းသော အခြေအနေများတွင်ပြုလုပ်ပါက ကိုယ်ဝန်ဖျက်ချခြင်းသည် အလွန်အန္တရာယ်ကင်းသော ဆေးဘက်ဆိုင်ရာလုပ်ထုံးလုပ်နည်းဖြစ်သည်။ (WHO, 2015)" 
titleNumberOfLines={20}/>
        
      </List.Accordion>


    </List.Section>

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
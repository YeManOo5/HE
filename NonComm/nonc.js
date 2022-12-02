import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'


export default function nonc({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView  style={{backgroundColor:'#F8FFD7'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         ၈.၃	နှလုံးသွေးကြောကျဉ်းရောဂါ
         </Text>
         <Text style={styles.p}>{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         နှလုံးသွေးကြောမကြီး အဆီပိတ်ခြင်းကြောင့်ဖြစ်သည်။ လှုပ်ရှားလျှင် ရင်ဘတ်အောင့် ပြီး နာကျင်မှုသည် လည်ပင်းနှင့် လက်မောင်းသို့ ပြန့်သွားတတ်သည်။
         {"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
  နှလုံးသွေးကြောကျဉ်းရောဂါသည် ဆေးလိပ်သောက်သူ၊ သွေးတိုးရောဂါရှိသူ၊ ဆီးချို ရောဂါရှိသူ၊ အဝလွန်သူ၊ သွေးတွင်းအဆီဓါတ်များသူ၊ ကိုယ်လက်လှုပ်ရှားမှုနည်းတူ၊ မိဘမျိုးရိုးတွင် နှလုံးသွေးကြောကျဉ်းရောဂါရှိသူ၊ စိတ်ဖိစီးမှုများသူ၊ အရက်အလွန်အကျွံ သောက်သူ၊ အဆီအစားများသူတို့တွင် ပိုမိုဖြစ်ပွားလေ့ရှိသည်။
	{"\n"}{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
  ရောဂါရှိ၊ မရှိကို ဆရာဝန်နှင့် ပြသစစ်ဆေးနိုင်သည်။ ရောဂါရှိနေသူများကို ဆေးဝါး ဖြင့် ကုသခြင်း၊ နှလုံးသွေးကြောချဲ့ခြင်း၊ နှလုံးခွဲစိတ်ကုသခြင်းတို့ဖြင့် ကုသနိုင်ပါသည်။
  {"\n"}{"\n"}ကာကွယ်နိုင်မည့်နည်းလမ်းများ
  {"\n"}•	သွေးပေါင်မှန်မှန်ချိန်ပါ။
  {"\n"}•	အဝမလွန်စေရန်နှင့် ကိုယ်အလေးချိန်ထိန်းသိမ်းပါ။
  {"\n"}•	သင့်တော်သည့် ကိုယ်လက်လှုပ်ရှားမှု မှန်မှန်လုပ်ပါ။
  {"\n"}•	ဆား၊ အငန်၊ အချိုနှင့် အဆိမ့် လျှော့စားပါ။
  {"\n"}•	တိရစ္ဆာန်မှရသောအဆီနှင့် ဟင်းချက်ဆီကို တတ်နိုင်သမျှ လျှော့စားပါ။
  {"\n"}•	ဟင်းသီးဟင်းရွက်၊ သစ်သီးဝလံနှင့် ငါး များများစားပါ။
  {"\n"}•	အာဟာရမျှတစွာစားပါ။ (အသေးစိတ်ကို အခန်း ၃ တွင် ဖတ်ရှုနိုင်ပါသည်။)
  {"\n"}•	ဟင်းချိုမှုန့်၊ ဟင်းခပ်မှုန့်အမျိုးမျိုးကို မစားသုံးသင့်ပါ။
  {"\n"}•	ဆေးလိပ်၊ ကွမ်းနှင့် အရက်တို့ကို ရှောင်ကြဉ်ပါ။

         </Text>
         
         </View>
       </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
        flex:1,
        backgroundColor:'#F8FFD7',
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
      backgroundColor:'#dfe5c1',
      textDecorationLine: 'underline',
    }
    
    })
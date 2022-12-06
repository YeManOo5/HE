import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'



export default function Neosix({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D1D9FF'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         (စ) ကလေးများ မတော်တဆထိခိုက်ဒဏ်ရာရခြင်းမှ ကာကွယ်နိုင်မည့် နည်းလမ်းများ
         </Text>
         <Text style={styles.p}>
         ကလေးများ မတော်တဆ ထိခိုက်ဒဏ်ရာရခြင်း မဖြစ်စေရန်အတွက်
         {"\n"}•	ကလေးများကို မျက်ခြေပြတ် မခံပါနှင့်။ စောင့်ကြည့်နေပါ။
         {"\n"}•	ဆေးများ၊ အဆိပ်အတောက်ဖြစ်စေသော အရာများကို ကလေးလက်လှမ်းမီသော နေရာများတွင် မထားပါနှင့်။ ဘီဒိုထဲတွင် သော့ခတ် သိမ်းထားပါ။
         {"\n"}•	ရေနွေးဘူးများ၊ ကွဲစေတတ်သော ပစ္စည်းများနှင့် ချွန်ထက်သောအရာများ (အပ်၊ ချိတ် ကို ကလေး၏ အနီးတွင် မထားပါနှင့်။
         {"\n"}•	လျှပ်စစ်မီးခလုတ်များ၊ ပလပ်ပေါက်များအား ကလေး လက်လှမ်းမမီနိုင်သော နေရာတွင် တပ်ဆင်ပါ။ 
         {"\n"}•	ကလေးအား ရေတွင်းရေကန်၊ မြစ်ချောင်းအနီးအနားနှင့် မြင့်သောနေရာတို့တွင် မကစားပါစေနှင့်။
         {"\n"}•	ကလေးပါးစပ်ထဲဝင်ပြီး အသက်ရှုလမ်းကြောင်း ပိတ်ဆို့စေနိုင်သည့် ကျောက်လုံး၊ ဒိုးခဲ၊ ဂေါ်လီလုံး၊ ဘက်ထရီ ပလိတ်အပြားသေးသေးလေးများ၊ အစေ့များ၊ (မန်ကျဉ်းစေ့၊ ဩဇာစေ့) တို့နှင့် မကစားပါစေနှင့်။ ကွာစေ့၊ မြေပဲ၊ နေကြာစေ့များ မကစားပါစေနှင့်. မကျွေးပါနှင့်။
         {"\n"}•	မီးဖိုနှင့် မီးခွက်များအနီးတွင် ကလေးကို မကစားပါစေနှင့်။


         </Text>
         
       
         
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
      backgroundColor:'#bcc3e5',
      textDecorationLine: 'underline',
    }
    
    })
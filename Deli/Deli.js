import { Pressable, StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'



export default function Deli({navigation}) {
    const onPresshundler = () => {
    navigation.goBack()
    }
     return(
      <ScrollView style={{backgroundColor:'#FFC4FF'}}>
      <View style={styles.body} >
      <Text style={styles.headtitle}>
      ၃။ မွေးဖွားစဥ် သိရှိရမည့်အချက်များ
      </Text>
      <Text style={styles.subtitle}>
      (က) လုံခြုံစိတ်ချစွာ မွေးဖွားခြင်း 
      </Text>
      <Text style={styles.subp}> မွေးဖွားရာတွင်လိုအပ်မည့် သန့်စင်ခြင်း (၆)မျိုး</Text>
      <Text style={styles.p}> 
      {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}နီးစပ်ရာကျန်းမာရေးဌာန၊ ကျန်းမာရေးဌာနခွဲများတွင် မွေးဖွားရန်လိုအပ်သည့် သန့်စင်ပြီး (၆)မျိုးသည် ပြီးပြည့်စုံပြီးဖြစ်ပါသဖြင့် ကျန်းမာရေးဌာများတွင် သွားရောက် မွေးဖွားသင့်ပါသည်။ အကယ်၍မသွားရောက်နိုင်ပါက အောက်ပါသန့်စင်ခြင်း၊ (၆)မျိုးလိုအပ် ပါသည်။
      {"\n"}၁။	သန့်စင်၍ ညီညာပြန့်ပြူးသော မွေးဖွားရန်နေရာ (ကိုယ်ဝန်ဆောင်အမျိုးသမီး မွေးဖွားမည့်နေရာ ဉပမာ-ကုတင်၊ ကြမ်းပြင် စသည်များ)
      {"\n"}၂။	မွေးဖွားပေးမည့်သူ၏ သန့်စင်သောလက်များနှင့် ပိုးသတ်ပြီး လက်အိတ်များ
      {"\n"}၃။	ချက်ကြိုးဖြတ်ရန်အတွက် သန့်စင်သော ဘလိတ်ဓား/ ကတ်ကြေး (ပိုးသန့်စင်ပြီး (သို့) ပြုတ်ပြီး)
      {"\n"}၄။	သန့်စင်သော ပိုးမွှားကင်းစင်ပြီး ချက်ကြိုးချည်သည့်ကြိုး (ပိုးသန့်စင်ပြီး (သို့) ပြုတ်ပြီး) ချက်ညှပ် ကလစ်
      {"\n"}၅။	ကလေးငယ်အား ထုပ်ပိုးရန် သန့်စင်သောအနှီးပိတ်နှင့် ဝတ်ရန်အဝတ်များ၊ ဦးထုပ်၊ ခြေအိတ်
      {"\n"}၆။	မိခင်အတွက် သန့်စင်သော အဝတ်အစားများ
      {"\n"}<Text style={styles.subtitle}>
      (ခ) မွေးဖွားစဥ် အတွင်း ဖြစ်ပေါ်နိုင်သည့် အန္တရာယ် လက္ခဏာများ 
      </Text>
      {"\n"}ကျန်းမာရေးဝန်ထမ်းများနှင့် ချက်ချင်းစစ်ဆေးရန်လိုအပ်သည့် အန္တရာယ်ရှိသည့် လက္ခဏာများ
မီးတွင်းကာလ 
{"\n"}	သွေးအလွန်အမင်းထွက်လျှင်
{"\n"}	မိန်းမကိုယ်မှ ဆင်းသည့် အရည်များအနံ့ဆိုးလျှင်
{"\n"}	ဆီးသွားစဉ်တွင် နာကျင်လျှင်
{"\n"}	ဖျားလျှင်
{"\n"}	ခေါင်းအလွန်ကိုက်ပြီး အမြင်မှုန်ဝါးလျှင်
{"\n"}	တက်လျှင်
{"\n"}	နို့သီးခေါင်း / နို့အုံ နာကျင်၊ ရောင်ရမ်းလျှင်

      

      </Text>

      </View>
    </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
      flex:1,
      backgroundColor:'#FFC4FF',
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
    backgroundColor:'#e5b0e5',
    textDecorationLine: 'underline',
  }
    
    })
import { Pressable, StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'



export default function Pncone({navigation}) {
    const onPresshundler = () => {
    navigation.goBack()
    }
     return(
      <ScrollView  style={{backgroundColor:'#E6CEFF'}}>
      <View style={styles.body} >
      <Text style={styles.headtitle}>
      (က) မွေးဖွားပြီးစ မိခင်များအတွက် {"\n"} အန္တရာယ် လက္ခဏာများ 
      </Text>
      <Text style={styles.p}>
      မီးတွင်းချိန်တွင် အောက်ပါအခြေအနေများ ဖြစ်ပေါ်လာပါက ဆေးရုံ/ ဆေးခန်း/ ကျန်းမာရေးဌာနသို့ နေ့ညမဆိုင်း ချက်ခြင်းပြပါ။
      {"\n"}•	သွေးဆင်းများလျှင်
      {"\n"}•	ခေါင်းအလွန်ကိုက်ပြီး အမြန်မှုန်ဝါးလျှင်
      {"\n"}•	တက်လျှင်
      {"\n"}•	အသက်ရှုမြန်လျှင်၊ အသက်ရှုခက်လျှင်
      {"\n"}•	ဖျားပြီးအိပ်ရာမှ မထနိုင်အောင် အားနည်းလျှင်

      {"\n"}


      </Text>
      
      </View>
    </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
      flex:1,
      backgroundColor:'#E6CEFF',
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
import { Pressable, StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'



export default function AncFour({navigation}) {
    const onPresshundler = () => {
    navigation.goBack()
    }
     return(
      <ScrollView contentContainerStyle={{margin:"2%"}} style={{backgroundColor:'#FFC1E3'}}>
      <View style={styles.body} >
      <Text style={styles.headtitle}>
      (ဃ) ကိုယ်ဝန်ဆောင်မိခင်များအတွက် အန္တရာယ်လက္ခဏာများ 
      </Text>
      <Text style={styles.p}>
      အောက်ပါ အန္တရာယ်ရှိသည့်လက္ခဏာတစ်ခုခုဖြစ်ပွားပါက နီးစပ်ရာကျန်းမာရေးဌာနသို့ အမြန်ဆုံးသွားရောက်ပြသရန်။
      {"\n"}ကိုယ်ဝန်ဆောင်ကာလ
{"\n"}•	မိန်းမကိုယ်မှ သွေးဆင်းခြင်း
{"\n"}•	ခေါင်းအလွန် ကိုက်ပြီးအမြင်မှုန်ဝါးခြင်း
{"\n"}•	တက်ခြင်း
{"\n"}•	အသက်ရှူမြန်ခြင်း(သို့) အသက်ရှူခက်ခဲခြင်း
{"\n"}•	ဖျား၍ အားနည်းခြင်း
{"\n"}•	အလွန်အမင်း ဗိုက်နာခြင်း
{"\n"}•	ဖောရောင်ခြင်း


      </Text>
      
      </View>
    </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    body :{
      flex:1,
      backgroundColor:'#FFC1E3',
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
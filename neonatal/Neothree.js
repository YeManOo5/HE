import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'



export default function Neothree({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D1D9FF'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         (ဂ) ၅နှစ်အောက်ကလေး၏ အထွေထွေ အန္တရာယ်လက္ခဏာများ 
         </Text>
         <Text style={styles.p}>
         <Text style={styles.subpp}>ကလေးတွင် အောက်ပါ လက္ခဏာများ တွေ့ရှိပါက အနီးစပ်ဆုံး ဆေးရုံ / ဆေးခန်းသို့ အလျင်မြန်ဆုံး / ချက်ချင်း ခေါ်ဆောင်သွားရပါမည်။ 
</Text>
<Text style={styles.pp}>
{"\n"}၁။ စားသမျှ အန်ခြင်း 
{"\n"}၂။ လုံးဝ မစားနိုင် မသောက်နိုင် ၊ နို့မစို့နိုင်ခြင်း 
{"\n"}၃။ မှိန်းခြင်း ၊ သတိလစ်ခြင်း 
{"\n"}၄။ တက် ခြင်း 
{"\n"}၅။ အသက်ရှူမြန်ခြင်း ၊ ရင်ဘတ်အောက်ပိုင်းချိုင့်ဝင်ခြင်း ၊ အသက်ရှူရခက်ခဲခြင်း 
{"\n"}၆။ ဝမ်းလျော၍ မျက်တွင်းချိုင့်ဝင်ခြင်းများရှိခြင်း 
{"\n"}၇။ ဝမ်းထဲတွင် သွေးပါခြင်း ၊ သွေးဝမ်းသွားခြင်း 
{"\n"}၈။ မျက်တွင်းချိုင့်ဝင်ခြင်း
</Text>
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
    },
    subpp:{
      marginTop:10,
      color:'#c41101',
      fontSize:15,
      backgroundColor:'#bcc3e5',
      textDecorationLine: 'underline',
    },
    pp:{
      margin:7,
      color:'#c41101',
      fontSize:15,
      lineHeight: 26,
    },
    
    })
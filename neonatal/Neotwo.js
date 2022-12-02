import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'



export default function Neotwo({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#D1D9FF'}}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         (ခ) မွေးကင်းစကလေးငယ်များအတွက် အသက်အန္တရာယ်စိုးရိမ်ရသော လက္ခဏာများ
         </Text>
         <Text style={styles.p}>
         {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
         မွေးကင်းစကလေးငယ်များ (၀ မှ ၂၈-ရက်အတွင်း) တွင် အောက်ပါအခြေအနေများ ဖြစ်ပေါ်လာပါက ဆေးရုံ/ဆေးခန်း/ကျန်းမာရေးဌာနများသို့ နေ့ညမဆိုင်း ချက်ချင်းပြသပါ။
         {"\n"}•	အသက်ရှုမြန်လျှင်/ခက်ခဲလျှင်၊ ညည်းလျှင်၊ နှုတ်ခမ်းနှင့်လျှာပြာနှမ်းလျှင်၊ အသက်ရှု သွင်းစဉ် နှာခေါင်းဝလှုပ်ရှားမှုများရှိလျှင်
         {"\n"}•	အသက်ရှုသွင်းစဉ် ရင်ဘတ်အောက် ချို့ဝင်လျှင်
         {"\n"}•	တက်လျှင်၊ မှိန်း၍နှိုးရခက်လျှင်
         {"\n"}•	နို့လုံးဝ မစို့လျှင်၊ နို့တိုက်ရခက်ခဲလျှင် ၂၄ နာရီအတွင်း နို့စို့မှု (၅) ကြိမ်အောက်နည်း လျှင်
         {"\n"}•	ဖျားလျှင် (သို့) ကိုက်အေးစက်လျှင်
         {"\n"}•	ချက်မှ သွေးထွက်လျှင် (သို့) ချက်ပတ်လည်အရေပြားနီရဲလျှင် (သို့) ချက်မှ ပြည်ထွက်လျှင်
         {"\n"}•	ကလေး အလွန်သေးငယ်လျှင်
         {"\n"}•	သန္ဓေပတ်မစေ့မီမွေးဖွားသော ကလေးဖြစ်လျှင်
         {"\n"}•	မျက်စိမှ ပြည်ထွက်လျှင်
         {"\n"}•	အသားဝါလျှင်
         {"\n"}•	လှုပ်ရှားမှုမရှိလျှင် (သို့) လှုံ့ဆော်မှုရှိမှသာ လှုပ်ရှားလျှင်
         {"\n"}•	ပျော့ဖတ်ခြင်း၊ တောင့်တင်းခြင်းရှိလျှင်
         {"\n"}•	အလွန်ဖြူဖျော့လျှင်
         {"\n"}•	အရေပြားပေါ်တွင် (၁၀) ဖုထက်များသော ပြည်ဖုလေးများ/ပြည်ဖုကြီးများပေါက်လျှင်
         {"\n"}•	ခြေလက်များကောင်းစွာ မလှုပ်ရှားလျှင်

          
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
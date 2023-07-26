import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { List } from 'react-native-paper'

export default function YFive({navigation}) {
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView style={{backgroundColor:'#FFCCCB'}}>
         <View style={styles.body} >
         <Text style={styles.subtitle}>
         (င) သားဆက်ခြားခြင်း (အသေးစိတ်အချက်အလက်များ / အရေးပေါ်သားဆက်ခြားခြင်း) 
         </Text>
         <Text style={styles.p}>ဆယ်ကျော်သက်များ ကျန်းမာရေးအခြေအနေ နှင့် သင့်လျော်သည့် သားဆက်ခြားနည်း ရွေးချယ်ခြင်း </Text>
         
         <List.Section title="ကျန်းမာရေးအခြေအနေ နှင့် သားဆက်ခြားနည်း" style={styles.headtitle}>
    
  <List.Accordion
        title="လတ်တလောကိုယ်ဝန်ရှိ" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`သားဆက်ခြားနည်း သုံးစွဲရန် မလို။ 
ရောဂါမကူးစက်ရန် ကွန်ဒုံး သုံးနိုင်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="မီးဖွားပြီး နို့တိုက်မိခင် (ကလေး ၆ပတ် မကျော်) " titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ဟော်မုန်းပါ သားဆက်ခြားနည်းများ မသုံးရန် ။ ကွန်ဒုံးသုံးနိုင်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="မီးဖွားပြီး နို့တိုက်မိခင် (ကလေး ၆ပတ် - ၆လ)" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`ဟော်မုန်းပါသည့် သားဆက်ခြားသောက်ဆေးများ ဖြစ်နိုင်ပါက မသုံးရန်။ ပရိုဂျက်စတီရုန်း တစ်မျိုးတည်းပါ သားဆက်ခြားနည်း သုံးနိုင်။ ကွန်ဒုံးသုံးနိုင်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="မီးဖွားပြီး နို့တိုက်မိခင် (ကလေး ၆လ ကျော်)" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ဟော်မုန်းပါ သားဆက်ခြားဆေးများသုံးနိုင်။ 
ကွန်ဒုံးသုံးနိုင်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="မီးဖွားပြီး မိခင်(နို့မတိုက်) (ကလေး ၂၁ရက် မပြည့်သေး)" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ဟော်မုန်းပါသည့် သားဆက်ခြားသောက်ဆေးများ ဖြစ်နိုင်ပါက မသုံးရန်။ ပရိုဂျက်စတီရုန်း တစ်မျိုးတည်းပါ သားဆက်ခြားနည်း သုံးနိုင်။ ကွန်ဒုံးသုံးနိုင်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

     <List.Accordion
        title="မီးဖွားပြီး မိခင်(နို့မတိုက်) (ကလေး ၂၁ရက် ကျော်)" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`ဟော်မုန်းပါ သားဆက်ခြားနည်းများ သုံးနိုင်။ ကွန်ဒုံးသုံးနိုင်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="သွေးတိုးရောဂါရှိ (အပေါ်သွေး ၁၆၀ ၊ အောက်သွေး ၁၀၀ ကျော်)" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ဟော်မုန်းပါသည့် သားဆက်ခြားသောက်ဆေးများ မသုံးရန်။ ၃လခံဆေးဖြစ်နိုင်ပါက မသုံးရန်။ ပရိုဂျက်စတီရုန်း တစ်မျိုးတည်းပါ သားဆက်ခြားနည်းသုံးနိုင် ။ ကွန်ဒုံးသုံးနိုင်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="သွေးတိုးရောဂါရှိ (အပေါ်သွေး ၁၄၀-၁၅၉ ၊ အောက်သွေး ၉၀-၉၉)" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ဟော်မုန်းပါသည့် သားဆက်ခြားသောက်ဆေးများ ဖြစ်နိုင်ပါက မသုံးရန်။ ပရိုဂျက်စတီရုန်း တစ်မျိုးတည်းပါ သားဆက်ခြားနည်းသုံးနိုင် ။ ကွန်ဒုံးသုံးနိုင်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="ပေါင် ၊ ခြေသလုံး ၊ သွေးကြောပိတ်ခြင်းကြောင့် ပြင်းထန်စွာ နာခြင်း" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`ဟော်မုန်းပါသည့် သားဆက်ခြားသောက်ဆေးများ မသုံးရန်။ ပရိုဂျက်စတီရုန်း တစ်မျိုးတည်းပါ သားဆက်ခြားနည်း သုံးနိုင် ။ ကွန်ဒုံးသုံးနိုင်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

        <List.Accordion
        title="သွေးရောဂါ ရာဇဝင်ရှိသူ" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ဟော်မုန်းပါသည့် သားဆက်ခြားသောက်ဆေးများ မသုံးရန်။ ပရိုဂျက်စတီရုန်း တစ်မျိုးတည်းပါ သားဆက်ခြားနည်း သုံးနိုင် ။ ကွန်ဒုံးသုံးနိုင်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="ခေါင်းပြင်းထန်စွာကိုက်သည့် ရောဂါရှိသူ" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6" }}  theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`ဟော်မုန်းပါသည့် သားဆက်ခြားသောက်ဆေးများ မသုံးရန်။ ပရိုဂျက်စတီရုန်း တစ်မျိုးတည်းပါ သားဆက်ခြားနည်းသုံးနိုင် ။ ကွန်ဒုံးသုံးနိုင်။`}
titleNumberOfLines={200}/>
      </List.Accordion>

      <List.Accordion
        title="လတ်တလော ဗိုင်းရပ်(စ) အသည်းရောဂါရှိသူ" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6"}} theme={{colors:{primary:'#8e61ff'}}} >
        <List.Item title={`ဟော်မုန်းပါသည့် သားဆက်ခြားသောက်ဆေးများ မသုံးရန်။ ပရိုဂျက်စတီရုန်း တစ်မျိုးတည်းပါ သားဆက်ခြားနည်းသုံးနိုင် ။ ကွန်ဒုံးသုံးနိုင်။`}
titleNumberOfLines={200}/>
        </List.Accordion>

<List.Accordion
        title="အရေးပေါ် သန္ဓေတား စားဆေးသောက်ရန် လမ်းညွှန်မှုများ" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`အကာအကွယ်မဲ့ လိင်ဆက်ဆံခြင်းဖြင့် ကိုယ်ဝန်ရနိုင်သည့်အတွက် နှစ်သိမ့်ပညာပေး ဆွေးနွေးပါ။ အရေးပေါ် သန္ဓေတား စားဆေးသောက်ရန် နောက်ကျခြင်းသည် ဆေးအာနိသင် ကျဆင်းစေသဖြင့် အရေးပေါ် သန္ဓေတား စားဆေး စောလျှင်စွာ သောက်ရန်လိုအပ်သည်။ အရေးပေါ် သန္ဓေတား စားဆေးသည် ၅ရက် (၁၂၀ နာရီ) ကျော်လျှင် ထိရောက်မှု မရှိတော့ပါ။ ဘေးထွက်ဆိုးကျိုးအဖြစ် ဆေးသောက်ပြီး အန်တတ်သည်။ အအန်သက်သာစေရန် antiemetic ဆေးသောက်နိုင်သည်။ အရေးပေါ် သန္ဓေတား စားဆေး နှစ်မျိုးရှိသည်။ 
၁။ Levonorgestrel 1.5mg ပါဝင်သည့် အရေးပေါ် သန္ဓေတားဆေး တစ်လုံးသောက်ခြင်း 
၂။ Ethinylestradiol 30mcg / levonorgestrel 150mcg ပါဝင်သည့် နေ့စဥ်သောက်ရသည့် သန္ဓေတားဆေးကို (၄)လုံး တစ်ပြိုင်တည်းသောက်ပြီး (၁၂)နာရီအကြာတွင် နောက်ထပ် (၄)လုံး သောက်ရန်ဖြစ်သည်။`}
        titleNumberOfLines={200} />
      </List.Accordion>

      <List.Accordion
        title="အထူးသတိပြုရန်မှာ -" titleNumberOfLines={20} style={{backgroundColor:"#e5b7b6"}} theme={{colors:{primary:'#8e61ff'}}}
        >
        <List.Item title={`-	အရေးပေါ် သန္ဓေတားဆေးသည် ၁၀၀ ရာခိုင်နှုန်း ကာကွယ်မှုမပေးသဖြင့် ကိုယ်ဝန် ရှိ/မရှိ သိရန် (၁)လ အကြာတွင် ပြန်လည်ခေါ်ယူပါ။ 
-	အရေးပေါ် သန္ဓေတားဆေးကို ပုံမှန်တားဆေးအဖြစ် သုံးရန်မသင့်ပါ။ ၎င်းကို တစ်လအတွင်း အကြိမ်ကြိမ် ထပ်တလဲလဲ သုံးရန်လည်း မသင့်ပါ။ 
-	ကိုယ်ဝန်မရရန် သန္ဓေတားဆေး သုံးစွဲလိုပါက ကျန်းမာရေးဝန်ထမ်းများနှင့် ဆွေးနွေးမှု ခံယူရန် အကြံပြုပါ။ (MOHS, 2015)`}
        titleNumberOfLines={200} />
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
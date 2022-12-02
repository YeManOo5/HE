import { Pressable, StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


const mynsar =[
'၁။ ဆယ်ကျော်သက် လူငယ် \n ကျန်းမာဖွံ့ဖြိုးရေး  မျိုးဆက်ပွား ကျန်းမာရေး',
'၂။ မိခင် ကိုယ်ဝန်စောင့်ရှောက်ခြင်း',
'၃။ မွေးဖွားစဥ် သိရှိရမည့်အချက်များ',
'၄။ မွေးဖွားပြီးချိန်တွင်  မိခင်အား \n စောင့်ရှောက်မှု',
'၅။ မွေးကင်းစကလေး ကျန်းမာ ဖွံ့ဖြိုးရေး',
'၆။ တစ်ကိုယ်ရည်သန့်ရှင်းရေး',
'၇။ ကူးစက်နိုင်သော ရောဂါများ အကြောင်း',
'၈။ မကူးစက်နိုင်သော ရောဂါများအကြောင်း',
'၉။ ပတ်ဝန်းကျင်ဆိုင်ရာ ကျန်းမာရေး / \n ပတ်ဝန်းကျင် သန့်ရှင်းရေး',
'၁၀။ စိတ်ကျန်းမာရေး',
'References'
]
const get =[
 'Youth','Anc','Deli','Pnc','Neo','Per','Inf','Non','Env','men','Ref' 
]

const bgclr = [
    '#FFCCCB','#FFC1E3','#FFC4FF','#E6CEFF',
    '#D1D9FF','#B2FEF7',
    '#D7FFD9','#F8FFD7','#FFFFB0',
    '#FFDDC1','#EFDCD5'
  ]

  const Ic = [
   require('../assets/one.png') , require('../assets/two.png'),require('../assets/three.png'),require('../assets/four.png'),
   require('../assets/five.png'),require('../assets/six.png'),require('../assets/seven.png'),require('../assets/eight.png'),
   require('../assets/nine.png'),require('../assets/teen.png'),require('../assets/eleven.png')
  ]

export default function ScreenA({navigation}) {
    const onPresshundler = (Get) => {
     navigation.navigate(get[Get]) 
    }
     


    return(
        <ScrollView style={{backgroundColor:'#fff'}}>
      <View style={styles.body}>
        <Text style={styles.headtitle}>ကျန်းမာရေးအသိပညာပေးခြင်း</Text>
        {/* <Text style={styles.Text}>
          content
        </Text> */}
        </View >

                   
                   {
                    mynsar.map((title,index) => (
                        <View style={{ flexDirection: 'row' ,alignSelf:'center',marginBottom:20 }}>
                        <Pressable
         onPress={() => onPresshundler (index)}
         style={[styles.radio , {backgroundColor:`${bgclr[index]}`}]} >
         <Text style={styles.buttontx}>
         {title}
         </Text>
                        </Pressable>   
         <TouchableOpacity onPress={() => onPresshundler (index)} >                 
         <Image 
     style={styles.icon}
     source={Ic[index]}
     /></TouchableOpacity>
                          

             </View>
                        
                    ))}


                       
        </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    body :{
      flex:1,
      backgroundColor:'#fff',
      marginBottom:10
    },
    body1 :{
        flex:5,
        backgroundColor:'#fff',
      },
    Text:{
      color:'black',
      fontSize:20,
      margin:20,
    },
    headtitle:{
       fontSize:25,
      color:'#070A18',
      justifyContent:'center',
      alignSelf:'center',
      margin:20,
      alignItems:'center',
      textAlign: 'center',
    },
    icon:{
        width:69,
        height:69,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        marginLeft:10,

       } ,
     buttontx :{
        color:'black',
      fontSize:16.5,
      textAlign: 'center',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
     }  ,
     radio:{
        elevation:8,
        width:'70%',
        height:69,
        borderRadius:15,
        justifyContent:'center',
      alignSelf:'center',
      textAlign: 'center',
      },
    })
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const mynsar =[
  '(က) လိင်မှုဆိုင်ရာ ပညာပေးခြင်း',
  '(ခ) ဆေးလိပ် ၊ အရက် ၊ မူးယစ်ဆေးဝါး ၊ \n ကွမ်းစားခြင်းအန္တရာယ်အကြောင်း သိကောင်းစရာများ',
  '(ဂ) ကျား ၊ မ အခြေပြု အကြမ်းဖက်မှုများ',
  '(ဃ) လူပျိုဖော် ၊ အပျိုဖော် ဝင်ခြင်း',
  '(င) သားဆက်ခြားခြင်း \n ( အသေးစိတ်အချက်အလက်များ / အရေးပေါ် သားဆက်ခြားခြင်း )',
  '(စ) ဘေးကင်းလုံခြုံသော ကိုယ်ဝန်ဖျက်ချခြင်း',
  ]
 const go = [
 'Yone','Ytwo','Ythree','Yfour','Yfive','Ysix'
 ]
export default function YOuth({navigation}) {
    const onPresshundlerone= (Go) => {
    
      navigation.navigate(go[Go])
    }
     return(
       <ScrollView  style={{backgroundColor:'#fff'}}>
         <View style={styles.body}>
        <Text style={styles.headtitle}>ဆယ်ကျော်သက် လူငယ် ကျန်းမာဖွံ့ဖြိုးရေး  {'\n'}
  မျိုးဆက်ပွား ကျန်းမာရေး</Text>

        
        </View >

            {
                    mynsar.map((title,index) => (
                        <View style={{ flexDirection: 'row' ,alignSelf:'center',marginBottom:20 }}>
                        <Pressable
         onPress= {()=> onPresshundlerone (index)}
         style={[styles.radio , {backgroundColor:'#FFCCCB'}]} >
         <Text style={styles.buttontx}>
         {title}
         </Text>
                        </Pressable>   
         
                          

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
        elevation:7,
        width:'70%',
        height:69,
        borderRadius:15,
        justifyContent:'center',
      alignSelf:'center',
      textAlign: 'center',
      },
    
    })
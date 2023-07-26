import { Pressable, StyleSheet, Text, View,Linking,Image, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'


export default function Ref({navigation}) {
  console.log()
    const onPresshundler = () => {
    
    navigation.goBack()
    }
     return(
       <ScrollView  style={styles.all}>
         <View style={styles.body} >
         <Text style={styles.headtitle}>
         References
         </Text>
         <Text style={styles.p}>
        {"\n"}<Text style={styles.subp} 
         onPress={() => Linking.openURL('https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967')}>
       Mayo Clinic. (n.d.). Retrieved from Mayo Clinic:</Text>
       {"\n"}MOHS. (2015). Adolescent and Youth Friendly Health Services Manual. 
       {"\n"}MOHS. (2016). MCH Handbook. 
       {"\n"}MOHS. (2018). Gender Based Violence Healthcare Factsheet.
       {"\n"}MOHS. (2018). Gender Based Violence Survivors' Healthcare Guideline. 
       {"\n"}MOHS. (2018). National Guidelins for Antenatal Care. 
       {"\n"}MOHS. (2018). Standardized Health Messages. 
       {"\n"}UNFPA. (2018). Comprehensive Sexuality Education. In Teenage Pregnancy. 
       {"\n"}WHO. (2015). Safe Abortion Care and Post-abortion Contraception. 
       {"\n"}WHO. (2019). Integrated Management Of Childhood Illness. 
       </Text> 
         </View>

         <View style={{alignItems:'flex-end', bottom: 1,backgroundColor:'#fff'}}>
          
          <Image source={require('../assets/loogoo.png')} style={styles.img} />
         
          </View>
 </ScrollView>
     )
   }

   const styles = StyleSheet.create({
    all :{
      width:'100%',
      height: '100%',
      backgroundColor:'#fff',
    },
body :{
        
        backgroundColor:'#fff',
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
      color:'blue',
      fontSize:15,
      textDecorationLine: 'underline',
    },
    img :{
      backgroundColor:'#fff',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      width: Dimensions.get('screen').width/1,
      height:  Dimensions.get('screen').width/1,
      resizeMode: 'contain'
    },
    im :{
      alignItems:'baseline'
    }
    
    })
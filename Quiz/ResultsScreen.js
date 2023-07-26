import { StyleSheet, Text, View, Pressable, Image,Dimensions ,ScrollView,FlatList,ImageBackground} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { useState } from 'react';
import bg from '../assets/bg.png'
export default function ResultsScreen ({navigation}) {

const bg =require('../assets/bg.png')
  const [percentage,setPercentage] = useState()
  const [trueCount, setTrueCount] = useState()

  useEffect(() => {
    console.log('answer params => ',route.params.answers)
    var newArray = (route.params.answers).filter(function (el) {
      return el.answer == true 
    });
    setTrueCount(newArray.length)
    setPercentage(Math.round((newArray.length/route.params.answers.length)*100))
    console.log('Percentage % => ', Math.round((newArray.length/route.params.answers.length)*100))
  }, []);

    const onPresshundler = () => {
        navigation.navigate('Contpg')
        
        
      
        };

        const route =useRoute();
     
    return (
     
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
         <ImageBackground source={bg} resizeMode="cover" style={{ flex: 1,
    justifyContent: 'center',}}>
      <View style={{flex: 1,justifyContent: 'center',}}>
          <Text style={styles.Text}>Your Results</Text>

          <View style={{flex:1,flexDirection: "column",margin: 20,}}> 

           <View style={{flexDirection: "column", width:'30%',height:30,marginRight:10,textAlign: 'center'}}>
          <Text style={styles.p2}>Questions Answered</Text></View>
          <View style={{flexDirection: "column",elevation: 8, justifyContent:'center',
      alignSelf:'center',textAlign: 'center', borderRadius:15,backgroundColor: "#4A2730", height:30,marginRight:10,}}>
          <Text style={styles.res}>Total question : {route.params.answers.length}</Text></View>
          <View style={{flexDirection: "column",elevation: 8, justifyContent:'center',
      alignSelf:'center',textAlign: 'center', borderRadius:15,backgroundColor: "#4a2730",height:30,marginRight:40,}}>
          <Text style={styles.res}>Correct : {trueCount}</Text></View>
         
          <View style={{flexDirection: "column",elevation: 8, justifyContent:'center',
      alignSelf:'center',textAlign: 'center', borderRadius:15,backgroundColor: "#4a2742", height:30,marginRight:10,}}>
 <Text style={styles.res}>{percentage} %</Text>
      </View> 
          </View>
       
        

<ScrollView style={{
          
            height: 350,
            borderRadius: 0.1,
            
            
          }}>
  <Text style={styles.Test}>Score Card</Text>

  <FlatList
            numColumns={5}
            data={route.params.answers}
            renderItem={({ item, i }) => (
              
            <View
                style={{
alignItems: "center",
                  justifyContent: "center",
                  margin: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft:"auto",
                  marginRight:"auto",
                  
                }}
              >
                
                <Text style={styles.p}>{item.question}</Text>
                {item.answer === true ? (
                  <Image source={require('../assets/true.png')}
                  style={styles.ansb}

                />

                 
                ) : (
                  <Image source={require('../assets/false.png')}
                  style={styles.ansb}

                />
                )}
                </View>
              )}
            />

</ScrollView>

            <View style={styles.imgview}>
                <Image
                    style={styles.icon}
                    source={require('../assets/cele.png')}
                />
            </View>

           
            <View style={{ flex: 1,marginTop: 20,marginButton: 20, }}>
               <Pressable 
                onPress={onPresshundler} 
                 style={styles.button} >

                <Text style={styles.buTest}>Go To Contents</Text>
                </Pressable>
            </View>
            </View>
            </ImageBackground>
        </ScrollView>



    )
}

const styles = StyleSheet.create({
    imgview: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: Dimensions.get('screen').width/1,
        height: Dimensions.get('screen').height/3,
        resizeMode: 'contain',
        alignSelf:'center',
    },
   Text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#BDCDD6',
      alignSelf:'center',
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 20,
      textTransform:'uppercase',
      textShadowColor:'#a2a2d0',
      textShadowRadius:3,
      letterSpacing:8

  },
  Test: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#BDCDD6',
    alignSelf:'center',
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    textDecorationLine:'underline'
},
  p: {
    fontSize: 20,
    color: '#a2a2d0',
    alignSelf:'center',
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: 'bold',
    
},
p2: {
  fontSize: 20,
  color: '#BDCDD6',
  alignSelf:'center',
  alignItems: "center",
  justifyContent: "space-between",
  fontWeight: 'bold',
  textShadowColor:'#a2a2d0',
      textShadowRadius:1,
  
},
res:{
         fontSize: 20,
    
    alignSelf:'center',
    alignItems: "center",
    justifyContent: "space-between",
},


    buTest: {
        fontSize: 23,
        color: '#fff',
        alignSelf:'center',
        
    },
    button:{
        backgroundColor:'#4a2742',
        elevation:8,
        marginRight:'6%',
        alignSelf: 'flex-end',
        width:200,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    },
    ansb: {
      fontSize: 20,
      color: '#41273b',
      margin: 7,
      borderColor: '#feb7ae',
      borderWidth: 1,
      textAlign: 'center',
      width: 40,
      height: 40,
      borderRadius: 40,
      padding: 10,
      borderRadius: 20,
      elevation: 8,
    },
    

})
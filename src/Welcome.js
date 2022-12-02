import { StyleSheet, Text, View, Pressable, Image,Dimensions } from 'react-native'
import React from 'react'

export default function Welcome ({navigation}) {
    const onPresshundler = () => {
        navigation.navigate('Contpg')
        
        }
     
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={styles.imgview}>
                <Image
                    style={styles.icon}
                    source={require('../assets/he.png')}
                />
            </View>


            <View style={{ flex: 1 }}>
               <Pressable 
                onPress={onPresshundler} 
                 style={styles.button} >

                <Text style={styles.Test}>Go To Contents</Text>
                </Pressable>
            </View>
        </View>



    )
}

const styles = StyleSheet.create({
    imgview: {
        flex: 4,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: Dimensions.get('screen').width/1.1,
        height: Dimensions.get('screen').height/2,
        resizeMode: 'contain',
        alignSelf:'center',
    },
    Test: {
        fontSize: 25,
        color: '#ffff',
        alignSelf:'center',
        
    },
    button:{
        backgroundColor:'#4a2742',
        elevation:8,
        marginRight:'6%',
        alignSelf: 'flex-end',
        width:200,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    }

})


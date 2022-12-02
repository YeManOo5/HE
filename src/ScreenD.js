import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const ScreenD = ({navigation}) => {
  return (
    <View style={styles.colorPicker}>
  <TouchableOpacity
    style={{
      backgroundColor: 'white',
      alignSelf: 'center',
      borderRadius: 40,
      borderColor: '#757083',
      borderWidth: 2,
    }}
    onPress={() => {}}>
    <View style={[styles.circle, { backgroundColor: '#090C08' }]}>
    </View>
  </TouchableOpacity>
</View>
  )
}

export default ScreenD

const styles = StyleSheet.create({
    colorPicker: {
        flex: 4,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        width: '88%',
        paddingLeft: 16,
        backgroundColor: 'red',
      },
    
      circle: {
        position: 'relative',
        height: 40,
        width: 40,
        borderRadius: 40,
        margin:5
      },
})
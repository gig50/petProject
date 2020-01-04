import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

const InputloginInfo = ({label,value,onChangeText,secureTextEntry}) => {
    return (
        <View style ={styles.containerStyle}>
        <Text style={styles.labelStyle}>{label}</Text>
        <TextInput
        secureTextEntry = {secureTextEntry}
        autoCorrect={false}
        placeholder = {label}
        style = {styles.inputStyle}
        value = {value}
        onChangeText = {onChangeText}
        />
        </View>
    );
}

const styles = StyleSheet.create({
inputStyle:{
width:100,
height:20,
color:"#000",
paddingRight:5,
paddingLeft:5,
fontSize:18,
lineHeight:23,
flex:2

},
labelStyle:{
width:100,
height:20,
fontSize:18,
paddingLeft:20,
flex:1
},
containerStyle:{
paddingTop:50,
paddingBottom:20,
height:40,
flex:1,
flexDirection:"row",
alignItems:'center',
}
});

export default InputloginInfo;


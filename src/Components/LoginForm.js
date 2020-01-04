import React, {useState} from 'react';
import {View,StyleSheet,Button,Text} from 'react-native';
import InputloginInfo from './InputloginInfo';
import Spinner from '../Components/Spinner';
import firebase from 'firebase'

const LoginFrom = () =>{
 const [email,setEmail] = useState("");
 const [pass,setPass] = useState("");
 const [error,setError] = useState("");
 const [loading,setLoading] = useState(false);

 console.log({loading}.loading)

const renderButton = () =>{
    if({loading}.loading == true){
        return <Spinner size="small"/>
    }
    return (
        <Button title="Submit" onPress={buttonPressed}></Button>
    )
}
const onLoginSuccess = () => {
setEmail("");
setPass("");
setLoading(false);
setError("");
}

const onLoginFailed = () => {
setError("Authentication Error");
setLoading(false);

}

 const buttonPressed =() =>{
     setError("");
     setLoading(true);
     firebase.auth().signInWithEmailAndPassword({email}.email,{pass}.pass)
     .then(()=>{
    {onLoginSuccess()}
     })
     .catch(()=>{
         firebase.auth().createUserWithEmailAndPassword({email}.email,{pass}.pass)
         .then(()=>{
            {onLoginSuccess()}
             })
         .catch((error)=>{
             console.log(error)
             {onLoginFailed()}
         })
     })
 }
    return (
        <View>
        <InputloginInfo
        secureTextEntry = {false}
        label="Email"
        onChangeText={(text) => {setEmail(text)}}
        value = {email} 
        />
        <InputloginInfo
        label = "Password"
        secureTextEntry={true}
        onChangeText={(pass) => {setPass(pass)}}
        value = {pass} 
        />
        <Text style={styles.errorTextStyle}>{error}</Text>
        {renderButton()}
        </View>
    );
}

const styles = StyleSheet.create({
errorTextStyle:{
height: 20,
alignSelf:"center",
color:"red"
}
});

export default LoginFrom;
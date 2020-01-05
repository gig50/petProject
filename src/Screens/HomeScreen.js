import React, {useState} from 'react';
import {StyleSheet,View, Button} from 'react-native';
import firebase from 'firebase';
import LoginForm from '../Components/LoginForm'
import Spinner from '../Components/Spinner';

const HomeScreen = ({navigation}) => {
    const [isLoggedIn,SetIsLoggedIn] = useState(false);
    if (!firebase.apps.length) {
    firebase.initializeApp({
    apiKey: "AIzaSyAY9aVQ7bq9tdxEGo-ok2jehCOCg8SgVlI",
    authDomain: "petproject-bd999.firebaseapp.com",
    databaseURL: "https://petproject-bd999.firebaseio.com",
    projectId: "petproject-bd999",
    storageBucket: "petproject-bd999.appspot.com",
    messagingSenderId: "1068631036323",
    appId: "1:1068631036323:web:18a89d542ccb55a54d0a16",
    measurementId: "G-7K1EKWV2D0"
    })
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            SetIsLoggedIn(true);
            {navigation.navigate('Test')}
        } else {
            SetIsLoggedIn(false);
        }
    });
}

    

    const renderContent = () => {
        switch(isLoggedIn){
            case true:
            case false:
            return <LoginForm/>
            default:
            return <Spinner size="large"/>
        }
    }
  return (
    <View>
    {renderContent()}
    </View>
 );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

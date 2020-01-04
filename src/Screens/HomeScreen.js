import React from 'react';
import { Text, StyleSheet,View} from 'react-native';
import firebase from 'firebase';
import LoginForm from '../Components/LoginForm'

const HomeScreen = () => {
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
    })}
  return (
    <View>
    <LoginForm/>
    </View>
 );
 

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

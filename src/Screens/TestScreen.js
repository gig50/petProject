import React from 'react';
import {StyleSheet,View, Text, Button} from 'react-native';
import firebase from 'firebase'

const TestScreen = () => {

    return (
        <View>
            <Text>Hello</Text>
            <Button title="Log out"
            onPress={()=>{firebase.auth().signOut()}}/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default TestScreen;
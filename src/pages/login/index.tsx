import React from 'react';
import { Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import * as ScreenOrientation from 'expo-screen-orientation';
import { NavigationProp, useNavigation } from '@react-navigation/native';


export default function Login() {

    function ok(){ }

    return (
        <View >
           
            
           

            <Button title="Entrar " onPress={ok} />
        </View>
    );
}
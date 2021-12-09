import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import HomePage from '../pages/home';
// import PostPage from '../pages/PostPage';
import LoginPage from '../pages/login';
import SignUpPage from '../pages/signUp';

export type TypeRoutes = {
    Post: undefined;
    SignUp: undefined;
    Login: undefined;
    Home: undefined;
}

const Stack = createNativeStackNavigator<TypeRoutes>();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} />
               <Stack.Screen name="SignUp" component={SignUpPage} />
                <Stack.Screen name="Home" component={HomePage} />
                {/* <Stack.Screen name="Post" component={PostPage} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
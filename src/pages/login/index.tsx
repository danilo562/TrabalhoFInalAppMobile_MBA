import React from 'react';
import { Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import * as ScreenOrientation from 'expo-screen-orientation';
import MyTextInput from '../../components/mytext';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TypeRoutes } from '../../routes';
import { snService } from '../../services/sn.service';
import storage from '../../repositories/storage';
import { LoginUser } from '../../entities';


export default function Login() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation<NavigationProp<TypeRoutes>>();


    async function login() {
        console.log("Entrou")
        const token = await snService.login(email, password);
        console.log(token)
        if (token) {
            const user = await snService.getUser(token);
            await storage.save({ token, user });
            navigation.navigate('Home');
        } else {
            alert('Login inválido!');
        }
       // navigation.navigate('Home');
    }

    async function cadastrar() {
        // const token = await snService.login(email, password);
        // if (token) {
        //     const user = await snService.getUser(token);
        //     await storage.save({ token, user });
        //     navigation.navigate('Home');
        // } else {
        //     alert('Login inválido!');
        // }
        navigation.navigate('SignUp');
    }

    return (
        <View >
           
           <MyTextInput title="E-mail:" value={email} onChangeText={setEmail} />
            
            <MyTextInput
                title="Senha:"
                value={password}
                secureTextEntry={true}
                onChangeText={setPassword}
            />
           

            <Button title="Entrar " onPress={login} />
            <Button title="Cadastre-se" onPress={cadastrar} />
        </View>
    );
}
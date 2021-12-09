import React from 'react';
import { Button, Text, View } from "react-native";
import MyTextInput from '../../components/mytext';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TypeRoutes } from '../../routes';

export default function SignUp() {

    const navigation = useNavigation<NavigationProp<TypeRoutes>>();

    React.useEffect(() => {
        navigation.setOptions({ title: 'Novo Usuário' });
    }, []);

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmar, setConfirmar] = React.useState('');

    async function save() {
        // const token = await snService.login(email, password);
        // if (token) {
        //     const user = await snService.getUser(token);
        //     await storage.save({ token, user });
        //     navigation.navigate('Home');
        // } else {
        //     alert('Login inválido!');
        // }
        navigation.navigate('Login');
    }

    return (
        <View >
            <Text >Informe os dados do Usuário</Text>

            <MyTextInput title="Nome:" value={name} onChangeText={setName} />
            
            <MyTextInput title="Email:" value={email} onChangeText={setEmail} />

            <MyTextInput title="Senha:" value={password} onChangeText={setPassword} secureTextEntry />
            <MyTextInput title="Confirmar senha:" value={confirmar} onChangeText={setConfirmar} secureTextEntry />

            <Button title="Cadastrar" onPress={save} />
        </View>
    );
}
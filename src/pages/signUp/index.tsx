import React from 'react';
import { Button, Text, View } from "react-native";
import MyTextInput from '../../components/mytext';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TypeRoutes } from '../../routes';
import { User } from '../../entities';
import { snService } from '../../services/sn.service';



export default function SignUp() {

    const navigation = useNavigation<NavigationProp<TypeRoutes>>();

    React.useEffect(() => {
        navigation.setOptions({ title: 'Novo Usuário' });
    }, []);

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [userPassword, setPassword] = React.useState('');
    const [confirmar, setConfirmar] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [age, setAge] = React.useState('');


    async function save() {
        if (!name || !email || !userPassword || !address || !age) {
            alert('Todos os campos são obrigatórios!');
            return;
        }
        if (userPassword !== confirmar) {
            alert('A senha não confere!');
            return;
        }
        
        const user: User = {
            
            address,
            age:parseInt( age),
            email: email.toLowerCase(),
            name, userPassword
        };
        console.log("Usuario usado antes do metodo")
        console.log(user)
        const savedUser = await snService.createUser(user);
        try {
            if (savedUser !==null ) {
                navigation.goBack();
            } else {
                alert('Usuário já existente!');
                // console.log(user)
                // console.log("Usuario usado")
                 console.log(savedUser)
                // console.log("metodo criado")
                // console.log(snService.createUser(user))
            }
        } catch (error) {
            console.error('Erro ao criar um novo usuário: ', error);
            alert('Ocorreu um erro não esperado!');
        }
    }

    return (
        <View >
            <Text >Informe os dados do Usuário</Text>

            <MyTextInput title="Nome:" value={name} onChangeText={setName} />
            
            <MyTextInput title="Endereço:" value={address} onChangeText={setAddress} />
            <MyTextInput title="Idade:" value={age} onChangeText={setAge} />
            <MyTextInput title="Email:" value={email} onChangeText={setEmail} />

            <MyTextInput title="Senha:" value={userPassword} onChangeText={setPassword} secureTextEntry />
            <MyTextInput title="Confirmar senha:" value={confirmar} onChangeText={setConfirmar} secureTextEntry />

            <Button title="Cadastrar" onPress={save} />
        </View>
    );
}
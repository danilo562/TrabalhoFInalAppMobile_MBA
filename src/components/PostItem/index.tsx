import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Product } from '../../entities';



type Props = { post: Product }

export default function PostItem({ post }: Props) {

    

   

    return (
        <View style={styles.container}>
            <Text >ID: {post.id}</Text>
            <View >
                <Text >Produto: {post.name}</Text>
                <Text >Valor: {post.price}</Text>
                <Text >Quantidade: {post.amount}</Text>
                 <View style={styles.container}>
                  <Text >ID: {post.factory.id}</Text>
                  <Text >Fabricate: {post.factory.name}</Text>
                 </View>

            </View>
        </View>
    );
}
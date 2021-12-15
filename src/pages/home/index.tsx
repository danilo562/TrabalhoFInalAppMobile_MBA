import React from 'react';
import { Dimensions, Text, TextInput, TextInputProps, View,FlatList } from 'react-native';
import { TypeRoutes } from '../../routes';
import { snService } from '../../services/sn.service';
import {  Product } from '../../entities';
import PostItem from '../../components/PostItem';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';

export default function Home() {

    const [product, setProduct] = React.useState<Product[]>();
    const [ refreshing, setRefreshing ] = React.useState(false);

    React.useEffect(() => {

        carregar();

    }, []);

    function carregar(){
        console.log("GetProduct funçao11");
        setRefreshing(true);
     snService.getProduct().then(prod =>{
         if(prod)
         setProduct(prod);
         console.log("GetProduct funçao");
         console.log(prod);
     });

    }
    
   
    return (
        
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* <Text >{product}</Text> */}

            <FlatList
                data={product}
               //onRefresh={carregar}
               refreshing={refreshing}
               renderItem={({ item }) => <PostItem post={item} />}
               keyExtractor={item => item.id ? item.id.toString() : ''}
            />
        </View>
    );

}
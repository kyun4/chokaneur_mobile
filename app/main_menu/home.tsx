import React,{} from 'react';
import {Text,View,Image} from 'react-native';
import {useRouter} from 'expo-router';

export default function Home(){
    const router = useRouter();

    const onLogout = () => {
        router.navigate("/")
    }
    return (<View>Home</View>);
}
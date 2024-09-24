import React,{useState} from 'react';
import {Text,View,Image, StyleSheet,TouchableOpacity,ScrollView,FlatList,Dimensions} from 'react-native';
import {useRouter} from 'expo-router';



export default function Home(){
    const router = useRouter();

    const onLogout = () => {
        router.navigate("/")
    }

    const onProfile = () => {
        router.navigate("/main_menu/profile")
    }

    const onViewProduct = (imagePath:any) => {
      router.navigate("/main_menu/product_view");
    }

    const fashion_image: string[] = [
        require(`@/assets/fashion_images/1.jpg`),
        require(`@/assets/fashion_images/2.jpg`),
        require(`@/assets/fashion_images/3.jpg`),
        require(`@/assets/fashion_images/4.jpg`),
        require(`@/assets/fashion_images/5.jpg`),
        require(`@/assets/fashion_images/6.jpg`),
        require(`@/assets/fashion_images/7.jpg`),
        require(`@/assets/fashion_images/8.jpg`),
        require(`@/assets/fashion_images/9.jpg`),
        require(`@/assets/fashion_images/10.jpg`),
        require(`@/assets/fashion_images/11.jpg`),
        require(`@/assets/fashion_images/12.jpg`),
        require(`@/assets/fashion_images/13.jpg`),
        require(`@/assets/fashion_images/14.jpg`),
        require(`@/assets/fashion_images/15.jpg`),
        require(`@/assets/fashion_images/16.jpg`),
        require(`@/assets/fashion_images/17.jpg`),
        require(`@/assets/fashion_images/18.jpg`),
        require(`@/assets/fashion_images/19.jpg`),
        require(`@/assets/fashion_images/20.jpg`),
        require(`@/assets/fashion_images/21.jpg`),
        require(`@/assets/fashion_images/22.jpg`),
        require(`@/assets/fashion_images/23.jpg`),
        require(`@/assets/fashion_images/24.jpg`),
    ];

  
   
    


    const style = StyleSheet.create({
        header_nav: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 55,
            marginBottom:10,
            marginHorizontal: 15
        },
        header_text: { fontWeight: "bold" },
        logo: {height: 35, width: 35},
        account_icon: {height:35, width: 35}
    })
 

    return (<View>
        
        <View style = {style.header_nav}>

            <TouchableOpacity>
                <Image style = {style.logo} source = {require('@/assets/images/chokaneur_logo.png')}></Image>
            </TouchableOpacity>

            <Text style = {style.header_text}>Shop All Day</Text>

            <TouchableOpacity onPress={onProfile}>
                <Image style = {style.account_icon} source = {require('@/assets/images/blankprofilechokaneur1.png')}></Image>
            </TouchableOpacity>

        </View>

       

        <FlatList style = {{ width: "100%", marginBottom: 100 }} data = {fashion_image} numColumns={2} showsVerticalScrollIndicator = {false} renderItem={({item})=>{
            return(<View>
              
                <TouchableOpacity onPress = {onViewProduct}>
                    <Image style = {{ width: Dimensions.get('window').width/2, height: 325 }} source = {item}></Image>
                </TouchableOpacity>

            </View>);
        }}></FlatList>

    

        </View>);
}
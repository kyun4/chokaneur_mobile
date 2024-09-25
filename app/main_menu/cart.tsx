import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet,Dimensions} from 'react-native';
import React,{useState} from 'react';
import {useRouter} from 'expo-router';

export default function Cart(){

    const router = useRouter();

    const onProductView = () => {
        router.navigate("/main_menu/product_view")
    }

    
    const onProfile = () => {
        router.navigate("/main_menu/profile")
    }

    const onHome = () => {
        router.navigate("/main_menu/home")
    }

    const onCheckout = () => {
        router.navigate("/main_menu/checkout")
    }


    const [data_payment_method, setDataPaymentMethod] = useState([
        require('@/assets/payment_methods/gcash1.png'),
        require('@/assets/payment_methods/maya1.png'),
        require('@/assets/payment_methods/seabank1.png'),
        require('@/assets/payment_methods/cimb1.png'),
        require('@/assets/payment_methods/gotyme1.png'),
        require('@/assets/payment_methods/kanorbank1.png') 
    ]);

    const style = StyleSheet.create({

        header_nav: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 55,           
            marginHorizontal: 15,
            marginBottom: 20
        },
        header_text: { fontWeight: "bold" },
        logo: {height: 35, width: 35},
        cart_icon: {height:35, width: 35},
        body_style: {paddingHorizontal: 10, height: Dimensions.get('window').height-200},
        cart_item_box: { borderRadius: 25, backgroundColor:"#FFF" },
     
        product_details_box : { flexDirection:"row", alignItems:"center", backgroundColor:"#FFF", padding: 10, marginBottom: 5 },
        product_details: {marginLeft: 20},
        product_name: { fontWeight: "bold", fontSize: 16 },
        product_small_description: { fontSize: 10 },
        product_price: { fontWeight:"bold",fontSize: 14, marginTop: 10 },
        product_cart_item_image: {height: 80, width: 65, borderRadius: 4},
        checkout_button: {backgroundColor:"#0D3E50", borderRadius:10, width: "100%", height: 55, marginTop: 4}
    });

    return(
        <View>

            <View style = {style.header_nav}>

                <TouchableOpacity onPress = {onHome}>
                    <Image style = {style.logo} source = {require('@/assets/images/chokaneur_logo.png')}></Image>
                </TouchableOpacity>


                <Text style = {style.header_text}>Your Cart</Text>

                <TouchableOpacity onPress={onProfile}>
                    <Image style = {style.cart_icon} source = {require('@/assets/images/blankprofilechokaneur1.png')}></Image>
                </TouchableOpacity>

            </View>

            <View style = { style.body_style }>

              <FlatList  showsVerticalScrollIndicator = {false} data = {["IU Dress 1","Golden Hour Attire","HEREH","Blueming","World Tour 2028","IU x UI Summit"]} renderItem = {({item})=>{
                return(
                 
                        <View style = {style.product_details_box}>
                            
                           
                              
                                <View style = { style.cart_item_box }>
                                    <Image style = { style.product_cart_item_image } source = {require('@/assets/fashion_images/12.jpg')}></Image>
                                </View>

                                <View style=  {style.product_details}>
                                    <Text style = {style.product_name}>{item}</Text>
                                    <Text style = {style.product_small_description}>FIT FOR SMALL GIRLS</Text>
                                    <Text style = {style.product_price}>1 x 7500 = PHP 7,500.00</Text>
                                </View>

                                
                                <View style=  {style.product_details}>
                                   
                                  
                                    
                                </View>

                            

                        </View>

                   
                );
              }}></FlatList>

            </View>

            <View style = {{ flexDirection:"row", alignItems:"center", justifyContent:"space-between", backgroundColor:"#FFF" }}>
                
                <View style = {{ paddingLeft: 23, paddingTop: 20, paddingBottom:20 }}>
                    <Text style = {{ fontWeight:"500" }}>8 Items on Cart</Text>
                </View>

                <View style = {{ paddingRight: 25, paddingTop: 10, paddingBottom:10 }}>
                    <Text style = {{ fontWeight:"500" }}> Checkout All</Text>
                </View>

            </View>



          
          

                
            <View style = {{ paddingHorizontal:15 }}>
                <View>
                    <TouchableOpacity onPress={onCheckout}>
                        <View style = { style.checkout_button}><Text style = {{ color:"#FFF", textAlign:"center", margin: 15, fontWeight:"500", fontSize:16 }}>CHECKOUT SELECTED ITEMS</Text></View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );

}
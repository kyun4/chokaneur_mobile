import {Image,ImageBackground,Text,View, StyleSheet, Dimensions,TouchableOpacity, FlatList} from 'react-native';
import {useRouter} from 'expo-router';
import React, {useState} from 'react';

export default function CheckoutPage(){

    const router = useRouter();

    const onBackCheckout = () => {
        router.navigate("/main_menu/checkout")
    }

    const y_dimension = Dimensions.get('window').height;
    const x_dimension = Dimensions.get('window').width;

    const style = StyleSheet.create({
        checkout_list_item_box: {           
            shadowColor: "#0D3E50",
            shadowOffset: {height: -4, width: 10},
            shadowOpacity: 0.1,
            shadowRadius: 25,
            elevation: 10,
            width: x_dimension-20,
            height: 205
        },
        checkout_list_item_box_products: {           
            shadowColor: "#0D3E50",
            shadowOffset: {height: -4, width: 10},
            shadowOpacity: 0.1,
            shadowRadius: 25,
            elevation: 10,
            width: x_dimension-20,
            height: 280,
            marginTop: 10
        },
        check_list_item_content: {
            backgroundColor: "#FFF",
            borderRadius: 10,
            width: "100%",
            height: "100%",
            paddingHorizontal: 10,
            paddingVertical: 20
        },
        section_header_line: { fontSize: 14, fontWeight:"bold",borderBottomWidth: 1, marginLeft: 10, marginBottom: 8, paddingBottom: 10, borderStyle: "dashed", borderBottomColor: "#E7E1E1" },
        section_header_line_secondary: { fontSize: 14, fontWeight:"bold",borderBottomWidth: 1, marginRight: 10, marginBottom: 8, paddingBottom: 10, borderStyle: "dashed", borderBottomColor: "#E7E1E1" },
        left_icon: { marginLeft: -10, height: 55, width: 55 },
        right_icon: { marginRight: -10, height: 40, width: 40 },
        header_style: { marginTop: 35, marginRight: 20, flexDirection:"row", justifyContent:"space-between", alignItems:"center" },
        header_sub_style: { flexDirection:"column" },
        bold_default: {fontSize:14, fontWeight:"bold"},
        plain_small: {fontSize: 10, textAlign:"center"},
        profile_picture_customer: { height: 50, width: 50 },
        profile_name_info:  {  marginLeft: 15, width: "100%" },
        profile_name: {  fontWeight:"bold" },
        profile_sub_name_info: {fontWeight:"300", fontSize: 10},
        profile_customer: { flexDirection:"row", alignItems:"center"},
        button_change_info: { borderColor: "#0D3E50", marginLeft: x_dimension - 300, borderWidth: 1, height: 35, borderRadius: 20, paddingVertical:8, marginTop: 16,  width: x_dimension-110 },
        button_text_change_info: {textAlign:"center", fontSize: 10},

        cart_item_box: { borderRadius: 25, backgroundColor:"#FFF" },
        product_details_box : { flexDirection:"row", alignItems:"center", backgroundColor:"#FFF", padding: 10 },
        product_details: {marginLeft: 20},
        product_name: { fontWeight:"bold",fontSize: 14 },
        product_small_description: { fontSize: 10 },
        product_price: { fontSize: 12, fontWeight:"bold", marginLeft: x_dimension-330 },
        product_cart_item_image: {height: 65, width: 45, borderRadius: 4},
        checkout_button: {backgroundColor:"#0D3E50", borderRadius:10, width: "100%", height: 55, marginTop: 4}
    })

    return(<View style = {{ flex:1, paddingHorizontal: 10 }}>

        <TouchableOpacity onPress = {onBackCheckout} style = {style.header_style}>
            <Image style = { style.left_icon } source = {require('@/assets/images/arrowleft1.png')}></Image>
            <View style = { style.header_sub_style }>
                <Text style = { style.bold_default }>Checkout Item</Text>
                <Text style = { style.plain_small}>Details</Text>
            </View>
            <Image style = { style.right_icon } source = {require('@/assets/images/chokaneur_logo.png')}></Image>
        </TouchableOpacity>

       
            <View style = { style.checkout_list_item_box }>
                <View style = {style.check_list_item_content}>
                    <View style = {style.profile_customer }>
                        <Image style = {style.profile_picture_customer} source = {require('@/assets/images/blankprofilechokaneur1.png')}></Image>

                        <View style = {style.profile_name_info}>
                            <Text style = {style.profile_name}>Tiyo Kanor</Text>
                            <Text style = {style.profile_sub_name_info}>CK Pay ID: 6969696932323232</Text>
                        </View>                    
                    </View>

                    <View style = {{ flexDirection:"row", marginLeft: x_dimension - 295 }}>

                        <Text style = {{ fontWeight:"bold",fontSize: 10, width: 35 }}>Phone: </Text>
                        <Text style = {{ fontSize: 10, color:"#494547" }}>(+63) 991 357 1853</Text>                   

                    </View>

                    <View style = {{ flexDirection:"row", marginLeft: x_dimension - 295 }}>

                        <Text style = {{ fontWeight:"bold",fontSize: 10, width: 35 }}>Email: </Text>
                        <Text style = {{ fontSize: 10,color:"#494547" }}>itsftac@gmail.com</Text>                   

                    </View>

                    
                    <View style = {{ flexDirection:"row", marginLeft: x_dimension - 295, marginTop: 10 }}>

                        <Text style = {{ fontWeight:"bold",fontSize: 10, width: 65 }}>Address 1: </Text>
                        <Text style = {{ fontSize: 10,color:"#494547" }}>91 TK Street, BGC, Taguig City</Text>                   

                    </View>

                    <View style = {{ flexDirection:"row", marginLeft: x_dimension - 295 }}>

                        <Text style = {{ fontWeight:"bold",fontSize: 10, width: 65 }}>Address 2: </Text>
                        <Text style = {{ fontSize: 10,color:"#494547" }}>32nd Street, W Center, BGC, Taguig City</Text>                   

                    </View>
                 
                    <TouchableOpacity style = {style. button_change_info}>
                        <Text style = {style.button_text_change_info}>Change Info</Text>
                    </TouchableOpacity>
                        
                    
                </View>
            </View>

            <View style = {style.checkout_list_item_box_products}>
                <View style = {style.check_list_item_content}>

                    <View style = {{ flexDirection:"row", justifyContent:"space-between" }}>
                        <Text style = {style.section_header_line}>Product(s) to Checkout</Text>
                        <Text style = {style.section_header_line_secondary}>5 Item(s)</Text>
                    </View>
                    

                    <View>

                    <FlatList style = {{ height: 210 }}  showsVerticalScrollIndicator = {false} data = {["IU Dress 1","Golden Hour Attire","HEREH","Blueming","World Tour 2028","IU x UI Summit"]} renderItem = {({item})=>{
                return(
                 
                        <View style = {style.product_details_box}>
                            
                           
                           
                                <View style = { style.cart_item_box }>
                                    <Image style = { style.product_cart_item_image } source = {require('@/assets/fashion_images/12.jpg')}></Image>
                                </View>

                                <View style=  {style.product_details}>

                                    <Text style = {style.product_name}>{item}</Text>
                                    <Text style = {style.product_small_description}>Product ID: 20391003010903</Text>

                                

                                    <View style = {{ flexDirection:"row", marginTop: 4, justifyContent:"space-between" }}>
                                    
                                        <View style = {{ flexDirection:"row" }}>
                                            <Text style = {{ fontWeight:"bold", fontSize: 10 }}>Color: </Text>
                                            <Text style = {{ fontSize: 10 }}>Beige </Text>
                                        </View>

                                        <View style = {{ flexDirection:"row" }}>
                                            <Text style = {{ fontWeight:"bold", fontSize: 10 }}>Size: </Text>
                                            <Text style = {{ fontSize: 10 }}>S </Text>
                                        </View>
                                    
                                    </View>
                                                                    
                                </View>

                                <View>
                                    <Text style = { style.product_price }>PHP 7,500.00 </Text>
                                </View>

                                
                             

                            

                        </View>

                   
                );
              }}></FlatList>

                    </View>               

                </View>

                <View style = {{flexDirection:"column", backgroundColor:"#FFF", borderRadius: 10, height: 75, marginTop: 10, marginBottom: 10, padding: 10 }}>
                    <View style = {{ flexDirection:"row", paddingHorizontal: 12, marginTop: 8, justifyContent:"flex-end"}}>

                        <Text style = {{ fontWeight:"bold", fontSize: 16 }}>TOTAL</Text>
                        <Text style = {{ fontSize: 16 }}> PHP 37,500.00</Text>

                    </View>
                    <View style = {{ flexDirection:"row", paddingHorizontal: 12, justifyContent:"flex-end" }}>

                        <Text style = {{ fontWeight:"bold", fontSize: 10 }}>Payment Method: </Text>
                        <Text style = {{ fontSize: 10 }}>Kanor Bank (E-Wallet)</Text>
                                    
                    </View>
                </View>

                <View>
                    <View>
                        <TouchableOpacity>
                            <View style = { style.checkout_button}><Text style = {{ color:"#FFF", textAlign:"center", margin: 15, fontWeight:"500", fontSize:16 }}>PAY NOW</Text></View>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
       

    </View>); 
}
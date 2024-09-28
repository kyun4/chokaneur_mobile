import React,{useState} from 'react';
import {Text,Image,View,StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {useRouter} from 'expo-router';

export default function Profile(){

    const router = useRouter();

    const onLogout = () => {
        router.navigate("/")
    }

    const onHome = () => {
        router.navigate("/main_menu/home")
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
        profile_wrapper: {
            backgroundColor: "#FFF",
            paddingTop: 50,
            paddingHorizontal: 15
        },
        profile_header: {
            flexDirection:"row",
          
        },
        image_style: {
            height: 95,
            width: 95
        },
        address_line: { fontSize: 12, fontWeight:"bold",borderBottomWidth: 1, marginLeft: 10, marginTop: 20, marginBottom: 8, paddingBottom: 8, borderStyle: "dashed", borderBottomColor: "#E7E1E1" },
        card_style: {
            shadowColor: "#000000",
            shadowOffset: {height:-4, width: 10},
            shadowRadius: 30,
            shadowOpacity: 0.05,
            elevation: 10,
            height: 150,
            width: "100%",
            backgroundColor:"#FFF",
            marginTop: 10,
            borderRadius: 10,
            padding: 2           
        },
        buttonDefaultSecondary: {
            borderRadius: 35,
            height:35,
            width:"100%",
            backgroundColor:"#0D3E50"
        },
        buttonTextPrimary: {color:"#FFF",textAlign:"center",padding:5, fontSize:16},
        header_nav: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",          
            marginBottom:20,
            marginHorizontal: 10
        },
        header_text_bold: { fontWeight:"bold" },
        header_text: { fontWeight:"300" },
        logo: {height: 35, width: 35},
        account_icon: {height:35, width: 35}
    });

    return(
        <View style = {style.profile_wrapper}>

        <View style = {style.header_nav}>

            <TouchableOpacity onPress = {onHome}>
                <Image style = {style.logo} source = {require('@/assets/images/chokaneur_logo.png')}></Image>
            </TouchableOpacity>            

           
            <Text style = {style.header_text_bold}>Shop All Day</Text>
         
        </View>

        <View style = {style.profile_header}>
            <Image style = {style.image_style} source = {require('@/assets/images/blankprofilechokaneur1.png')}></Image>   
            <View style = {{ flexDirection:"column", marginLeft: 20, justifyContent:"center" }}>
                <Text style = {{ fontWeight: "bold", fontSize:18 }}>Tiyo Kanor</Text>
                <Text style = {{ fontSize: 12 }}>CEO/Founder of Cho Kaneur</Text>
                <Text style = {{ fontSize: 12 }}>Account ID: 3269000000000</Text>
            </View>
        </View>

        <View style = { style.card_style}>

            
            <Text style = {style.address_line}>Address Line</Text>
            
            <View style = {{ flexDirection:"row", marginTop: 10 }}>
                <Text style = {{ fontSize: 10, marginLeft: 10, fontWeight:"700" }}>Address 1:</Text>
                <Text style = {{ fontSize: 10, marginLeft: 10 }}> 91 VP Cruz Street, Lower Bicutan, Taguig City</Text>
            </View>

            <View style = {{ flexDirection:"row", marginTop: 5 }}>
                <Text style = {{ fontSize: 10, marginLeft: 10, fontWeight:"700"  }}>Address 2:</Text>
                <Text style = {{ fontSize: 10, marginLeft: 10 }}> 32nd Street, W Building, Bonifacio Global City, Taguig City</Text>
            </View>
           
            <View style = {{margin: 10, marginTop:17}}><Text style = {{ fontSize:12 }}>Edit Details</Text></View>

        </View>

        <View style = { style.card_style}>

                    
            <Text style = {{ fontSize: 12, fontWeight:"bold",borderBottomWidth: 1, marginLeft: 10, marginTop: 20, marginBottom: 8, paddingBottom: 8, borderStyle: "dashed", borderBottomColor: "#E7E1E1" }}>Contact Information</Text>

            <View style = {{ flexDirection:"row", marginTop: 10 }}>
                <Text style = {{ fontSize: 10, marginLeft: 10, fontWeight:"700" }}>Phone:</Text>
                <Text style = {{ fontSize: 10, marginLeft: 10 }}> +63 991 357 1853</Text>
                <Text style = {{ fontSize: 10, marginLeft: 10, color: "#0D3350" }}> Change</Text>
            </View>

            <View style = {{ flexDirection:"row", marginTop: 5 }}>
                <Text style = {{ fontSize: 10, marginLeft: 10, fontWeight:"700"  }}>E-mail Address:</Text>
                <Text style = {{ fontSize: 10, marginLeft: 10 }}> itsftac@gmail.com</Text>
                <Text style = {{ fontSize: 10, marginLeft: 10, color: "#0D3350" }}> Change</Text>
            </View>

            <View style = {{margin: 10, marginTop:17}}><Text style = {{ fontSize:12 }}>[ + ]  Add New Contact</Text></View>


        </View>
        

        <View style = { style.card_style}>

        <View style = {{ flexDirection:"row", margin: 10, marginBottom:0, justifyContent:"center", alignItems:"center" }}>

            <Text style = {{ fontWeight:"bold", fontSize: 30, color: "#0D3E50" }}>CK</Text>
            <Text style = {{ fontWeight:"300", fontSize: 30 }}>pay</Text>

            <View style = {{ flexDirection:"column", marginLeft:40}}>
                <Text style = {{ fontWeight:"400", fontSize: 10, marginLeft: 5 }}>Balance </Text>
                <Text style = {{ fontWeight:"700", fontSize: 15, marginLeft: 5 }}>PHP 2069.32 </Text>
                <Text style = {{ fontWeight:"300", fontSize: 12, marginLeft: 5 }}>CASH-IN </Text>
            </View>           

        </View>         

        <View style = {{ margin: 15 }}>
            <Text style = {{ fontSize:7.5, textAlign: "center" }}>CHOOSE DEFAULT PAYMENT METHOD</Text>
            <FlatList style = {{ marginTop: 10 }} data = {data_payment_method} showsHorizontalScrollIndicator={false} horizontal renderItem={({item}) => {
                return(<View><Image style = {{ height: 30, width: 75 }} source = {item}></Image></View>);
            }}></FlatList>
        </View>         
         


        </View>

        <View style = {{ marginVertical: 25 }}>
            <TouchableOpacity onPress = {onLogout} style = {style.buttonDefaultSecondary}><Text style = {style.buttonTextPrimary}>Logout</Text></TouchableOpacity>
        </View>

        </View>
    );

}
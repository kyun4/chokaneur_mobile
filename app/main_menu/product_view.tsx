import {Text,Image,View,StyleSheet,TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {useRouter} from 'expo-router';

export default function ProductView(){


    const router = useRouter();
    

    const onProfile = () => {
        router.navigate("/main_menu/profile")
    }

    const onHome = () => {
        router.navigate("/main_menu/home")
    }

    const fashion_image: string[] = [
        
        require(`@/assets/fashion_images/2.jpg`),
        require(`@/assets/fashion_images/3.jpg`),
        require(`@/assets/fashion_images/4.jpg`),
        require(`@/assets/fashion_images/5.jpg`),
        require(`@/assets/fashion_images/6.jpg`),
        require(`@/assets/fashion_images/7.jpg`),
        require(`@/assets/fashion_images/8.jpg`),
        
        require(`@/assets/fashion_images/10.jpg`),
        require(`@/assets/fashion_images/11.jpg`),
        require(`@/assets/fashion_images/12.jpg`),     
        require(`@/assets/fashion_images/19.jpg`),
   
        require(`@/assets/fashion_images/21.jpg`),
      
        require(`@/assets/fashion_images/23.jpg`),
        require(`@/assets/fashion_images/24.jpg`),
    ];

    const available_colors:string[] =  [
        "#FD8A02",
        "#0D3E50",
        "#E7E1E1",
        "#475D0B",
      
    ]

  
   
    

    const style = StyleSheet.create({
        header_nav: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 55,           
            marginHorizontal: 15
        },
        header_text: { fontWeight: "bold" },
        logo: {height: 35, width: 35},
        account_icon: {height:35, width: 35}
    })
 

    return(
    <View style = {{ flex: 1 }}>

                    
        <View style = {style.header_nav}>

            <TouchableOpacity onPress = {onHome}>
                <Image style = {style.logo} source = {require('@/assets/images/chokaneur_logo.png')}></Image>
            </TouchableOpacity>


            <Text style = {style.header_text}>Shop All Day</Text>

            <TouchableOpacity onPress={onProfile}>
                <Image style = {style.account_icon} source = {require('@/assets/images/blankprofilechokaneur1.png')}></Image>
            </TouchableOpacity>

        </View>

        <ScrollView  style = {{marginTop: 25}} showsHorizontalScrollIndicator={false}>

            <Image source = {require('@/assets/fashion_images/2.jpg')}></Image>
        
            <View style = {{backgroundColor:"#FFF", height: 1000, padding: 20}}>

                <View style = {{ flexDirection:"row", justifyContent:"space-between", alignItems:"center" }}>


                    <View>
                        <Text style = {{ fontWeight:"bold",fontSize: 24 }}>IU Dress 1</Text>
                        <Text style = {{ fontWeight:"300",fontSize: 14 }}>FIT FOR SMALL GIRLS</Text>
                    </View>

                    <View style = {{ flexDirection:"column", alignItems:"flex-end" }}>
                        <Text style = {{ fontWeight: "700" }}>PHP 7500.00</Text>
                        <Text style = {{ fontWeight: "300", fontSize: 10 }}>Less 50%</Text>
                    </View>           

                </View>

                <View style = {{ marginTop: 30 }}>
                    <Text style = {{ fontSize: 12 }}>Available Colors</Text>
                    <FlatList style = {{ marginTop: 10}} horizontal data = {available_colors} renderItem = {({item})=>{
                        return(<View style = {{ backgroundColor: item, height: 20, width: 20, borderRadius: 20, marginRight: 7, marginTop:5 }}></View>)
                    }}></FlatList>
                </View>

                <View>
                    <View style = {{ marginTop: 40, backgroundColor:"#0D3E50", borderRadius:20 }}>
                        <Text style = {{ fontSize: 16, color:"#FFF", padding: 10, textAlign:"center" }}>CHECKOUT</Text>
                    </View>      
                    <View style = {{ borderWidth: 1, marginTop: 5, borderColor:"#0D3E50", borderRadius:20 }}>
                        <Text style = {{ fontSize: 16, color:"#0D3E50", padding: 10, textAlign:"center" }}>Add to Cart</Text>
                    </View>    
                </View>

            
                <View style = {{ marginTop: 40 }}>
                    <Text style = {{fontWeight:"300", marginBottom: 20, fontSize: 14}}>Related Items for dresses</Text>
                    <FlatList style = {{  width: "100%"}} horizontal data = {fashion_image} renderItem = {({item})=>{
                        return(<View><Image style = {{height: 200, width: 110, marginRight: 10, borderRadius: 10}} source = {item}></Image></View>)
                    }}></FlatList>
                </View>
                
                <TouchableOpacity onPress={onHome}>
                    <View style = {{ marginTop: 25, flexDirection:"row", justifyContent:"center", alignItems:"center" }}>
                        <Image style = {{ height: 40, width: 40 }} source = {require('@/assets/images/arrowleft1.png')}></Image>
                        <Text style = {{ marginBottom: 3, marginLeft: 5 }}>Back to Products</Text>
                    </View>
                </TouchableOpacity>
            
            </View>
       
        </ScrollView>

    </View>
    );
}
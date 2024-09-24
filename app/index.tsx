import { Text, View , TextInput, StyleSheet, TouchableOpacity} from "react-native";
import {useRouter} from 'expo-router';

export default function Index() {

  const router = useRouter();

  const onLogin = () => {
    router.navigate("/main_menu/home")
  }

  const style = StyleSheet.create({

    cklogo: {
      fontSize:95,
      textAlign: "center",
      color: "#0D3E50"
    },

    cklogotitle: {
      fontSize:15,
      textAlign: "center",
      color: "#0D3E50",
      marginTop: 0
    },

    cklogotagline: {
      fontSize:8,
      textAlign: "center",
      color: "#494547",
      marginTop: 10
    },

    cklogoview: {
      marginVertical: 35
    },

    textInputDefault: {
      borderRadius: 10,
      paddingHorizontal: 20,
      backgroundColor:"#EEE",
      paddingVertical: 15,    
      marginVertical: 2.5
    },

    buttonLoginDefault: {
    
     
      width: "100%",
      backgroundColor: "#0D3E50",
      padding: 15,
      marginTop: 25,
      borderRadius: 10
    
      
    },

    textLoginButtonDefault: {
      color: "#FFF",
      textAlign: "center",
     
    },


    loginWrapperDefault: {
      paddingHorizontal: 20
    }

    

  });


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",       
        backgroundColor: "#FFF"
      }}
    >
      <View style = {style.loginWrapperDefault}>

        <View style = {style.cklogoview}>
          <Text style = {style.cklogo}>cK</Text>
          <Text style = {style.cklogotitle}>Cho Kaneur</Text>
          <Text style = {style.cklogotagline}>CHOOSE ME TO FIT IN YOURS</Text>
        </View>

        <TextInput placeholder = "Email/Username"  style = {style.textInputDefault}></TextInput>
        <TextInput placeholder = "Password" style = {style.textInputDefault}></TextInput>

        <TouchableOpacity style = {style.buttonLoginDefault} onPress={onLogin}>
          <Text style = {style.textLoginButtonDefault}>Login</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

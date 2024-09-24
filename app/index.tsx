import { Text, View , TextInput, StyleSheet, TouchableOpacity} from "react-native";
import {useRouter} from 'expo-router';

export default function Index() {

  const router = useRouter();

  const onLogin = () => {
    router.navigate("/")
  }

  const style = StyleSheet.create({

    textInputDefault: {
      borderRadius: 10,
      paddingHorizontal: 20,
      backgroundColor:"#EEE",
      paddingVertical: 15,
      marginHorizontal: 20,
      marginVertical: 2.5,
    },

    buttonLoginDefault: {
    
     
      width: "100%",
      backgroundColor: "#0D3E50",
      padding: 15,
      marginTop: 25,
      marginHorizontal: 20
      
    },

    textLoginButtonDefault: {
      color: "#FFF",
      textAlign: "center"
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
      <View>
        <TextInput placeholder = "Email/Username"  style = {style.textInputDefault}></TextInput>
        <TextInput placeholder = "Password" style = {style.textInputDefault}></TextInput>

        <TouchableOpacity style = {style.buttonLoginDefault} onPress={onLogin}>
          <Text style = {style.textLoginButtonDefault}>Login</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

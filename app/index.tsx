import { Text, View , TextInput, StyleSheet, Image, TouchableOpacity, Dimensions, ImageBackground} from "react-native";
import {useRouter} from 'expo-router';
import {Icon, Input} from '@rneui/themed';
import React,{useEffect, useState} from "react";
import {getAuth, createUserWithEmailAndPassword  ,signInWithEmailAndPassword, onAuthStateChanged, signOut} from '@firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDj1tPd7Cl6ONnCNItUO0sNpLAOTGhi1KQ",
  authDomain: "chokaneur-6932b.firebaseapp.com",
  projectId: "chokaneur-6932b",
  storageBucket: "chokaneur-6932b.appspot.com",
  messagingSenderId: "593659028156",
  appId: "1:593659028156:web:9de3b013b620f0c92ae6b9"
};

const app = initializeApp(firebaseConfig) == null ? alert('No firebase') : initializeApp(firebaseConfig);

export default function Index() {



  const router = useRouter();
  const auth = getAuth();
  

  const [isLogin, setIsLogin] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const x_dimensions = Dimensions.get('window').width
  const y_dimensions = Dimensions.get('window').height


  const userlogin = async () => {

    try{

      await signInWithEmailAndPassword(auth, email,password);

      const unsubscribe = onAuthStateChanged(auth, (user)=>{
   

          if(user != null){
            router.navigate("/main_menu/home")
          }

      });

    }catch(error){
      alert(error);
    }


 
  } // userLogin


  const onLogin = () => {
  
    userlogin();
    
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

    

    image_background: {
      height: "100%",
      width: "100%",
    },

    image_overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "#FFF",
      opacity: 0.9
    },

    cklogoview: {
      marginVertical: 35
    },

    textInputDefault: {
      borderRadius: 10,
      paddingHorizontal: 20,
      backgroundColor:'rgba(13, 60, 82, 0.1)',
      paddingVertical: 8,    
      marginVertical: 2.5,
      flexDirection:"row",
      justifyContent:"space-between"
    },

    buttonLoginDefault: {
    
     
      width: "100%",
      backgroundColor: "#0D3E50",
      padding: 15,
      marginTop: 5,
      borderRadius: 10
    
      
    },

    textLoginButtonDefault: {
      color: "#FFF",
      textAlign: "center",
     
    },

    cklogotagline: {
      fontSize:10,
      textAlign: "center",
      color: "#494547",
      backgroundColor:"#EEE",
      opacity: 0.7,
      marginTop: 40,
      padding: 10,
      marginHorizontal: 15,
      borderRadius: 10
    },

    loginWrapperDefault: {
      paddingHorizontal: 20,
      marginTop: 20
    },

    signUpWrapper: {
      flexDirection:"row",
      width: "100%",
      justifyContent:"center",
      marginTop: 10
    },

    registration_group: {
      flexDirection: "column",
      marginTop: 10
    },

    signup_via_button: {
      borderColor: "#0D3E50",
      borderWidth: 1,
      borderRadius: 10,
      paddingVertical: 5,
      paddingHorizontal: 20,
      height: 35,
      width: "100%",
      marginBottom: 5,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"

    },

    signup_labels: {
      width: x_dimensions - 220
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

    

      <ImageBackground style = { style.image_background } source = {require('@/assets/fashion_images/3.jpg')}>

    

      <View style = {style.image_overlay}></View>

        <View><Text style = {style.cklogotagline}>CHOOSE ME TO FIT IN YOURS</Text></View>

        <View style = {style.loginWrapperDefault}>

          <View style = {style.cklogoview}>
            <Text style = {style.cklogo}>cK</Text>
            <Text style = {style.cklogotitle}>Cho Kaneur</Text>
         
          </View>

          <View style = {style.textInputDefault}>
            <Icon
              name="user"
              type="font-awesome" // You can specify the icon library
              color="#0D3E50"
              size={25}
            />
            <TextInput style = {{ width: x_dimensions-120 }} onChangeText={setEmail} placeholder = "Email/Username"></TextInput>
          </View>

          <View style = {style.textInputDefault}>
            <Icon
              name="lock"
              type="font-awesome" // You can specify the icon library
              color="#0D3E50"
              size={25}
            />
            <TextInput style = {{ width: x_dimensions-120 }} onChangeText={setPassword} secureTextEntry = {true} placeholder = "Password"></TextInput>
          </View>
      
          <TouchableOpacity style = {style.buttonLoginDefault} onPress={onLogin}>
            <Text style = {style.textLoginButtonDefault}>Login</Text>
          </TouchableOpacity>

          <View style = {style.registration_group}>

        
            <View style = { style.signUpWrapper }>
              <Text>Not yet registered? </Text>
              <Text style = {{ fontWeight:"bold" }}>Signup </Text>
              <Text>Here</Text>
            </View>

            <View style = { style.signUpWrapper }>            
              <Text style = {{ marginTop: 10, marginBottom: 20, fontSize:10, fontWeight:"bold" }}>OR</Text>
            </View>

            <View style = {style.signup_via_button}>
              <Icon
                name="google"
                type="font-awesome" // You can specify the icon library
                color="#0D3E50"
                size={18}
                style = {{ width: 35 }}
              />
              <Text style = {style.signup_labels}>Sign Up via Google</Text>
            </View>
            
            
            <View style = {style.signup_via_button}>
              <Icon
                name="facebook"
                type="font-awesome" // You can specify the icon library
                color="#0D3E50"
                size={18}
                style = {{ width: 35 }}
              />
              <Text style = {style.signup_labels}>Sign Up via Facebook</Text>
            </View>

            
            <View style = {style.signup_via_button}>
              <Icon
                name="github"
                type="font-awesome" // You can specify the icon library
                color="#0D3E50"
                size={18}
                style = {{ width: 35 }}
              />
              <Text style = {style.signup_labels}>Sign Up via Github</Text>
            </View>


            <View style = {{ flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop: 50,  width: x_dimensions - 50 }}>

              <Icon
                name="copyright"
                type="font-awesome" // You can specify the icon library
                color="#0D3E50"
                size={12}
                style = {{ width: 20 }}
              />

              <Text style = {{ fontSize: 8, color:"#0D3E50" }}>Cho Kaneur Groups 2024</Text>

            </View>
        

          </View>

        </View>

     

      </ImageBackground>

   

    </View>
  );
}

import React from "react";
import { View,Text,SafeAreaView,Image, Alert} from "react-native";
import styles from "./Login.style"
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";

import config from "../../../config";
import { Formik } from "formik";
import usePost from "../../hooks/usePost/usePost";

const Login=({navigation})=>{
    const {data,loading,error,post}=usePost();
    const dispatch=useDispatch();

    function handleLogin(values){
        post(config.API_AUTH_URL+"/login",values)
    }
    

    if(data){
        if(data.token==undefined){
            Alert.alert("Dükkan","Kullanıcı bulunamadı");
        }
        else{
            dispatch({type:"SET_USER",payload:{user}})
            navigation.navigate("ProductsScreen");
        }
        
    }


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require("../../assets/shop.png")}></Image>
            </View>
            <Formik
            initialValues={{username:"",password:""}} onSubmit={handleLogin}>
                {({handleSubmit,handleChange,values})=>(
                <View style={styles.body_container}>
                    <Input placeholder="Kullanıcı adınızı giriniz..." value={values.username}
                    onType={handleChange("username")} iconName="md-person"></Input>
                    <Input placeholder="Şifrenizi giriniz..." value={values.password}
                    onType={handleChange("password")} iconName="md-key" isSecure></Input>
                    <Button text="Giriş Yap" onPress={handleSubmit} loading={loading}></Button>
                </View>)}
            </Formik>
        </SafeAreaView>
    );
}

export default Login;

const user={"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},"city":"kilcoole","street":"new road","number":7682,"zipcode":"12926-3874"},"id":1,"email":"john@gmail.com","username":"johnd","password":"m38rmF$","name":{"firstname":"john","lastname":"doe"},"phone":"1-570-236-7033","__v":0}

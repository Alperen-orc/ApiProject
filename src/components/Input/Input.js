import React from "react";
import { View,TextInput } from "react-native";
import styles from "./Input.style"
import  Ionicons  from "react-native-vector-icons/Ionicons";

const Input=({placeholder,value,onType,iconName,isSecure})=>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} onChangeText={onType} value={value} secureTextEntry={isSecure}></TextInput>
            <Ionicons name={iconName} size={20} color="gray"></Ionicons>
        </View>
    );
}

export default Input;
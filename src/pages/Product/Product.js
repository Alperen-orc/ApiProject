import React, {useState,useEffect} from "react";
import { View,Text,SafeAreaView,FlatList,ActivityIndicator,Button } from "react-native";
import config from "../../../config"

import ProductCard from "../../components/ProductCard"
import useFetch from "../../hooks/useFetch"
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { useDispatch } from "react-redux";


const Products=({navigation})=>{
    const dispatch=useDispatch();
    const{loading,error,data}=useFetch(config.API_URL);
 
    const handleProductSelect= id => {
        navigation.navigate("DetailScreen",{id});
    };

    const renderProduct=({item})=>(
    <ProductCard product={item} onSelect={()=> handleProductSelect(item.data)}></ProductCard>
    );

    if(loading){
        return <Loading></Loading>
    }
    if(error){
        return <Error></Error>
    }

    return(
        <SafeAreaView>
            <Button title="LogOut" onPress={()=>dispatch({type:"SET_USER",payload:{user:null}})}></Button>
            <FlatList data={data} renderItem={renderProduct}>
            </FlatList>
        </SafeAreaView>
    );
}
export default Products;
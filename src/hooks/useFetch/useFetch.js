import {useState, useEffect } from "react";
import axios from "axios";

function useFetch(url){
    const [error,setError]=useState(null);
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

    const fetchData= async ()=>{
        try {
     const {data:responsetData}= await axios.get(url);
     setData(responsetData);
     setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return {error,loading,data};
}

export default useFetch;
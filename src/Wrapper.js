import React from "react";
import Route from "./Route";
import AuthProvider from "./context/AuthProvider/AuthProvider";

export default()=>{
    return(
        <AuthProvider>
            <Route></Route>
        </AuthProvider>
    );
}
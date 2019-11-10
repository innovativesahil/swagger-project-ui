import React , { Component } from 'react'
import SwaggerUI from 'swagger-ui-react';
import "swagger-ui-react/swagger-ui.css"

export default class SwaggerWrapper extends Component{

    render(){
        const reqIntercept = req => {
            console.log(req);
        }
    
        const resIntercept = res => {
            console.log(res.data);
        }

        var json = require("./swagger.json")
        console.log(json);
        
        return(
            <div>
                <SwaggerUI 
                    // spec = {json}
                    url = "http://localhost:8080/v2/api-docs" 
                    requestInterceptor = {reqIntercept} 
                    responseInterceptor = {resIntercept}/>
            </div>
        )
    }
}
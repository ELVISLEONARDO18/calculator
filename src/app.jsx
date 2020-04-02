import React, { Component } from 'react';

export default class APP extends Component{
 
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            isAuth:false,
            loading:false,
        }


    }

    
    
    
    

   
  
 render(){
    return(
        <div className="content">
            <h1>Hola mundo!!</h1>
            <button className="btn btn-danger"><i className="pe-7s-config"></i>  SEND</button>
        </div>
    )
 }

} 

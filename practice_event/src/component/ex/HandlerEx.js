// class component

import React, { Component } from 'react'

export default class HandlerEx extends Component {

    constructor(props) {
        super(props);
    
        this.state= {
        title : 'Hello World!',
        color : 'black',
        text : '검은색 글씨',
        text2 : '안녕하세요',
        btn : "사라져라"
        }

    }

   

  render(){

    const {title, color, text, text2, btn} = this.state


     const ent = () =>{
         this.setState({title:"Goodbye world"})
     }

    return (
      <div>
        
        <h1>{title}</h1> 
        <h1 style={{color:color}}>{text}</h1>
        <button onClick={ent}>change</button>        
        <button onClick={()=>{this.setState({color: 'red', text:'빨간색'})}}>빨간색</button>        
        <button onClick={()=>{this.setState({color: 'blue', text:'파란색'})}}>파란색</button>        
        <button onClick={(e)=>{
            console.log('e >>',e.target);
          if (btn==="사라져라") {
            this.setState({text2:""});
            this.setState({btn:"나타나라"})
          }else {
            this.setState({btn:"사라져라"})
            this.setState({text2:'안녕하세요'})
          }
          
          }
        }>{btn}</button>   
        <h1>{text2}</h1>     
        
        </div>
    )
  }
}

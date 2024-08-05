import React, { Component } from 'react'

export default class HandlerEx extends Component {

    constructor(props) {
        super(props);
    
    // this.state= {
    //     title : 'Hello World!',
    // }

        this.state = {
            color :'검정색',
        }
    }

   

  render(){

    //const {title} = this.state
    const {color} = this.state

    // const ent = () =>{
    //     this.setState({title:"Goodbye world"})
    // }
    const chgColor = () => {
        this.setState({
            color:'red'
        })
    }

    return (
      <div>
        
        {/* <h1>{title}</h1>  */}
        <h1 style={color}>{color}</h1>
        {/* <button onClick={ent}>change</button>         */}
        <button onClick={this.chgColor}>빨간색</button>        
        <button onClick={this.chgColor}>파란색</button>        
        </div>
    )
  }
}

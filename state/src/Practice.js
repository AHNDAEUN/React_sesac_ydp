import React, { Component } from 'react'

export default class Practice extends Component {
  
    state = {
        count : 0,
    }
  
    render() {
        const {count} = this.state;
    return (
      <div>
        
        <div>{count}</div>
        <button onClick={() =>{
            this.setState({count : count+2})
        }}>+2</button>

        <button onClick={() =>{
        this.setState({count : count-1})
        }}>-1</button>

      </div>
    )
  }
}

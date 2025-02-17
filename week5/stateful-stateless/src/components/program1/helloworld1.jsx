import React, { Component } from 'react'

class Helloworld1 extends Component{
    constructor(){
        super();
        this.state={
            message:"Hello World! (stateful)"
        };
    }
    render()
    {
        return <h1>{this.state.message}</h1>
    }
}

export default Helloworld1
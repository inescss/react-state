import React, { Component } from 'react'

export class Conteur extends Component {
    constructor(props) {
        super(props)
        console.log("constructor()")
    
        this.state = {
            count:0
           
        }
    }
  
    componentDidMount(){
        console.log("componentDidMount()")
        setInterval(() => {this.increment()}, 1000);
    }
    increment = () => {
        this.setState({ count:this.state.count+1})
    }
    componentWillUnmount = () => {
        console.log("componentWilUnmount()")
        this.setState({count:this.state.count})
    }
    render() {
        console.log("render()")
        return (
            <div>
               <h1>{this.state.count}</h1>
            </div>
        )
        } 
}

export default Conteur

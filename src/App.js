import React, { Component } from 'react'
import Profile from './components/profile/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap"
import './App.css'; 


export class App extends Component {
  state = {
    isShow:false
  }
  state = {
    Person : [
      {
        imgSrc:"https://i.pinimg.com/originals/5d/57/2d/5d572d653acb9dfc66f45fc42733bb7b.png",
        fullName:"Ahmed",
        pio:"cv",
        Profession:"Teacher",
        show:true
      },
    ]
  }
  handleClick = () => {
    this.setState({isShow:!this.state.isShow})
  }
  render() {
    return (
      <div className="App" style={{textAlign:"center", marginTop:"100PX"}}>
        <Button style={{marginTop:"100PX"}} variant="outline-success" size="lg" onClick={this.handleClick}>{this.state.isShow ? "person profile" : "show"}</Button>
        <br/>
        {
          this.state.isShow ? <Profile Person={this.state.Person}/> : "click the button  to show the  profile"
        }
      </div>
    )
  }
}

export default App

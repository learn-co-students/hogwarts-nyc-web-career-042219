import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Container from './Container'
import hogs from '../porkers_data';
import {longKey} from './Card'

class App extends Component {


  state = {
    hogs: [],
    sortType: "none",
    filteredHogs: false
  }

  componentDidMount(){
    this.setState({hogs: hogs})
  }


filterGrease = () => this.setState({ filteredHogs: !this.state.filteredHogs})

setSortType = e => {
this.setState({sortType: e.target.value})
}


filteredGreaseHogs = () =>{
  const filteredHogs = this.state.hogs
  return  this.state.filteredHogs ? filteredHogs.filter(hog=> hog.greased) : filteredHogs
}


setPassedHogs = () =>{

  let passedHogs  = this.filteredGreaseHogs()

  switch(this.state.sortType){
    case "none":
    return passedHogs
    break
    case "name":
    return [...passedHogs].sort((hogA, hogB) => {
          if (hogA.name > hogB.name){
            return 1
          } else if (hogA.name < hogB.name){
            return -1
          } else {
            return 0
          }
      })
    break
    case "weight":
    return [...passedHogs].sort((hogA, hogB) => hogB[longKey] - hogA[longKey])
    break
  }
}



  render() {
    return (
      <div className="App" >
          <Nav filterGrease={this.filterGrease} setSortType={this.setSortType}/>
          <Container hogs={this.setPassedHogs()}/>
      </div>
    )
  }
}


export default App;

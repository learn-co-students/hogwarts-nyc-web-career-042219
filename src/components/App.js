import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogBox from './HogBox.js';

class App extends Component {

  state = {
    hogs: hogs,
    greaseFilter: false,
    sortType: "none"
  }

  toggleFilter = () => {
    this.setState({
      greaseFilter: !this.state.greaseFilter
    })
  }

  changeSortType = (newSortType) => {
    this.setState({
      sortType: newSortType
    })
  }

  applyFilter = () => {
    if (this.state.greaseFilter) {
      return this.state.hogs.filter(hog => {
        return hog.greased
      })
    } else {
      return this.state.hogs
    }
  }

  applySort = () => {
    const filteredHogs = this.applyFilter()

    switch(this.state.sortType) {
      case "none":
        return filteredHogs
      case "weight":
        return[...filteredHogs].sort((hogA, hogB) => {
          return hogA.weight - hogB.weight
        })
      case "name":
        return[...filteredHogs].sort((hogA, hogB) => {
          return hogA.name.localeCompare(hogB.name)
        })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          <Nav changeSortType={this.changeSortType} toggleFilter={this.toggleFilter}/>
          <HogBox hogs={this.applySort()}/>
      </div>
    )
  }
}

export default App;

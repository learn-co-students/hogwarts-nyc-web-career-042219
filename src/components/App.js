import React, { Component } from 'react';
import '../App.css';
import hogs from '../porkers_data';
import Nav from './Nav'
import HogContainer from '../components/HogContainer'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';

class App extends Component {
  state = {
    greased: false,
    byName: false,
    byWeight: false
  }

  applyChanges = () => { 
    const filtered = this.filterHogs();

    if(this.state.byName) {
      filtered.sort((a, b) => a.name.localeCompare(b.name))
    } else if (this.state.byWeight) {
      filtered.sort((a, b) => { return b[weight] - a[weight] })
    }

    return filtered;
  }

  filterHogs = () => { return (this.state.greased) ? hogs.filter(hog => hog.greased) : hogs}

  filterGreased = () => {
    this.setState({
        greased: !this.state.greased
    })
  }

  sortByName = () => {
    this.setState({
        byName: !this.state.byName
    })
  }

  sortByWeight = () => {
    this.setState({
        byWeight: !this.state.byWeight
    })
  }

  render() {
    if (this.state.byName) this.sortByName();
    if (this.state.byWeight) this.sortByWeight();

    return (
      <div className="App">
          < Nav filterGreased={this.filterGreased} sortByName={this.sortByName} sortByWeight={this.sortByWeight} />
          < HogContainer hogs={this.applyChanges()} byName={this.state.byName} byWeight={this.state.byWeight} />
      </div>
    )
  }
}

export default App;

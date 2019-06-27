import React, { Component } from 'react';
import Tile from './Tile';

class Index extends Component {

  state = {
    filter: false,
    sortName: false,
    sortWeight: false,
  }

  handleClick = (e) => {
    console.log([e.target.name])
    this.setState({
      [e.target.name]: !!(e.target.value)
    });
  }

  sortByName = (firstEl, secondEl) => {
    if (firstEl.name < secondEl.name) {
      return -1;
    }
    if (firstEl.name > secondEl.name) {
      return 1;
    }
    return 0;
  }

  sortByWeight = (firstEl, secondEl) => {
    return firstEl['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - secondEl['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
  }

  filterGreased = (hogObject) => hogObject.greased


  renderAllHogs = () => {
    this.state.sortName && this.props.hogs.sort(this.sortByName);
    this.state.sortWeight && this.props.hogs.sort(this.sortByWeight);
    if (this.state.filter) {
      const filtered = this.props.hogs.filter(this.filterGreased);
      return filtered.map(hog => <Tile name={hog.name} hogs={filtered} key={hog.name} />)
    }
    console.log
    return this.props.hogs.map((hog) => {
      return <Tile name={hog.name} hogs={this.props.hogs} key={hog.name} />
    });
  }

  render() {
    return (
      <div className="ui grid container">
        <button onClick={this.handleClick} name='sortName' value={this.state.sortName} className="ui toggle button">Sort By Name: {this.state.sortName.toString()}</button>
        <button onClick={this.handleClick} name='sortWeight' value={this.state.sortWeight} className="ui toggle button">Sort By Weight: {this.state.sortWeight.toString()}</button>
        <button onClick={this.handleClick} name='filter' value={this.state.filter} className='className="ui toggle button"' >Filter: {this.state.filter.toString()}</button>
        <br/><br/><br/><br/>
        <div className="ui cards">
          {this.renderAllHogs()}
        </div>
      </div>
    );
  }
}

export default Index;
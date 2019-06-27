import React, { Component } from 'react';
import Details from './Details';

class Tile extends Component {

  state = {
    showDetails: false,
  }

  getImage = (name) => {
    name = this.props.name.toLowerCase().replace(/\s/g, '_');
    const img = require(`./../hog-imgs/${name}.jpg`);
    return img;
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      showDetails: true,
    });
  }

  renderDetails = () => {
    const hogDetails = this.props.hogs.find(hogObj => hogObj.name === this.props.name);
    return (
      <div className="description">
        <Details name={this.props.name} hog={hogDetails} />
      </div>
    )
  }

  render() {
    return (
      <div className='ui column four wide'>
          <div className='ui card'>
          <div className="image">
            <img src={this.getImage(this.props.name)} alt={this.props.name}/>
          </div>

          <div className="content">
            <a onClick={this.handleClick} href={this.props.name} className="header">{this.props.name}</a>
          </div>
          {this.state.showDetails ? this.renderDetails() : null}
        </div>
      </div>

    );
  }
}

export default Tile;
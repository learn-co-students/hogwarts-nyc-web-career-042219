import React, { Component } from 'react';

class Details extends Component {
  render() {
    return (
      <div className='description'>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Highest Medal: {this.props.hog['highest medal achieved']}</p>
      </div>
    )
  }
}

export default Details
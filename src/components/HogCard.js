import React from 'react'


export default class HogCard extends React.Component {

  state = {
    open: false
  }

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  showDetails = () => {
    if (this.state.open){
      return (
      <div>
        <p>This pig is{this.props.greased ? "" : " not"} greased.</p>
        <p>Specialty: {this.props.specialty}</p>
        <p>Weight: {this.props.weight}</p>
        <p>Highest Medal: {this.props.medal}</p>
      </div>
    )} else {
      return null
    }
  }

  render () {
    const imgName = this.props.name.toLowerCase().split(" ").join("_") + '.jpg'

      return (
        <div onClick={this.toggleOpen} className="HogCard">
          <img src={`./hog-imgs/${imgName}`} alt={this.props.name}/>
          <p>{this.props.name}</p>
          {this.showDetails()}
        </div>
      )

  }
}

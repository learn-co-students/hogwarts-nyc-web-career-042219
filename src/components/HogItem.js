import React, { Component } from 'react';

export default class HogItem extends Component {
    state = {
        details: false,
        hidden: false
    }

    addDetails = () => {
        this.setState({
            details: !this.state.details
        })
    }

    renderDetails = () => {
        if (this.state.details) {
            return (
                <p> {this.props.speciality} <br></br>
                    {(this.props.greased) ? 'Greased' : 'Not Greased'} <br></br>
                    Weight: {this.props.weight} <br></br>
                    Medal: {this.props.medal} <br></br>
                </p>
            )
        }
    }

    hidePiggy = () => {
        this.setState({
            hidden: true
        })
    }

    formatName = () => {
        let original = this.props.name.toLowerCase();
        let formatted = original.split(' ').join('_')
        console.log("STRING IS ", formatted);
        return formatted;
    }

    render() {
        return (
            <div onClick={this.addDetails} className='ui link card eight wide column' style={(this.state.hidden) ? {display: 'none'} : {display: 'block'}}> 
                <div className='image'>
                    <img src={process.env.PUBLIC_URL + `hog-imgs/${this.formatName()}.jpg`} alt={this.props.name}></img>
                </div>
                <div class="content">
                    <a className='header'> {this.props.name} </a>
                    <div className='description'>
                        {this.renderDetails()}
                    </div>
                    <button onClick={this.hidePiggy}> Hide this fatass porker </button>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import HogItem from '../components/HogItem'

export default class HogContainer extends Component {
    render() {
        return (
            <div className='ui grid container'>
                {this.props.hogs.map(hog => <HogItem {...hog} />)}
            </div>
        );
    }
}
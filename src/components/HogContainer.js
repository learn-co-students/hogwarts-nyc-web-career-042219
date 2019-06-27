import React, { Component } from 'react';
import hogs from '../porkers_data';
import HogItem from '../components/HogItem'

export default class HogContainer extends Component {

    state = {
        greased: false,
        byName: false,
        byWeight: false
    }

    sortHogsByName = () => {
        console.log('Were sorting')
        hogs.sort((a, b) => {
            let pigA = a.name.toUpperCase();
            let pigB = b.name.toUpperCase();

            if (pigA < pigB) return -1;
            if (pigA > pigB) return 1;

            return 0;
        })
    }

    sortHogsByWeight = () => {
        hogs.sort((a, b) => {
            let weightA = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
            let weightB = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];

            if (weightA < weightB) return -1;
            if (weightA > weightB) return 1;

            return 0;
        })
    }

    renderHogs = (array) => {
        return array.map((hog, i) => {
            if (this.state.greased) {
                if (hog.greased) {
                    return <HogItem 
                        key={i} name={hog.name} 
                        speciality={hog.specialty} 
                        greased={hog.greased} 
                        weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} 
                        medal={hog['highest medal achieved']}
                    />
                } else { return '' }
            } else {
                return <HogItem 
                    key={i} name={hog.name} 
                    speciality={hog.specialty} 
                    greased={hog.greased} 
                    weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} 
                    medal={hog['highest medal achieved']}
                />
            }
        })
    }

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
        return (
            <div>
                <div className='buttons'>
                        <button onClick={this.filterGreased}> Filter Greased Piggies </button>
                        <button onClick={this.sortByName}> Sort by Name </button>
                        <button onClick={this.sortByWeight}> Sort by Weight</button>
                </div>
                <br></br>
                <div className='ui grid container'>
                    {(this.state.byName) ? this.sortHogsByName() : ''}
                    {(this.state.byWeight) ? this.sortHogsByWeight() : ''}
                    {this.renderHogs(hogs)}
                </div>
            </div>
        );
    }
}
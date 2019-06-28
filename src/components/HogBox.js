import React from 'react'
import HogCard from './HogCard.js'

export default class HogBox extends React.Component {

  render() {
      return (
        <div className="HogBox">
          {
            this.props.hogs.map(hog => {
            return <HogCard key={hog.name} {...hog} />
          })
        }
        </div>
      )
    }

}

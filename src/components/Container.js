import React from 'react'
import Card from './Card'

export default class Container extends React.Component {



    render(){
      return (
        <div className="ui grid container">
          {
            this.props.hogs.map(hog => {
              return <Card key={hog.name} {...hog} />
            })
          }
        </div>
      )
    }
  }

import React from "react";

export const longKey = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";





export default class Card extends React.Component {
  state = {
    open: false,
    hide: false
  };

  openClose = () => {
    this.setState({ open: !this.state.open });
  };

  greaseCheck = () => {
    return this.props.greased ? "GREASY" : "JUST FAT";
  };

  hide = () => {
    console.log(this.state.hide);
    this.setState({
      hide: !this.state.hide
    });
  };

  render() {

    const hogPic = this.props.name.replace(/ /g, "_").toLowerCase();
    const medal = "highest medal achieved";

    return this.state.hide ? null : (
      <div className="ui eight wide column">
        {this.props.name}
        <br />
        <img
          onClick={this.openClose}
          src={require(`../hog-imgs/${hogPic}.jpg`)}
          alt={this.props.name}
        />
        {this.state.open ? (
          <div>
            {this.props.specialty}
            <button onClick={this.hide}>Hide Me</button>
            <br />
            Grease Status: {this.greaseCheck()}
            <br />
            Weight: {this.props[longKey]}
            <br />
            Medal: {this.props[medal]}
          </div>
        ) : null}
      </div>
    );
  }
}

// specialty: 'Mediocre magic',
// greased: false,
// 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
// 'highest medal achieved': 'bronze'

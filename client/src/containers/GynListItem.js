import React, { Component } from "react";

class GynListItem extends Component {
  render() {
    return (
      <div>
        <div key={this.props.gyn._id}>
          <h3>{this.props.gyn.name}</h3>
          <h3>{this.props.gyn.address}</h3>
          <h3>{this.props.gyn.phoneNumber}</h3>

          <h3>{this.props.gyn.likes.length}</h3>
          {this.props.user &&
          this.props.gyn.likes.includes(this.props.user._id) ? (
            <button
              className="btn btn-danger"
              onClick={() => this.props.handleClick(this.props.gyn._id)}
            >
              Unlike{" "}
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => this.props.handleClick(this.props.gyn._id)}
            >
              Like
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default GynListItem;

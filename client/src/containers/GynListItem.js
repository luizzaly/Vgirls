import React, { Component } from "react";

class GynListItem extends Component {
  render() {
    return (
      <div>
        <div className="gyn-container" key={this.props.gyn._id}>
          <h3 className="gyn-name">{this.props.gyn.name}</h3>
          <p>{this.props.gyn.address}</p>
          <p>{this.props.gyn.phoneNumber}</p>

          <div className="like-container">
            <p className="user-likes">{this.props.gyn.likes.length}</p>
            {this.props.user &&
            this.props.gyn.likes.includes(this.props.user._id) ? (
              <button
                className="heart-grey"
                onClick={() => this.props.handleClick(this.props.gyn._id)}
              >
                <i class="fas fa-heart red" />
              </button>
            ) : (
              <button
                className="heart-red"
                onClick={() => this.props.handleClick(this.props.gyn._id)}
              >
                <i class="fas fa-heart grey " />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default GynListItem;

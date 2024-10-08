import React, { Component } from "react";

class Like extends Component {
  state = {
    likes: 0,
  };

  handleIncrement = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  handleDecrement = () => {
    this.setState({ likes: this.state.likes - 1 });
  };

  render() {
    return (
      <div>
        <p data-testid="likeNumber">Likes: {this.state.likes}</p>
        <button data-testid = "increment" id="increment" onClick={this.handleIncrement}>
          Like
        </button>
        <button data-testid = "decrement" id="decrement" onClick={this.handleDecrement}>
          {" "}
          Dislike
        </button>
      </div>
    );
  }
}

export default Like;
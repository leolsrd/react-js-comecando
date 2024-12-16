import React, { Component } from "react";
import Membro from "./components/Membro";
import Feed from "./components/Feed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: "Matheus", curtidas: 10, comentarios: 2 },
        { id: 2, username: "Leo", curtidas: 2, comentarios: 0 },
        { id: 3, username: "Carla", curtidas: 30, comentarios: 13 },
        { id: 4, username: "Jéssica", curtidas: 7, comentarios: 5 },
        { id: 5, username: "Rafaela", curtidas: 1, comentarios: 1 },
        { id: 5, username: "Rafaela", curtidas: 1, comentarios: 1 },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <Feed
              key={item.id}
              username={item.username}
              curtidas={item.curtidas}
              comentarios={item.comentarios}
            />
          );
        })}
      </div>
    );
  }
}

export default App;

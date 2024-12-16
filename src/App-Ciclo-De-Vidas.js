import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: "00:00:00",
    };
  }

  // * Montando o componente
  componentDidMount() {
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  }

  // * Quando o componente é atualizado
  componentDidUpdate() {
    console.log("Atualizou");
  }

  render() {
    return (
      <div>
        <h1>Meu Projeto</h1>
        {this.state.hora}
      </div>
    );
  }
}

export default App;

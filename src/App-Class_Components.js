import React, { Component } from "react";

class Equipe extends Component {
  render() {
    return (
      <div>
        <Sobre
          nome={this.props.nome}
          cargo={this.props.cargo}
          idade={this.props.idade}
        />
        <hr />
      </div>
    );
  }
}

class Sobre extends Component {
  render() {
    return (
      <div>
        <h2>Olá sou o(a) {this.props.nome}</h2>
        <h3>Cargo {this.props.cargo}</h3>
        <h3>Idade {this.props.idade}</h3>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe: </h1>
      <Equipe nome="Léo" cargo="Programador" idade="41" />
    </div>
  );
}

export default App;

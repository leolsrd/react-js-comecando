import React, { Component } from "react";

// ? Referente a aula de eventos

class Membro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: props.nome,
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    return this.setState({ nome: "Matheus" });
  }

  render() {
    return (
      <div>
        <h3>Bem-Vindo(a) {this.state.nome}</h3>
        <button onClick={this.entrar}>Entrar como Matheus</button>
        <button onClick={() => this.setState({ nome: "" })}>Sair</button>
      </div>
    );
  }
}

export default Membro;

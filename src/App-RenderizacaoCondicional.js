import React, { Component } from "react";
import Membro from "./components/Membro";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
    this.sair = this.sair.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  sair() {
    this.setState({ status: false });
  }

  entrar() {
    this.setState({ status: true });
  }

  render() {
    return (
      <div>
        {this.state.status ? (
          <div>
            <h2>Bem-Vindo ao sistema!</h2>
            <button onClick={this.sair}>Sair</button>
          </div>
        ) : (
          <div>
            <h2>Olá Visitante faça o Login</h2>
            <button onClick={this.entrar}>Entrar</button>
          </div>
        )}
        <div>Curso React JS</div>
      </div>
    );
  }
}

export default App;

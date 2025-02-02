import React, { Component } from "react";
import Feed from "./components/Feed";

// ? Formulários

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
      error: "",
    };
    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(e) {
    const { nome, email, senha } = this.state;

    if (nome !== "" && email !== "" && senha !== "") {
      alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
    } else {
      this.setState({ error: "Ops parece que está faltando algo" });
    }

    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Novo usuário</h1>

        {this.state.error && <p>{this.state.error}</p>}

        <form onSubmit={this.cadastrar}>
          <label>Nome: </label>
          <input
            types="text"
            value={this.state.nome}
            onChange={(e) => this.setState({ nome: e.target.value })}
          />
          <br />

          <label>Email: </label>
          <input
            type="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <br />

          <label>Senha: </label>
          <input
            type="password"
            value={this.state.senha}
            onChange={(e) => this.setState({ senha: e.target.value })}
          />
          <br />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default App;

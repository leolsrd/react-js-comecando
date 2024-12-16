import React from "react";

const BemVindo = (props) => <h2>Bem-Vindo(a) {props.nome}</h2>;

function App() {
  return (
    <div>
      Olá Mundo!
      <BemVindo nome="Matheus" />
      <h1>Curso React</h1>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import styled from "styled-components";
import Imagen from "./img/breakingbad.svg.png";

const Boton = styled.button`
  margin-top: 5rem;
  padding: 1rem 2.5rem;
  color: white;
  background-color: black;
  font-weight: bold;
  font-size: 20px;
  border: none;
  text-transform: uppercase;
  border-radius: 10px;
`;

const Frase = styled.div`
  padding: 2rem;
  font-size: 50px;
  font-family: "Dancing Script";
  color: white;
`;

const Autor = styled.div`
  text-align: right;
  margin-right: 4rem;
  color: white;
  font-family: "Dancing Script";
  font-size: 25px;
`;

const Contenedor = styled.div`
  margin-top: 4rem;
  text-align: center;
  padding: 2rem;
`;

const IMG = styled.img`
  max-width: 100%;
  height: auto;
`;

function App() {
  //hooks
  const [frase, setFrase] = useState("");
  const [autor, setAutor] = useState("");

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async () => {
    const url = "https://breakingbadapi.com/api/quote/random";
    const resultado = await fetch(url);
    const respuesta = await resultado.json();
    const { quote, author } = respuesta[0];
    setFrase(quote);
    setAutor(author);
    console.log(respuesta);
  };

  return (
    <>
      <Contenedor>
        <IMG src={Imagen}></IMG>
        <Frase>"{frase}"</Frase>
        <Autor>{autor}</Autor>
        <Boton onClick={handleSubmit}>Obtener Frase</Boton>
      </Contenedor>
    </>
  );
}

export default App;

import styled from "styled-components";
import Imagen from "../img/breakingbad.svg.png";

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
  transition: background-color;
  transition-duration: 0.5s;
  &:hover {
    background-color: rgb(22, 29, 29);
  }
`;

const DivFrase = styled.div`
  margin-top: 2rem;
  font-size: 50px;
  font-family: "Dancing Script";
  color: white;
`;

const Autor = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: white;
  font-family: "Dancing Script";
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 25px;
    text-align: right;
  }
  @media (min-width: 992px) {
    font-size: 30px;
    text-align: right;
  }
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

const ContenedorFrase = styled.div`
  margin-left: 4rem;
  margin-right: 4rem;
`;

const Frase = ({ frase, autor, setFrase, setAutor }) => {
  const handleSubmit = async () => {
    const url = "https://breakingbadapi.com/api/quote/random";
    const resultado = await fetch(url);
    const respuesta = await resultado.json();
    const { quote, author } = respuesta[0];
    setFrase(quote);
    setAutor(author);
  };
  return (
    <Contenedor>
      <IMG src={Imagen}></IMG>
      <ContenedorFrase>
        <DivFrase>"{frase}"</DivFrase>
        <Autor>{autor}</Autor>
      </ContenedorFrase>
      <Boton onClick={handleSubmit}>Obtener Frase</Boton>
    </Contenedor>
  );
};

export default Frase;

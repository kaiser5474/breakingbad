import { useState, useEffect } from "react";
import Frase from "./components/Frase";

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
  };

  return (
    <Frase
      frase={frase}
      setFrase={setFrase}
      autor={autor}
      setAutor={setAutor}
    />
  );
}

export default App;

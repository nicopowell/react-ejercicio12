import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import ListaNoticias from "./components/ListaNoticias";

function App() {
  const [noticias, setNoticias] = useState([]);

  const consultarAPI = async (categoria) => {
    console.log("Consultando la API para la categoría:", categoria);
    try {
      const respuesta = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_239563736315da29b1c357ac928ebd51256b2&language=es&category=" +
          categoria
      );
      const datos = await respuesta.json();
      console.log(respuesta);
      console.log(datos.results);
      setNoticias(datos.results);
    } catch (errores) {
      console.log(errores);
    }
  };

  const handleCategoriaSeleccionada = (categoria) => {
    consultarAPI(categoria);
  };

  return (
    <>
      <Titulo></Titulo>
      <hr />
      <Container className="border p-4">
        <Formulario
          handleCategoriaSeleccionada={handleCategoriaSeleccionada}
          consultarAPI={consultarAPI}
        ></Formulario>
        <hr />
        <ListaNoticias noticias={noticias}></ListaNoticias>
      </Container>
    </>
  );
}

export default App;

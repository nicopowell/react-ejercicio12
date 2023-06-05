import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import ListaNoticias from "./components/ListaNoticias";

function App() {
  const [noticias, setNoticias] = useState([]);

  const consultarAPI = async (categoria, pais) => {
    try {
      const link = `https://newsdata.io/api/1/news?apikey=pub_239563736315da29b1c357ac928ebd51256b2${pais ? `&country=${pais}` : ""}&language=es${
        categoria ? `&category=${categoria}` : ""
      }`;
      const respuesta = await fetch(link);
      const datos = await respuesta.json();
      setNoticias(datos.results);
    } catch (errores) {
      console.log(errores);
    }
  };

  const handleSeleccion = (categoria, pais) => {
    consultarAPI(categoria, pais);
  };

  return (
    <>
      <Titulo></Titulo>
      <hr />
      <Container className="border p-4">
        <Formulario
          handleCategoriaSeleccionada={handleSeleccion}
          consultarAPI={consultarAPI}
        ></Formulario>
        <hr />
        <ListaNoticias noticias={noticias}></ListaNoticias>
      </Container>
    </>
  );
}

export default App;
